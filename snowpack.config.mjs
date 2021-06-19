export default {
  mount: {
    public: { url: "/public", static: true, resolve: false },
    src: "/",
    // public: '/',
    // src: '/dist'
  },
  exclude: [
    '**/src/styles/**',
    '**/src/markups/**',
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
    ['@snowpack/plugin-webpack',
      {
      }
    ]
    // ['@snowpack/plugin-postcss',
    //   {
    //   }
    // ],
  ],
  devOptions: {
    port: 1234,
    open: "none"
  },
  buildOptions: {
    // baseUrl: './',
    baseUrl: '/3ZC/',
    out: "dist"
  },
  // optimize: {
  // minify: true,
  //   bundle: true,
  //   splitting: true,
  //   treeshake: true,
  // }
};
