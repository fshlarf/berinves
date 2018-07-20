module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'berinves',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },

      // example vue-meta
      { hid: 'title', name: 'title', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.3/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://code.getmdl.io/1.3.0/material.teal-blue.min.css' }
    ],
    script: [
      { src: 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js' },
      { src: '//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' },
      { src: 'https://code.getmdl.io/1.3.0/material.min.js' }

    ]
  },

  plugins: [{ src: '~/plugins/localStorage.js', ssr: false }],

  // ** Custom SCSS
  // */
  css: [
    { src: '~/assets/scss/navigation.scss', lang: 'scss' },
  ],

  /*
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios'
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}



