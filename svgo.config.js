
export default {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          removeTitle: true,
          removeDesc: true,
        },
      },
    },
    "removeDimensions",
  ],
};
