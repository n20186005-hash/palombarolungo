// @ts-nocheck
// Static-assets Worker for the Next.js `output: 'export'` build in ./out.
// - Normalizes extension-less paths to a trailing slash so Cloudflare Assets
//   serves the matching index.html (e.g. /it -> /it/index.html).
// - Missing assets fall back to the generated 404.html (status preserved).
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (
      url.pathname.length > 1 &&
      !url.pathname.endsWith('/') &&
      !url.pathname.slice(1).includes('.')
    ) {
      return env.ASSETS.fetch(new Request(url.pathname + '/', request));
    }

    const res = await env.ASSETS.fetch(request);

    if (res.status === 404) {
      const fallback = await env.ASSETS.fetch(
        new Request(new URL('/404.html', request.url).toString(), request)
      );
      if (fallback.ok) {
        return new Response(fallback.body, {
          status: 404,
          headers: {
            'content-type':
              fallback.headers.get('content-type') || 'text/html; charset=utf-8'
          }
        });
      }
    }

    return res;
  }
};
