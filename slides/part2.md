---
marp: true
---

# React Native: Part 2

---
# Repo

[part-two](https://github.com/yadunut/orbital-rn-part-two)

You can go through the commits to checkout each state of the application

---

<!-- _footer: Overview -->
# Overview
## Part 2
- Multi Page Applications
- Networking
- Supabase
- dotenv
- Cameras and Image Picker
---

# End Goal
- Login / Signup page
- Authenicated Routes
- View list of todos
- Add image to todos
- Fetching data from other services

---

# Setting Expectations

- We have only 2 hours
- This workshop aims to bootstrap you into the process of building a mobile app
- It is not a comprehensive guide to creating mobile apps
- We will be focusing on the aspects unique to react-native and some other fun stuff :)
- I've provided a list of recommended reading materials in the setup document, which should get you more up to speed on react native after this workshop

---
# Format of Workshop

- I explain react and react native concepts
- I'll show a demo with the concept
- You'll be given some time to practice / read / understand the code
- Repeat

---
# Q&A Link

![](images/Slido-Image.png)
[Link](https://app.sli.do/event/pZJJtDntLHUaCLJutTvULv)


---
# What we will be building
- Todo app with authentication and storage with `supabase`
- Image Upload
---

# Tools we will be using

## Expo Router

[Expo router](https://expo.github.io/router/docs) is a library for react-native which makes it easy to make multi-page applications
## Supabase

[Supabase](https://supabase.com/) is a firebase alternative, which provides features such as authentication, databases, storage and serverless functions. This allows us to build a basic backend with authentication very quickly, and also allows building more complex backends with the serverless functions

---
## Dotenv
[Dotenv](https://github.com/goatandsheep/react-native-dotenv/) allows us to load environment variables from a text file into the app. We will use environment variables to store data, such as `API_URL`. `API_URL` only changes across different builds of the application

## Async Storage

[Async Storage](https://docs.expo.dev/versions/latest/sdk/async-storage/) allows us to use local storage on mobile easily. We will be using this to store supabase auth credentials and other details

## Expo Image Picker and Expo Camera
[Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) and [Camera](https://docs.expo.dev/versions/latest/sdk/camera/) are two libraries to help out with selecting images

In general, we will try to use the expo provided libraries for compatability and ease of use.

---

# Install dependencies

Install dependencies with the command below
```bash
npx expo install expo-router react-native-safe-area-context react-native-screens\
 expo-linking expo-constants expo-status-bar react-native-paper\
 @supabase/supabase-js react-native-url-polyfill @react-native-async-storage/async-storage\
 expo-image-picker

npm install --save-dev react-native-dotenv
```

After making the changes stated in next slide, run to clear the cache and start expo
```bash
npx expo --clear
```

---

## Setting up for Router, dotenv, supabase
```diff
+++ app.json
@@ -1,6 +1,7 @@
 {
   "expo": {
     "name": "part-two",
+    "scheme": "part-two",
     "slug": "part-two",
     "version": "1.0.0",
     "orientation": "portrait",
+++ babel.config.js
@@ -2,5 +2,6 @@ module.exports = function(api) {
   api.cache(true);
   return {
     presets: ['babel-preset-expo'],
+    plugins: [require.resolve("expo-router/babel"), "module:react-native-dotenv"],

   };
 };
+++ b/index.js
@@ -0,0 +1 @@
+import "expo-router/entry";
+++ package.json
@@ -1,13 +1,17 @@
 {
   "name": "part-two",
   "version": "1.0.0",
-  "main": "node_modules/expo/AppEntry.js",
+  "main": "index.js",
   "scripts": {
     ...,
   },
+  "overrides": {
+    "metro": "0.76.0",
+    "metro-resolver": "0.76.0"
+  },
```
---
# ESlint Setup
```bash
npm init @eslint/config
# Select Check To check syntax and find problems
# Select Javascript Modules
# Select React
# Does your project use typescript: No
# Where does your code run? Select Node, deselect browser
# WHat format do you want your config files?: Select Javascript
npm install --save-dev eslint-plugin-react-hooks
```
And then install the ESLint Extension for VSCode

--- 
# ESLint Setup
```javascript
module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
    }
}
```
---
# Setting up the Supabase Client

---
# Creating the Authentication Flow
- [useEffect](https://react.dev/learn/synchronizing-with-effects)
- [React Contexts](https://react.dev/learn/passing-data-deeply-with-context)
---
# Creating the Login Pages

---

# Creating Mock Data on Supabase

---

# Adding List View in root screen

---

# Adding New Todo Screen

---

# Feedback

[Link](http://bit.ly/orbital23-mc2-feedback)
