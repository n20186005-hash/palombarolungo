'use client';

import { useTranslations } from 'next-intl';
import { siteConfig } from '@/lib/site';

export default function MapEmbed() {
  const t = useTranslations('map');

  return (
    <section className="section-container">
      <h2 className="section-title">{t('title')}</h2>
      <p className="body-text mb-6 text-sm" style={{ color: 'var(--color-text-muted)' }}>
        {t('address')}
      </p>
      <div className="grid gap-4 mb-6 md:grid-cols-3">
        <div className="card">
          <p className="text-xs mb-2" style={{ color: 'var(--color-text-muted)' }}>
            {t('addressLabel')}
          </p>
          <p className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
            {t('address')}
          </p>
        </div>
        <div className="card">
          <p className="text-xs mb-2" style={{ color: 'var(--color-text-muted)' }}>
            {t('phoneLabel')}
          </p>
          <a
            href={`tel:${siteConfig.telephone.replace(/\s+/g, '')}`}
            className="text-sm font-medium hover:underline"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {siteConfig.telephone}
          </a>
        </div>
        <div className="card">
          <p className="text-xs mb-2" style={{ color: 'var(--color-text-muted)' }}>
            {t('websiteLabel')}
          </p>
          <a
            href={siteConfig.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:underline"
            style={{ color: 'var(--color-text-primary)' }}
          >
            palombarolungo.com
          </a>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden mb-6" style={{ border: '1px solid var(--color-border)' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.3206860564583!2d16.6039251769321!3d40.666902571400456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13477fc75932b191%3A0x9cb04920e8c46a9c!2sPalombaro%20lungo!5e0!3m2!1sen!2sus!4v1774358395411!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - Palombaro Lungo"
        />
      </div>
      <a
        href={siteConfig.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        {t('openMaps')} &rarr;
      </a>
      <div className="divider mt-16" />
    </section>
  );
}
