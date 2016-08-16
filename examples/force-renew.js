'use strict';

//require('letsencrypt-express')
require('../').create({

  server: 'staging'

, email: 'aj@daplie.com'

, agreeTos: true

, approvedDomains: [ 'pokemap.hellabit.com', 'www.pokemap.hellabit.com' ]

, app: require('express')().use('/', function (req, res) {
    res.end('Hello, World!');
  })

, renewWithin: (91 * 24 * 60 * 60 * 1000)
, renewBy: (90 * 24 * 60 * 60 * 1000)

, debug: true
}).listen(80, 443);
