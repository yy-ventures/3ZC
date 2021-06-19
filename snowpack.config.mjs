export default {
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
  ],
  mount: {
    public: { url: "/public", static: true, resolve: false },
    src: "/",
  },
  devOptions: {
    port: 1234,
    open: "none"
  },
  buildOptions: {
    out: "dist"
  }
};
