# Storybook Example

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

<img alt="expo examples" src="https://i.imgur.com/j253BeR.png">

You can use Storybook to test and share your component library quickly and easily! This example shows how to use Expo modules with Storybook CLI and Expo CLI.

> This is setup as Storybook with Expo, instead of Expo with Storybook. This means that it's a dedicated RN app for Storybook, instead of attaching a Storybook instance to your current app (if you have one). If you have a pre-existing app setup with Expo, you could setup Storybook in the same project. This is setup to be separate, for something like a design system.

## Getting Started

1. `yarn` - Install dependencies
1. `yarn web` - Run Storybook

### Running on Native Devices

1. `yarn start` - Start Expo in browser (should open a new tab)
1. Wait for app to bundle. This may take 30+ seconds.
1. Use QR code from Expo to open app on testing device (or press `i` to open simulator if available)

### 📁 File Structure

```
Storybook with Expo CLI
├── stories
│   ├── index.js ➡️ Native story imports
│   └── Example.stories.js ➡️ A Storybook page to render
├── assets ➡️ All static assets for your project
├── App.tsx ➡️ Entry Point for universal Expo apps
├── app.config.js ➡️ Expo config file
└── babel.config.js ➡️ Babel config (should be using `babel-preset-expo`)
```

## 📝 Notes

- [Storybook React Native](https://storybook.js.org/docs/guides/guide-react-native/)
