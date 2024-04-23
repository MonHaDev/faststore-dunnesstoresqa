
module.exports = {
  seo: {
  "title": "Dunnes Stores",
  "description": "Shop the latest Fashion, Home, Kids Clothes and More",
  "titleTemplate": "%s | Fashion, Homewares, Gifts & More",
  "author": "Dunnes Stores"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "dunnesstoresqa",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "EUR",
      symbol: "€",
    },
    locale: "en-IE",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "IRL",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://dunnesstoresqa.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/men",
    search: "/s?q=Test%20Brand%20name",
    pdp: "/textured-double-breasted-blazer/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/textured-double-breasted-blazer/p",
      collection: "/men",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/textured-double-breasted-blazer/p",
      collection: "/men",
      collection_filtered: "/men/?category-1=men&brand=Test%20Brand%20name&facets=category-1%2Cbrand%27",
      search: "/s?q=Test%20Brand%20name",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://dunnesstoresqa.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
