export const siteConfig = {
  name: 'NightBase',
  description:
    'キャバクラ・ガールズバー・コンカフェ向けの全部入り業務SaaS。NightBaseで夜の現場にデータドリブンな効率化を。',
  url: 'https://nightbase.example.com',
  ogImage: '/og.svg',
  keywords: ['NightBase', '夜業界', 'SaaS', '業務管理', '勤怠管理', 'B2B'],
};

export const defaultSEO = {
  title: siteConfig.name,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} OGP`,
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
};
