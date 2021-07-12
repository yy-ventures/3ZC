// import imagemin from 'imagemin';
// import imageminJpegtran from 'imagemin-jpegtran';
// import imageminPngquant from 'imagemin-pngquant';
// 
// const files = await imagemin(['public/images/*.{jpg,png}'], {
//   destination: 'public/images/optimized',
//   plugins: [
//     imageminJpegtran(),
//     imageminPngquant({
//       quality: [0.3, 0.5]
//     })
//   ]
// });

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
