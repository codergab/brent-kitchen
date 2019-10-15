const pkg = require('./package');

module.exports = {
  clearCart: true, // Whether to clear the cart after order is placed. Useful while testing
  currency: { symbol: '₦', code: 'NGN' },
  manifest: {
    name: 'Brent KITCHEN',
    short_name: 'Brent KITCHEN',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#555'
  },
  head: {
    titleTemplate: 'Brent KITCHEN | %s',
    title: 'FoodOrdering App Online',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Karla:400,700'
      }
    ],
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyword', name: 'keyword', content: pkg.keyword },
      {
        hid: 'description',
        name: 'description',
        content: 'FoodOrdering App Online'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'FoodOrdering App Online'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'FoodOrdering App Online'
      },
      // {
      //   property: "og:image",
      //   content:
      //     "https://s3.envato.com/files/252462089/banner.png"
      // },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'FoodOrdering App Online'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: 'FoodOrdering App Online'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://brent-kitchen.now.sh'
      }
    ],
    noscript: [
      {
        innerHTML: `We're sorry but Brent KITCHEN doesn't work properly without JavaScript enabled. Please enable it to continue.`
      }
    ],
    htmlAttrs: { lang: 'en' },
    __dangerouslyDisableSanitizers: ['script']
  }
};
