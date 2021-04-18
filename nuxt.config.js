export default {
  target: 'static',

  head: {
    title: 'Emmanuel Karanja - Designer & Full-stack web developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Young, versatile and enthusiastic programmer and entrepreneur. I build things for the web using technologies such as JavaScript, Node.js, PHP and more.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://ekaranja.netlify.app/screenshot.png'
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://ekaranja.netlify.app'
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Emmanuel Karanja'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content:
          'Young, versatile and enthusiastic programmer and entrepreneur. I build things for the web using technologies such as JavaScript, Node.js, PHP and more.'
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://ekaranja.netlify.app/screenshot.png'
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#2b5797'
      },
      {
        hid: 'msapplication-config',
        name: 'msapplication-config',
        content: '/browserconfig.xml'
      },
      { name: 'theme-color', content: '#fff' },
      {
        name: 'google-site-verification',
        content: 'bz-eFDhFOHc6gjtB1liRSEf6Jka3OiI6YpsA71nWpqU'
      }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Gabriela&family=Baskervville&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
      },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png'
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: '/icons/safari-pinned-tab.svg'
      }
    ]
  },

  pwa: {
    icon: false,
    manifest: {
      lang: 'en',
      name: 'Emmanuel Karanja',
      short_name: 'EKaranja',
      start_url: '/',
      display: 'standalone',
      theme_color: '#fff',
      background_color: '#fff',
      description:
        'Young, versatile and enthusiastic programmer and entrepreneur. I build things for the web using technologies such as JavaScript, Node.js, PHP and more.',
      icons: [
        {
          src: '/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    }
  },

  googleAnalytics: {
    id: 'UA-155390144-1',
    debug: {
      sendHitTask: true
    }
  },

  css: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/pwa', '@nuxt/content', '@nuxtjs/google-analytics'],

  content: {},

  build: {},

  server: {
    port: 8000,
    host: '0.0.0.0'
  }
};
