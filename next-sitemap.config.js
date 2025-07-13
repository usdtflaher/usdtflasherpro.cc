/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://usdtflasherpro.cc',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/api/*',
    '/admin/*',
    '/private/*',
    '/404',
    '/500',
  ],
  additionalPaths: async (config) => [
    {
      loc: '/',
      changefreq: 'daily',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/pricing',
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/#about',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/#how-it-works',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/#features',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/#faq',
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/#contact',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
  ],
  alternateRefs: [
    {
      href: 'https://usdtflasherpro.cc',
      hreflang: 'en',
    },
    {
      href: 'https://usdtflasherpro.cc/es',
      hreflang: 'es',
    },
    {
      href: 'https://usdtflasherpro.cc/fr',
      hreflang: 'fr',
    },
    {
      href: 'https://usdtflasherpro.cc/zh',
      hreflang: 'zh',
    },
    {
      href: 'https://usdtflasherpro.cc/de',
      hreflang: 'de',
    },
    {
      href: 'https://usdtflasherpro.cc/ja',
      hreflang: 'ja',
    },
    {
      href: 'https://usdtflasherpro.cc/ko',
      hreflang: 'ko',
    },
    {
      href: 'https://usdtflasherpro.cc/pt',
      hreflang: 'pt',
    },
    {
      href: 'https://usdtflasherpro.cc/ru',
      hreflang: 'ru',
    },
    {
      href: 'https://usdtflasherpro.cc/ar',
      hreflang: 'ar',
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
    ],
    additionalSitemaps: [
      'https://usdtflasherpro.cc/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom transform function to optimize sitemap entries
    const priority = path === '/' ? 1.0 : 
                    path === '/pricing' ? 0.9 : 
                    path.includes('faq') ? 0.7 : 0.8;
    
    const changefreq = path === '/' ? 'daily' : 
                      path === '/pricing' ? 'weekly' : 
                      path.includes('faq') ? 'weekly' : 'monthly';

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  },
} 