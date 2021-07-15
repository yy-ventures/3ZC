export default {
  mount: {
    public: { url: "/public", static: true, resolve: false },
    src: "/",
  },
  exclude: [
    // '**/src/styles/**',
    // '**/src/markups/**',
  ],
  plugins: [
    ["@marlonmarcello/snowpack-plugin-pug",
      {
        data: {
        }
      }
    ],
    [
      '@snowpack/plugin-sass',
      {
        compilerOptions: {
          style: "compressed",
        },
      },
    ],

    [
      "snowpack-plugin-inliner",
      {
      "exts": ["jpg", "png", "gif", "svg", "jpeg"],
      "limit": 1024 * 6,
    }
    ],

    '@snowpack/plugin-webpack',
    "@snowpack/plugin-babel",
    '@snowpack/plugin-postcss',
  ],

  devOptions: {
    port: 1234,
    bundle: false,
    out: "dist",
    open: "none"
  },
  buildOptions: {
    baseUrl: './',
    out: "dist"
  },
};
