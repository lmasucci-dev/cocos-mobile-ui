module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@components': './src/app/components',
          '@screens': './src/app/screens',
          '@hooks': './src/app/screens/Instruments/hooks',
          '@redux': './src/redux',
          '@services': './src/services',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@interfaces': './src/interfaces',
          '@config': './src/config',
        },
      },
    ],
  ],
};
