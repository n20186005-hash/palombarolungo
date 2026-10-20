import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import { absoluteUrl } from '@/lib/site';

export function generateStaticParams() {
  return [{ locale: 'zh-hant' }];
}

export const metadata: Metadata = {
  title: '關於本指南｜獨立非官方旅遊資訊',
  description: '認識 Palombarolungo.com 的獨立編輯立場、資訊來源與更正方式。',
  alternates: {
    canonical: absoluteUrl('/zh-hant/chi-siamo/'),
    languages: { it: absoluteUrl('/chi-siamo/'), 'zh-Hant': absoluteUrl('/zh-hant/chi-siamo/') },
  },
};

export default function Page() {
  unstable_setRequestLocale('zh-hant');
  return (
    <GuidePageTemplate
      locale="zh-hant"
      title="關於本指南 · 獨立旅遊資訊"
      intro="Palombarolungo.com 是介紹馬泰拉 Palombaro Lungo 的獨立旅遊資訊指南。"
      links={[
        { href: '/zh-hant/', label: '返回旅遊指南' },
        { href: '/zh-hant/chi-siamo/', label: '關於本指南' },
        { href: '/zh-hant/note-legali/', label: '法律說明' },
        { href: '/zh-hant/contatti/', label: '編輯部聯絡方式' },
      ]}
      sections={[
        {
          title: '獨立身分',
          paragraphs: [
            '本站是第三方資訊刊物，並非景點官方網站。本站並非由 Palombaro Lungo 的所有者或管理者營運、授權、贊助或認可，也不代表政府機關或官方旅遊組織。',
          ],
        },
        {
          title: '編輯方式',
          paragraphs: [
            '本站整理公開資訊，為旅客提供參考，並在指南中標示資料來源。開放時間、票價、參觀方式、聯絡資訊及評價可能變動；出發前請向相關服務方核實。',
            '使用景點名稱是為了說明本指南介紹的地點，並不表示編輯部擁有該文化景點或代表其管理者。',
          ],
        },
        {
          title: '更正與透明度',
          paragraphs: [
            '若發現錯誤、過期資訊或權利相關問題，請透過「編輯部聯絡方式」頁面通知我們。本站不販售門票，也不處理參觀、預約或退款。',
          ],
        },
      ]}
    />
  );
}
