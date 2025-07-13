module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'zh', 'de', 'ja', 'ko', 'pt', 'ru', 'ar'],
    localeDetection: true,
    domains: [
      {
        domain: 'usdtflasherpro.cc',
        defaultLocale: 'en',
      },
    ],
  },
  fallbackLng: 'en',
  debug: false,
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
} 