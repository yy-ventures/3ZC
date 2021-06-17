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
  buildOptions: {
    out: "dist"
  }
};
