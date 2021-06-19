export default {
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
  mount: {
    public: { url: "/public", static: true, resolve: false },
    src: "/",
    // public: '/',
    // src: '/dist'
  },
  devOptions: {
    port: 1234,
    open: "none"
  },
  buildOptions: {
    baseUrl: '/3ZC/',
    // baseUrl: './',
    out: "dist"
  },
  // optimize: {
  // minify: true,
  //   bundle: true,
  //   splitting: true,
  //   treeshake: true,
  // }
};
