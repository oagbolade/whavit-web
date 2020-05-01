const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [ 
      new webpack.ProvidePlugin({ jQuery: 'jquery' }),
    ] 
  },

  chainWebpack: config => {
    config.externals({
      'jQuery': 'jquery'
    })
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/privacy',
        '/terms',
        '/whavpro',
        '/products',
        '/quality-assurance',
        '/moving',
        '/post-construction',
        '/premium',
        '/boss-lady',
        '/executive',
        '/booking-request',
        '/business/book',
        '/products',
        '/business',
        '/contact-us',
        '/faqs',
        '/WhavDeep',
        '/WhavLight',
        '/upholstery-cleaning',
        '/floor-restoration',
        '/mattress-cleaning',
        '/ac-servicing',
        '/carpet-cleaning',
        '/fumigation',
        '/register',
        '/login',
        '/forgot/password',
        '/vendor/register'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: route => {
        // Defer scripts and tell Vue it's been server rendered to trigger hydration
        route.html = route.html
          .replace(/<script (.*?)>/g, '<script $1 defer>')
          .replace('id="app"', 'id="app" data-server-rendered="true"');
        return route;
      }
    }
  }
}
