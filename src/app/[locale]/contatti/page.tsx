import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import { absoluteUrl, siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return [{ locale: 'zh-hant' }];
}

export const metadata: Metadata = {
  title: '聯絡方式｜編輯部與景點資訊',
  description: '分辨獨立指南編輯部與景點參觀服務的聯絡方式。',
  alternates: {
    canonical: absoluteUrl('/zh-hant/contatti/'),
    languages: { it: absoluteUrl('/contatti/'), 'zh-Hant': absoluteUrl('/zh-hant/contatti/') },
  },
};

export default function Page() {
  unstable_setRequestLocale('zh-hant');
  return (
    <GuidePageTemplate
      locale="zh-hant"
      title="聯絡方式 · 編輯部與景點資訊"
      intro="本指南編輯部與景點參觀服務方是不同的聯絡對象。請選擇適合的管道。"
      links={[
        { href: '/zh-hant/', label: '返回旅遊指南' },
        { href: '/zh-hant/chi-siamo/', label: '關於本指南' },
        { href: '/zh-hant/note-legali/', label: '法律說明' },
        { href: '/zh-hant/contatti/', label: '編輯部聯絡方式' },
      ]}
      sections={[
        {
          title: 'palombarolungo.com 編輯部',
          paragraphs: [
            `若要更正文字、反映圖片與著作權問題，或詢問本指南的內容，請寄信至 ${siteConfig.editorialEmail}，並附上頁面網址及問題說明。`,
            '此信箱屬於獨立指南編輯部，並非 Palombaro Lungo 景點的聯絡方式。編輯部無法處理門票、參觀、預約或退款。請勿寄送身分證件或付款資料。',
          ],
        },
        {
          title: '景點與參觀資訊',
          paragraphs: [
            '請到外部網站 palombarolungo.it 查看開放時間、參觀方式及其公布的最新聯絡資訊。該網站與本指南無關；其聯絡方式也不是本站編輯部的聯絡方式。',
          ],
        },
      ]}
    />
  );
}
