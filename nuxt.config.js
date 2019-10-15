import { head, manifest } from './config';
import helmet from 'helmet';
module.exports = {
  mode: 'spa',
  head,
  manifest,
  loading: {
    name: 'circle',
    color: '#FF0000',
    background: 'white'
  },
  css: ['~assets/styles/reset.css', '~assets/styles/transitions.css'],
  plugins: [
    '~/plugins/filters.js',
    '~/plugins/firestore.js',
    { src: '~plugins/lazy', ssr: false },
    { src: '~/plugins/init.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/component-cache',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    '@nuxtjs/robots',
    'cookie-universal-nuxt',
    '@nuxtjs/axios'
  ],
  toast: {
    theme: 'bubble',
    position: 'top-center',
    singleton: true
  },
  render: {
    gzip: { level: 1 },
    http2: { push: true },
    static: {
      maxAge: '1y'
    },
    bundleRenderer: {
      shouldPreload: (file, type) => {
        if (type === 'script') {
          const ignoredRoutes = ['legal'];
          if (ignoredRoutes.some(r => file.includes(r))) {
            return false;
          }
        }
        return ['script', 'style', 'font'].includes(type);
      }
    }
  },

  serverMiddleware: [
    helmet({
      referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
    })
  ],

  build: {
    app: 'app.[chunkhash].js',
    chunk: '[name].[chunkhash].js',
    extractCSS: true,
    optimization: {
      splitChunks: {
        name: true
      }
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    exclude: ['/my/**']
  },
  axios: {
    // baseURL: 'http://localhost:5001'
    baseURL: 'https://brentkitchen-server.herokuapp.com'
  }
};
