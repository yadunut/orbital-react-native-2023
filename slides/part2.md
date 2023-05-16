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
- Redux?
---

# End Goal
- Login / Signup page
- Authenicated Routes
- View list of todos
- Add image to todos
- Fetching data from other services

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
 @supabase/supabase-js 

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

# Setting up Supabase
- Create an Account on Supabase
- 