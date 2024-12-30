module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', {loose: true}],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-transform-class-properties', {loose: true}],
    ['@babel/plugin-transform-private-methods', {loose: true}],
    ['@babel/plugin-transform-private-property-in-object', {loose: true}],
    ['@babel/plugin-proposal-private-methods', {loose: true}],
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
