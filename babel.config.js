module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    development: {
      plugins: []
    },
    production: {
      plugins: ["transform-remove-console"]
    }
  },
  plugins: [
    ["module-resolver", {
      root: ["./src/"],
      extensions: [
        ".ios.js",
        ".android.js",
        ".js"
      ],
      alias: {
        components: "./src/ui/components",
        constants: "./src/constants",
        expo: "./src/expo",
        lib: "./src/lib",
        localize: "./src/localize"
      }
    }],
    ["@babel/plugin-proposal-export-namespace-from"]  
  ]
};
