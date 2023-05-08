---
marp: true
---

# Part 1

---

# About Me

- *Yadunand* Prem
- Y1 CS Student
- Coreteam Member of NUS Hackers
- Have been building with React Native since 2020 May

---

# Overview
## Part 1
- Setup React Native
- Basics of JSX
- Core Components
- Props
- Styling
- UI Libraries
- State Management with useState

--- 

## Part 2
- 
- 

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

# What we'll be building

TODO: INSERT IMAGE OF TODO APP HERE

# Recap
## Installation

### NodeJS and Expo
We will be using [volta](https://volta.sh/) to handle node versions
```bash
curl https://get.volta.sh | bash
...
volta install node@18
npx expo -h
```
This will install Node.js v18.\*.\*, the LTS version of node

---

### Project Setup

```bash
mkdir ~/dev
cd ~/dev
npx create-expo-app orbital-app
cd orbital-app
npm install
code .
```
This will setup ~/dev as your development directory and create a folder called orbital-app with the app setup there. Please feel free to change the location to your liking

---

### Looking through the generated code
<!-- Open VSCode and go through the file contents. -->

![bg left 50% 100%](images/files.png)

- `App.js` is the entrypoint to the application
- `app.json` is Expo specific configuration
- `babel.config.js` is a javascript compiler, allowing us to use modern javascript features
- `package.json` lists dependencies and other info about the project


---

## ES6
<!--Open node and show demo of this-->

- Arrow Syntax
```javascript
const add = (a, b) => a + b
```
- Spreading
```javascript
const a = [1, 2, 3]
const b = [...a, 4, 5, 6] // 1, 2, 3, 4, 5, 6
```
- Destructuring
```javascript
const {a, b} = {a: 5, b: 6} // a = 5, b = 6
```

---

## HTML in Javascript
```jsx
function CatFactBox() {
    return (
    <div className="headerBox">
        <h2>Cat Fact of the Day</h2>
        <p> this a cat fact</p>
    </div>
    );
}
```

---

## React Components
- Only 1 top level component per component
TODO: Show example

```jsx
const HelloWorld = () => <div>Hello World</div>
function HelloWorld() {
    return <div>Hello World</div>;
}

function BigComponent() {
return <div><HelloWorld /></div>;
}
```
---


## JSX Rules

Any javascript in JSX must be enclosed by {}
```jsx
function HelloWorld() {
return <div>{Math.ceil(3.6)}</div>;
}

function Greet({name}) { // Destructuring syntax used here! 
    return <h2>Hello {name}</h2>;
}

function App() {
    return (
        <div>
            <Greet name="Bob" /> // We will look at passing parameters to components later
        </div>
    );
}
```


---

## Props

## Thinking in React

---

## React and React Native Components

![bg left:40% 60%](images/react-components.png)

---


## Core Components

### View
### Text
### Button
### Images

## Styling
### Flexbox
### Notches
https://docs.expo.dev/versions/latest/sdk/safe-area-context/

## UI Libraries

## State Management

### Wrong Example

### Correct Example

### TextInput
### Flatlist
## Conditional Rendering

### Display Add Tasks
### Display tasks
### Add undone tasks to header
#### Lifting State Up

---

