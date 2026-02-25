module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',

          '@domain': './src/app/domain',
          '@application': './src/app/application',
          '@infrastructure': './src/app/infrastructure',
          '@presentation': './src/app/presentation',
        },
      },
    ],
  ],
};