// @ts-nocheck
// Static-assets Worker for the Next.js `output: 'export'` build in ./out.
// - Normalizes extension-less paths to a trailing slash so Cloudflare Assets
//   serves the matching index.html (e.g. /it -> /it/index.html).
// - Missing assets fall back to the generated 404.html (status preserved).
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const canonicalHost = 'www.palombarolungo.com';

    const isProductionHost = url.hostname === 'palombarolungo.com' || url.hostname === canonicalHost;
    if (isProductionHost && (url.protocol !== 'https:' || url.hostname !== canonicalHost)) {
      url.protocol = 'https:';
      url.hostname = canonicalHost;
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/it' || url.pathname === '/it/' || url.pathname === '/it/index.html') {
      url.pathname = '/';
      return Response.redirect(url.toString(), 301);
    }

    if (
      url.pathname.length > 1 &&
      !url.pathname.endsWith('/') &&
      !url.pathname.slice(1).includes('.')
    ) {
      url.pathname += '/';
      request = new Request(url.toString(), request);
    }

    const errorAliases = ['/404', '/404/', '/404.html', '/_not-found', '/_not-found/'];
    const isErrorAlias = errorAliases.includes(url.pathname);
    const errorHeaders = new Headers(request.headers);
    for (const name of ['if-none-match', 'if-modified-since', 'if-match', 'if-unmodified-since', 'if-range', 'range']) errorHeaders.delete(name);
    const assetRequest = isErrorAlias
      ? new Request(new URL('/404/', request.url), { method: request.method, headers: errorHeaders })
      : request;
    const res = await env.ASSETS.fetch(assetRequest);

    if (res.status === 404 || isErrorAlias) {
      const headers = new Headers(res.headers);
      headers.set('x-robots-tag', 'noindex');
      return new Response(res.body, { status: 404, headers });
    }

    return res;
  }
};
