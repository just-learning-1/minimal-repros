// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  assetPrefix: !debug ? '/minimal-repros/' : '',
  eslint: {
    dirs: [
      'server',
      'src',
    ],
    ignoreDuringBuilds: true,
  },
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    'api.tsx',
    'api.ts',
    'api.jsx',
    'api.js',
  ],
  reactStrictMode: true,
}
