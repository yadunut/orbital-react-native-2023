---
marp: true
---
<style>
    h1 {
        padding: 0px;
        margin: 0px;
    }
    p {
        padding: 0px;
        margin: 0px;
    }
</style>

# React Native Setup
## Prerequisites

1.  Git and its relevant workflows
2.  Javascript (ES6 syntax)
3.  HTML / CSS
4.  Basic React Knowledge (Referesher Attached)

---

# Setup Guides for MacOS and Windows / Ubuntu
---
# Windows / Ubuntu
## WSL

Install WSL on widows by running `wsl --install` in powershell. Read more setup instructions [here](https://learn.microsoft.com/en-us/windows/wsl/install)

## NodeJS
We will be using [volta](https://volta.sh/) to handle node versions
```
sudo apt update && sudo apt upgrade
curl https://get.volta.sh | bash
source ~/.bashrc
volta install node@18
```
This will install Node.js v18.\*.\*, the LTS version of node

---

# Windows / Ubuntu

## VSCode

Download VSCode [here](https://code.visualstudio.com/download)
Install the `WSL` extension

---

# MacOS
Start off with opening up your terminal and run
```sh
xcode-select --install
```

This will install relevant dependencies you will need

## Homebrew

[Homebrew](https://brew.sh/) is a package manager for macOS. The installation instructions can be found on the website or paste the following into the macOS terminal
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

# MacOS
## NodeJS

Run
```sh
curl https://get.volta.sh | bash
source ~/.zshrc
volta install node@18
```
## VSCode

You can install vscode with homebrew also!

```sh
brew install --cask visual-studio-code
```

With that, we are ready to get started!

---
# Install expo

Expo is a library / framework built ontop of react-native. As of now, there are little to no reasons not to use expo when starting new react-native projects. The only hiccup you will have is when adding libraries with native modules, but solutions to this will be discussed in the 2nd section

```sh
npx expo -h
```

This will download the expo binary and will list out all options for expo

---

# Initialize a new Expo App Repository
Create a directory to house your source code. We will be using `~/dev` for this

```sh
mkdir ~/dev
cd ~/dev
npx create-expo-app orbital-app
cd orbital-app
npm i
code .
```

The last line opens the directory in VSCode

---

# Expo Go

[Expo Go](https://docs.expo.dev/get-started/expo-go/) is a mobile app used for development of expo projects. You can install it from the link above.

Or you can use iOS / android simulator, which is what I will be using for the demos

## Running the app

    npx expo start

If you have an android device or are facing issues with connection, you can try to run

    npx expo start --tunnel

Scan the QR Code with your camera app and you should be ready to go!

---

# Javascript Primer
- The following slides assume you already know Javascript or are at least familiar with its syntax
- If not, here's a primer - [Javascript - Learn X in Y minutes](https://learnxinyminutes.com/docs/javascript/)
- Another resource: [Javascript 101](https://javascript101.netlify.app/1-1-basics)

---

## Arrow Syntax

```js
function add(a, b) {
    return a + b;
}

const add = function(a, b) {
    return a + b;
}

const add = (a, b) => { 
    return a + b 
}

const add = (a,b) => a + b;
```

All the above are equivalent. If the function only has a return statement, the brackets can be omitted.

---

## Spreading
```js
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArr = [...array1, ...array2] // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2};
const obj2 = { c: 1, d: 2};
const mergedObj = {...obj1, ...obj2 } // {a: 1, b: 2, c: 1, d: 2}

const obj1 = { a: 1, b: 2};
const obj2 = { a: 3, d: 2};
const mergedObj = {...obj1, ...obj2 } // {a: 3, b: 2, d: 2}
```
This allows us to copy an existing array / object into a new one

---

## Destructuring


```js
const colours = ['red', 'green', 'blue']
const [firstColor, , thirdColor] = colours; // firstColor = red, thirdColor = blue

const vehicle = {
    brand: 'toyota',
    model: 'camry',
    type: 'car',
    year: 2022,
}

function vehicleDetails({brand, model}) {
    console.log(`vehicle is ${brand} ${model}`);
}
vehicleDetails(vehicle) // vehicle is toyota camry

```

---

# React 

React is a library for writing websites. It gained popularity and has almost become the standard to writing websites. The main aspect of React is JSX (Javascript XML), which allows us to write HTML code in Javascript

Highly recommended to read [Thinking in React](https://react.dev/learn/thinking-in-react) before the main workshop date!

# React Native

React Native is a framework which allows us to write code in a similar syntax to React. It allows for web developers to get started writing code for both mobile platforms iOS and Android quickly

---

## Thinking in React (In short)

-   An App is made up of many different components
-   Each component consists of
    -   Logic (What happens when a button is pressed, send data back to the server, etc)
    -   User Interface (UI) (e.g. the colour of the button, positioning of the button, etc)
-   Try to build reuseable components
    -   E.g. a similar button is used in many places
    -   Reduces code duplication, easier to maintain

---

## Functional components

React has 2 paradigms for creating new components, `class` and `functional` components. We will only be looking at functional components in


## Stateless Components

The component itself doesn&rsquo;t need to keep any state, and can receive details on what to render from its parent component

    function CommentBox(image, title, body) {
        <div>
            <image src={image} />
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    }

---

## Stateful Components

These components need to keep track of state across renders

    function Comment() {
        const [input, setInput] = useState('');
      return <View>
               <TextInput value={input} onChangeText={value => setInput(value)}/>
             </View>
    }

---

# Exercise 0

1.  Get the app running on your mobile phone / simulator.
2.  Take a look at `App.js` and read through the code. Edit the contents to say &ldquo;Hello `<yourname>`&rdquo;
3.  Let us know if you have any questions!

---

# Overview of Workshop 1

1.  React Native Components
2.  Documentation
3.  Styling and flexbox layout
4.  UI Libraries
5.  Basic State Management


# Overview of Workshop 2

This workshop will be more focused on live coding and Q&A. We will be building a TODO app with networking with supabase

---

# Hope this has been helpful!

See you on 13th May!

