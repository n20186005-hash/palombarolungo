import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import GuidePageTemplate from '@/components/GuidePageTemplate';
import { absoluteUrl } from '@/lib/site';

export function generateStaticParams() {
  return [{ locale: 'zh-hant' }];
}

export const metadata: Metadata = {
  title: '法律說明｜非官方網站',
  description: '關於本指南的獨立身分、參觀資訊、第三方內容權利及外部連結。',
  alternates: {
    canonical: absoluteUrl('/zh-hant/note-legali/'),
    languages: { it: absoluteUrl('/note-legali/'), 'zh-Hant': absoluteUrl('/zh-hant/note-legali/') },
  },
};

export default function Page() {
  unstable_setRequestLocale('zh-hant');
  return (
    <GuidePageTemplate
      locale="zh-hant"
      title="法律說明 · 非官方網站"
      intro="以下說明本指南的獨立身分、資訊用途及第三方內容。"
      links={[
        { href: '/zh-hant/', label: '返回旅遊指南' },
        { href: '/zh-hant/chi-siamo/', label: '關於本指南' },
        { href: '/zh-hant/note-legali/', label: '法律說明' },
        { href: '/zh-hant/contatti/', label: '編輯部聯絡方式' },
      ]}
      sections={[
        {
          title: '並無官方關聯',
          paragraphs: [
            'Palombarolungo.com 並非馬泰拉 Palombaro Lungo 的官方網站。本站並非由景點所有者、管理者或政府機關營運、授權、贊助或認可；編輯部亦不代表他們行事。',
          ],
        },
        {
          title: '參觀資訊',
          paragraphs: [
            '開放時間、票價、優惠、無障礙設施及參觀方式僅供參考，不構成官方公告、售票要約或入場保證。出發前請到外部網站 palombarolungo.it 核實最新資訊。參觀服務由景點管理方提供；本站不販售門票，也不處理預約。',
          ],
        },
        {
          title: '名稱、圖片與權利',
          paragraphs: [
            '本站使用景點名稱僅為辨識所介紹的地點。商標、照片、地圖及其他第三方內容的權利歸各自權利人所有；標示來源不等於取得授權或使用許可。',
            '若要提出著作權問題，請提供聯絡方式、頁面網址、涉及的內容，以及可說明權利歸屬或代理權的資料。編輯部將查看通知，並評估更正或移除。',
          ],
        },
        {
          title: '外部連結與責任',
          paragraphs: [
            '外部網站由第三方經營，適用其各自的條款與隱私政策。提供連結不表示合作或認可。本指南僅供資訊參考；適用法律規定的權利與責任不受影響。',
          ],
        },
      ]}
    />
  );
}
