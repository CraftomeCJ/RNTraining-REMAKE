==============================================================================
<div id='top'><div>
<h1 align="center">Today's Journal</h1>

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#what-i-had-learned-today">What I had learned today?</a></li>
    <li><a href="#exercise-of-the-day">Challenge Questions</a></li>
    <li><a href="#what-difficulties-did-i-encounter-and-how-do-i-solve-the-issues">What difficulties did I encounter and How do I solve the issues?</a></li>
    <li><a href="#What-other-issues-trying-to-resolve?">Other difficulties</a></li>
    <li><a href="#contact-information">Contact Information</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#software-installed">Software Installed</a></li>
    <li><a href="#resource-links">Resource Links</a></li>
  </ul>
</details>

## Personal Notes

**Today's main focus:** <br />
Today will be working on setup my linux computer with all the necessary softwares for React Native Learning Course

## What I had learned today?

Day 1:

- Install vscode
Go to <https://code.visualstudio.com/docs?dv=osx>
Follow the steps to download and install vscode
- Install node & npm
Use the following command to install homebrew:
 /bin/bash -c "$(curl -fsSL <https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh>)"
Install node and npm:
 brew install node
When you run node -v and npm -v in the mac terminal, you should be able to see something like the following:
➜  ~ node -v
v16.11.1
➜  ~ npm -v
8.0.0
- Install  cocoapods
brew install cocoapods
You will see the pod version with pod --version  if you successfully installed cocoapods
➜  ~ pod --version
1.10.1
- Create your own Github Account
<https://github.com/> and create your own github account
You should have a github account like
<https://github.com/yourusername>
- Create your own Github repository
Login your github account and create your repository called RNTraining-REMAKE
You should a repository called RNTraining-REMAKE in your github accounnt
- Get the react native starter project from Github
Install git using: brew install git
Prepare create a folder in your mac called RNTraining
Go to RNTraining and run
git clone <https://github.com/huanganya/react-native-starter>
After step1, you should get this:
➜  ~ git --version
git version 2.32.0 (Apple Git-132)

After step 3, you should get this:

➜ ls
react-native-starter

- Push the cloned code to your own github account
Follow the steps at <https://stackoverflow.com/questions/18200248/cloning-a-repo-from-someone-elses-github-and-pushing-it-to-a-repo-on-my-github>
You should be able to see the react-native-starter project is in your RNTraining-REMAKE repo.

<p align="center">(<a href="#top">back to top</a>)</p>

Day 2:
**What is React Native?**

- Javascript framework
- cross platform(ios & Android)
- native UI looking instead of webview
- JSX componets(TSX in our case)

Visit the following page and understand the pros and cons of react native
<https://www.oreilly.com/library/view/learning-react-native/9781491929049/ch01.html>
You understand what is react native and why react native is a good choice to develop mobile apps.

- How to run the react native project
  1. go to your react-native-starter project in the terminal
  2. cd  react-native-starter
  3. install the node modules
  4. npm i --legacy-peer-deps
  5. in the prompt input 'y'
  6. run  npm audit fix --force
  7. run npm install -g expo-cli@5.3.1
  8. yarn add expo
  9. expo doctor --fix-dependencies
  10. expo start
  11. ctrl + click  <http://localhost:19002>
  12. download expo app from Android Playstore
  13. scan QR code
  14. press 'a' open Android emulator

You should be able to see the app running in the simulator and the Metro server is running for your app.

- React Native Project File System
  1. Go to the project root and type code .
  2. You can have a look at the folders and files at the left side menu
  3. /package.json and /package-lock.json : Find the and visit <https://dev.to/naveenchandar/package-json-file-explained-b94> try to understand what’s inside the package.json
  4. /android and /ios: Please note there are folders called android and ios, those folders contains the settings or the generated code for the android and ios
  5. /node_modules: Please note there is a folder called node_modules, which contains all the necessary node modules for the RN apps. It will be created when you run `npm install`
  6. /src: all the source code. Expand the src folder and have a look at the folders and files under src. You don’t need to understand what’s inside right now. It contains the main codes for the RN apps
  7. Index.js: the entry file for the react native
  8. **tests**: this is the the fold for all the unit tests
  9. Other system files and config files such as .gitignore, prettierrc.js,  babel.config.js, jest.config.js…

**Typescript Basics: Part 1**

- TypeScript is a programming language built and maintained by Microsoft. It is a superset of JavaScript that adds strong type checking and is compiled into plain JavaScript code.
- Refer to: <https://www.freecodecamp.org/news/learn-typescript-basics/>

- What is Typescript?

 1. TypeScript Language: Syntax, Keywords, and type annotation
 2. TypeScript Compiler: transforme typescript to javascrip
 3. Language service: responsible for collecting type information from the source code.
**filename suffix: .ts or .tsx**

- Experience how typescript works:
  1. Go to RNTraining project root in terminal
  2. Type code .
  3. In vscode navigate to src/screens/dashboard/info/index.tsx
  4. Type line 6 and 7
  5. Note that line 7 the num has a red underline. Move your cursor over num and you will see the type error.

```TypeScript
const Info: React.FC = () => {
const a: string = "a";
const num: number = "num";
  return (
    <View style={styles.container}>
      <Text>
        Info Page: You don't need to login to view this page
      </Text>
    </View>
  );
};
```

ts(2322) error
![ts(2322 error)](https://github.com/CraftomeCJ/learningJournal/IMG/PNG/ts(2322)_error.png "style=width:200 height: 200")

- Typescript BasicTypes:
<https://www.typescriptlang.org/docs/handbook/2/everyday-types.html>
  1. primitives: string , number , and boolean
  2. Arrays: number[], string[]...
  3. Any
  4. Functions
  5. Object Types  {x: number, y?: number}
  6. Union Types: number | string
  7. Type Aliases: type Point = { x: number; y: number; };
  8. Interfaces: interface Point { x: number; y: number; };
  9. Literal Types: “GET” | “POST”
  10. null and undefined
  11. Enums:
<https://www.typescriptlang.org/docs/handbook/enums.html>

- Follow the content of Everyday types and practice the types and functions in the list.
  1. Try to write some functions and Understand what is Anonymous Functions.
  2. Try to use union type for your function and do the type check inside the function
  3. Try to write interface and Understand what’s the difference between type and interface. We will have a lot of practice in lessons later.
  4. Understand what what is Literal Types and how to solve the type error for literal types
  5. Try to write some codes for enum

- If have extra time, please go through <https://www.typescriptlang.org/docs/handbook/2/narrowing.html> and practice more one:
  1. typeof type guards
  2. The in operator
  3. The instanceof check

Error:
[Unable to find expo in this project - have you run yarn / npm install yet?](https://stackoverflow.com/questions/67618967/unable-to-find-expo-in-this-project-have-you-run-yarn-npm-install-yet)
<p align="center">(<a href="#top">back to top</a>)</p>

**Day 3: Typescript Basics**

- TypeScript Example:

- Normal Function:
  - Understand how to create a typescript function and what are the mandatory part of the functions.

```TypeScript
function minimal(
  a: number, 
  b: number): number 
  {
    return a < b ? a : b;
  }
console.log(minimal(1, 2));
console.log(minimal("2","3")); 
//will show type error of: Argument of type 'string' is not assignable to parameter of type 'number'
```

- Arrow functions:
  - Used very often in the real world and it can remove the boilerplate function keyword and make the code neater.
  - Also it can avoid the bind for this in normal class function.

```TypeScript
const minimal2 = (
  a: string, 
  b: string): string => 
  {
    return a < b ? a : b;
  }
console.log(minimal2("a","b"));
```

- Generic functions:
  - Define type relations between input parameters and output
  - Example: if we want to make add function for two strings, we can create add2
**But what if we want the same add function to work for both string and number?**
  - We can use generic function

```TypeScript
const minimal = <T,>(
  a: T, 
  b: T) => 
  {
    return a < b ? a : b;
  }
console.log(minimal("asdf","qwerty"));
console.log(minimal(1234,2468));
```

- Function Type:
  - Define a function Type and assign it to a const and

```TypeScript
type GreetFunction = (name: string) => void;

  const greeter: GreetFunction = (
    name: string
    ) => 
    {
      console.log(`Hello ${name}`);
    }
greeter("John");
```

- Call Signatures:
  - Add some extra property to the function

```TypeScript
type DescribeSomeFunction = 
  (
    description: string;
    (someArg: number): boolean
  );

  const myDescriptionFn: DescribeSomeFunction = 
  (
    someArg: number
  ) => {
          someArg > 100;
          myDescriptionFn.description = "The DescribeSomeFunction to check if number is large than 100";
        }
   
function doSomething(
  fn: DescribeSomeFunction
  ) {
 console.log(fn.description + " returned " + fn(6));
 }
 doSomething(myDescriptionFn);
```

- Optional Parameters:
  - Use ?

```TypeScript
const print = (sentence?: string) => {
console.log(sentence ? sentence : "nothing to print");
}
print();
print("I tell you a secret");
```

- Rest Parameters
  - Use …

```TypeScript
const printRest = (first: number, second: number, ...rest: number[]) => {
   console.log("first:", first);
   console.log("rest:", rest);
 };
 printRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [a, b, …rest] = array;
console.log(a,b,rest); 
```

- Parameter Destructuring
  - If you pass in a object as parameter to a function, you can destructure the property of the object as shown in the right side.

```TypeScript
const sum = ({ x, y, z }: { x: number; y: number; z: number }): void => {
 console.log(x + y + z);
}
sum({x: 10, y: 20, z:30});
```

**Day 4 Typescript Basics: Object Types**

- Object Types Example:

  - Interface as Object Type

```TypeScript
interface ObjectPerson 
{
  name: string;
  age: number;
}

const greet = (person: ObjectPerson): string => {
  return `Hello ${person.name} you are ${person.age} years old`;
  //console.log(`Hello ${person.name}`);
}
```

- Type as Object Type

```TypeScript
type Person = 
{
  name: string;
  age: number;
};

const greeter = (person: Person): string => 
{
  return `Hello ${person.name} you are ${person.age} years old`;
}

const jerry: Person = 
{
  name: "Jerry",
  age: 30
};
console.log(greet(jerry));
```

- Property Modifiers :
  - Optional: ?

```TypeScript
interface Person {
 name: string;
 age: number;
 role?: string;
}
```

    - cannot be modified: readonly

```TypeScript
interface Counter {
  readonly name: string
  readonly value: number
  inc(): number
}
```

- Extending Type
  - Extend

```TypeScript
interface BasicAddress {
 name?: string;
 street: string;
 city: string;
 country: string;
 postalCode: string;
}
 

interface AddressWithUnit extends BasicAddress {
 unit: string;
}
```

- Intersection Types
  - &

```TypeScript
interface Colorful {
   color: string;
 }
 interface Circle {
   radius: number;
 }

 type ColorfulCircle = Colorful & Circle;

 const colorCircle: ColorfulCircle = { color: "red", radius: 5 };
 console.log("colorCircle", colorCircle);
```

<p align="center">(<a href="#top">back to top</a>)</p>

**Day 4 Typescript Basics: Classes**

- Classes Example:

  - Define a class
    - And create instance

```TypeScript
class Point 
{
 x: number;
 y: number;
 
 constructor(x = 0, y = 0) {
   this.x = x;
   this.y = y;
 }

}

const pt = new Point();
console.log(pt.x, pt.y);
```

- Method
  - And create instance

```TypeScript
class Point 
{
 x = 10;
 y = 10;
 
 scale(n: number): void {
   this.x *= n;
   this.y *= n;
 }

}

const pt = new Point();
pt.scale(10);
console.log(pt.x, pt.y);
```

- Class can implement interface

```TypeScript
interface Pingable {
 ping(): void;
}
 
class Sonar implements Pingable {
 ping() {
   console.log("ping!");
 }
}
const sonar = new Sonar();
sonar.ping();
```

- Class can extend base class

```TypeScript
//base class
class Animal {
 move() {
   console.log("Moving along!");
 }
}
 

//sub-class
class Dog extends Animal {
 woof(times: number) {
   for (let i = 0; i < times; i++) {
     console.log("woof!");
   }
 }
}
 

const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
```

- Member Visibility
    1. public: all members are public

```TypeScript
class Employee {
    public empCode: string;
    empName: string;
}

let emp = new Employee();
emp.empCode = 123;
emp.empName = "Swati";

//empCode and empName are declared as public

console.log(emp.empCode, emp.empName);
```

    2. private: Self only
        - visible only to that class and are not accessible outside the containing class

```TypeScript
class Employee {
    private empCode: number;
    empName: string;
}

let emp = new Employee();
emp.empCode = 123; // Compiler Error
emp.empName = "Swati";//OK

// have marked the member empCode as private. Hence, when we create an object emp and try to access the emp.empCode member, it will give an error
```

    3. protected: Self and derived classes
        - visible to that class and derived classes

```TypeScript
class Employee {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }
}

class SalesEmployee extends Employee{
    private department: string;
    
    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
}

let emp = new SalesEmployee("John Smith", 123, "Sales");
empObj.empCode; //Compiler Error

// have a class Employee with two members, public empName and protected property empCode. We create a subclass SalesEmployee that extends from the parent class Employee. If we try to access the protected member from outside the class, as emp.empCode, we get the following compilation error:

// error TS2445: Property 'empCode' is protected and only accessible within class 'Employee' and its subclasses.
```

- Static property and methods

```TypeScript
class MyClass {
 static x = 0;
 static printX() {
   console.log(MyClass.x);
 }
}
console.log(MyClass.x);
MyClass.printX();
```

- Generic Classes

```TypeScript
//example 1:
class Box<Type> {
   contents: Type;
   constructor(value: Type) {
     this.contents = value;
   }
 }

 const b = new Box("hello!");
 console.log(b.contents);
 const c = new Box(123);
 console.log(c.contents);
 const d = new Box({ a: "abc", b: "def" });
 console.log(d.contents);
```

- this Types
  - In classes, a special type called this refers dynamically to the type of the current class.
  - Let’s see how this is useful:  

```TypeScript
class Box {
 contents: string = "";
 set(value: string) {
   this.contents = value;
   return this;
 }
}
```

```TypeScript
//example 2:
class test{
    // Use arrow functions
    func1=(arg:string)=>{
            return arg+" yeah" + this.prop;
    }
    func2=(arg:number)=>{
            return arg+10 + this.prop;
    }       

    // some property on this
    prop = 10;      
}
```

```TypeScript
//example 3:

//JavaScript this is captured outside the function call:
var _this = this;
this.prop = 10;
this.func1 = function (arg) {
    return arg + " yeah" + _this.prop;
};
```

<p align="center">(<a href="#top">back to top</a>)</p>

**Day 5 Typescript Basics: Modules**

-Modules example:

- Export default

```TypeScript
//@filename: hello.ts
const helloWorld = () => {
  console.log("Hello World!");
};

export default helloWorld;



//IN other files
import helloWorld from "./hello";
helloWorld();
```

- Export Named
  - And create instance

```TypeScript
// @filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;

export class RandomNumberGenerator {}



//IN other files
import {pi, phi, absolutes} from "./maths.js";

console.log(pi);
const absPhi = absolute(phi);

const absPhi: number



//IN other files
import * as mathFn from "./maths.js";

console.log(mathFn.pi);
const absPhi = mathFn.absolutes(mathFn.phi);

const abaPhi: number
```

<p align="center">(<a href="#top">back to top</a>)</p>

**Day 6 React Native Basics: First Component**

- React Native is a cross-platform mobile application framework for building native apps.
- Component Screen with TS example:
  - Understand what are the elements for a React Component
![React Native Component Screen Elements](https://github.com/CraftomeCJ/learningJournal/blob/main/IMG/PNG/elementsforcomponentfile.png "style=width:200 height: 200"))
  - rnfes ==> boilerplate for 4 part React Component File Structure

```TypeScript
//@filename: ReactComponentFileScreen.tsx
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const ReactComponentFileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the component screen!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  }
});

export default ReactComponentFileScreen;
```

- Understand how a component appear on a screen
  - add ReactComponentFileScreen.tsx to App.tsx component to make
the component appear on the user screen.

```TypeScript
//@filename: App.tsx
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ReactComponentButtonScreen from "./ReactComponentButtonScreen";
import ReactComponentFileScreen from "./ReactComponentFileScreen";

const navigator = createStackNavigator(
  {
    Home: ReactComponentButtonScreen,
    Component: ReactComponentFileScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "First React Native App"
    }
  }
);

export default createAppContainer(navigator);
```

- Common Q & A
![Name & Purpose](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/namePurpose.png "style=width:200 height: 200"))
![Common Q & A](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/JSXQnA.png "style=width:200 height: 200"))

- Understand the rules of JSX
![Rules of JSX](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/rulesOfJSX.png "style=width:200 height: 200"))

**Apply the content of JS Component to TypeScript TSX**

- Converting to Typescript project

  1. run in the command line (install typescript package dev dependencies)

```bash
npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```

  2. add tsconfig.json file in project root

```Json
​​{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react-native",
    "lib": ["es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```

  3. add jest.config.js for jest (future use when we reach testing module)

```Js
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```

  4. rename files to .tsx extension

- Extra information & resources
[Installing typescript with React Native](https://reactnative.dev/docs/typescript)
[React Native API](https://reactnative.dev/docs/0.67/components-and-apis)

<p align="center">(<a href="#top">back to top</a>)</p>

**Day 7 React Native:  Flatlist Element**

- Understand what is flatlist and how it form the list from the datasource
[more reading](https://reactnative.dev/docs/flatlist)

![Flatlist Element](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/flatlistElement.png" style=width:200 height: 200"))

- Apply the content of flatlist component to Info page of the react-native-starter project
- It's an easy way to make an efficient scrolling list of data
- There are two primary props you need to know about in a FlatList and that's data and renderItem
- **data** - Used to create the list, typically an array of objects
- **renderItem** - Is a function that will take an individual element of the data array and render a component for it

```javascript
renderItem = { ( { item } ) => {
<T,>  return <Text style={styles.textStyle}>{item.name} - Age:{item.age}</Text>
}}
```

- FlatList component requires that each item has a unique key such as an id
- The key from the data array is extracted using the keyExtractor prop on the FlatList component.
- By default, the keyExtractor prop checks for properties like key and id

```TypeScript
// @filename: ReactComponentListScreen.tsx
import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
//note FlatList
// A performant interface for 'rendering' => basic, flat list, supporting handy features:
//read RN documentation for more details

const ReactComponentListScreen: React.FC = () => {
  //below is an array of objects
  const friends = [
    //note ways to solve 'key' issues
  //method 1 we can use a 'key' prop and hard code every object in array => {name: 'Friend #1', age: 20, key: '1'},
//important 'key' prop => must be unique and a 'string'
    {name: 'Friend #1', age: 20,},
    {name: 'Friend #2', age: 21,},
    {name: 'Friend #3', age: 22,},
    {name: 'Friend #4', age: 23,},
    {name: 'Friend #5', age: 24,},
    {name: 'Friend #6', age: 25,},
    {name: 'Friend #7', age: 26,},
    {name: 'Friend #8', age: 27,},
    {name: 'Friend #9', age: 28,},
    {name: 'Friend #10', age: 29,},
  ];

  //note What is 'key' prop?
  //React's key prop is something you need to put on elements when you map over an array (otherwise React will get mad at you).
  //React's key prop gives you the ability to control component instances.
  //Each time React renders your components, it's calling your functions to retrieve the new React elements that it uses to update the DOM. If you return the same element types, it keeps those components/DOM nodes around, even if all the props changed.
  //learn this happens just as much for the state of native form elements (for things like value and even focus). The key prop isn't just for getting rid of that annoying React console error when I try to render an array of elements (all "annoying" errors from React are awesome and help you avoid bugs, so please do not ignore them). The key prop can also be a useful mechanism for controlling React component and element instances.

  return (
  <FlatList         //<== RN component
  //note if you write horizontal prop in FlatList component => default it mean {true}. shorthand => horizontal
  //horizontal
  showsHorizontalScrollIndicator={false}

  //method 2 we can use 'keyExtractor' prop in 'FlatList' component => keyExtractor={friend => friend.name}
  //create a 'keyExtractor' and pass a function that is going to be called so many different times with a single argument 'friend'
  //note it is used to extract a "Unique" key for a given item at a specified index. Useful when there are hundreds of items present in our list.
  keyExtractor={friend => friend.name}

  //important props = 'data' ==> a plain array
  data={friends}    //<== pass in a Prop of data

  //important props = 'renderItem' ==> take an 'item' from 'data' and renders it into the list
  renderItem={({item}) => {  //pass in another Prop with arg
    // arg element will be like ===> {item: {name: 'Friend #1', age: 20}, index: 0}
    //while arg item will be like ===> {name: 'Friend #2', age: 21}
  <T,> 
 return (
    <Text style={styles.textStyle}>
      {item.name} - Age {item.age}
    </Text>
    );
  }}
  />
    );
};

//note a few 'Props' around FlatList
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50 //<== 'marginVertical' Margin prop => Apply margin only to top and bottom side only
  }
});

export default ReactComponentFileScreen;
```

  -  FlatList Element
    - Turns an array into a list of elements
    - we are required to pass in a 'prop" of 'data' ==> the array of data that we are going to create a bunch of elements out of
    - also required to pass in a 'renderItem' prop ==> function that will turn each individual item into an element
    - if you are coming from React on the web, I might be used to 'mapping' an array of data to build a list ==> FlatList is better with RN

```TypeScript
// @filename: App.tsx
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./HomeScreen";
import ReactComponentFileScreen from "./ReactComponentFileScreen";
import ReactComponentListScreen from "./ReactComponentListScreen";


const navigator = createStackNavigator(
  {
    Home: ReactComponentButtonScreen,
    Component: ReactComponentFileScreen,
    List: ReactComponentFileScreen,

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
```

![Sample Result](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/flatlistComponent.png " style=width:200 height: 200"))

<p align="center">(<a href="#top">back to top</a>)</p>

**Day 8 React Native:  Button Element**

- Navigation example: 

  - Understand how to navigate around the screens. 
  - **Button & TouchableOpacity**
    - **Button**
    - Very simple component for showing a button and detecting a press
    - onPress - Handler to be call when user taps the button
    - title - Text to display inside the button
    - color - Color of the text (iOS), or background color of the button (Android).

    - **TouchableOpacity**
    - Highly customizable component that can detect a press on just about any kind of element
    - onPress - Handler to be call when user taps the button
    - style - can apply the custom styling.
    - **Stack Navigator**
    - Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack.
    - Stack navigator shows one of our components and passes in that props object
    - There are a lot of properties exist inside the props object.
    - Use navigation property object added in specifically by React Native library.
    - Navigate is a specific property inside navigation. It is a function that we can use to change the content that is visible on the screen device.

![Button Element](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/buttonElement.png "style=width:200 height: 200"))

![Sample Result](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample1.png "style=width:200 height: 200"))

```TypeScript
// @filename: ReactComponentButtonScreen.tsx
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
//using 'View' to wrap the <Text> component
//using 'TouchableOpacity' to warp the <Button> component and it is going to be used more frequently than 'Button'

//1. first need to show 'Button' on the screen
//note <Button /> element is a self close component and
//pass in a prop 'title' and assign a value to the prop ="Click Me" <== a rare case of without using curly braces  ////<== this is the default value for the button
//add in another prop ==> 'onPress={}' in to <Button> element
//2. then need to use 'TouchableOpacity' to wrap the <Button> element with a default css fade-off animation
//note TouchableOpacity is not a self close tag and it is a wrapper tag
//those in light blue are props
//temporary resolve error with
// const HomeScreen = ({navigation}: {navigation: any}) => {
//   return ...
//  }
/*doing this will make you lose type safety not advisable*/

const ReactComponentButtonScreen: React.FC = ({navigation}: {navigation: any}) => {

  return (
    <View>
      <Text style={styles.styleHeader}>
        Good day!! This is Home Screen
      </Text>

      <Button
      color={'#fff'}
      title="Go to Component Demo"
      onPress={() => navigation.navigate('Component')}
      />

      <Button
      color={'#fff'}
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
      />

            <TouchableOpacity
      onPress={() => navigation.navigate('Counter')}>
        <Text style={styles.styleMain}>
          Go to Counter Demo
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default ReactComponentButtonScreen;
//note we can refactor <TouchableOpacity> element into <Button> for neater code
//notice we no reference to the  'prop' argument inside our function, the 'prop' argument is to refer to navigation property so we can refactor by remove 'prop' argument and put in a set of (), a set of {}, and point to 'navigation'
//note this is refer to Destructuring <==
//will be using it quite frequently

const styles = StyleSheet.create({
  styleHeader: {
    marginVertical: 20,
    fontSize: 40,
    color: 'yellow',
    backgroundColor: 'lightblue',
  },
  styleTouch: {
    marginVertical: 15,
    fontSize: 25,
    color: 'blue',
    backgroundColor: 'lightyellow',
  },
  styleMain: {
    marginVertical: 10,
    fontSize: 20,
    color: 'orange',
    backgroundColor: 'lightpink'
  }
}
}
);
```

```TypeScript
// @filename: ReactComponentListScreen.tsx
import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';

const ReactComponentListScreen: React.FC = () => {
  
  const friends = [

    {name: 'Friend #1', age: 20,},
    {name: 'Friend #2', age: 21,},
    {name: 'Friend #3', age: 22,},
    {name: 'Friend #4', age: 23,},
    {name: 'Friend #5', age: 24,},
    {name: 'Friend #6', age: 25,},
    {name: 'Friend #7', age: 26,},
    {name: 'Friend #8', age: 27,},
    {name: 'Friend #9', age: 28,},
    {name: 'Friend #10', age: 29,},
  ];

  return (
  <FlatList
  showsHorizontalScrollIndicator={false}
  keyExtractor={friend => friend.name}
  data={friends}
  renderItem={({item}) => {
    <T,> return (
    <Text style={styles.textStyle}>
      {item.name} - Age {item.age}
    </Text>
    );
  }}
  />
    );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ReactComponentFileScreen;
```

```TypeScript
// @filename: App.tsx
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ReactComponentButtonScreen from "./ReactComponentButtonScreen";
import ReactComponentFileScreen from "./ReactComponentFileScreen";
import ReactComponentListScreen from "./ReactComponentListScreen";


const navigator = createStackNavigator(
  {
    Home: ReactComponentButtonScreen,
    Component: ReactComponentFileScreen,
    List: ReactComponentFileScreen,

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
```

<p align="center">(<a href="#top">back to top</a>)</p>

**Day 9 React Native: Custom Component**

  - learn the how to create reusable custom components
    - **Image**
    - A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll
    - Source - The image source (either a remote URL or a local file resource)
    - The static images are added in app by placing it in somewhere in the source code directory and provide its path as:

```TypeScript
 <Image source={require('./icon_name.png')} />
```

    - The dynamic and network images are also be displayed in the Image component. To access the network image, it is required to specify the dimensions of image manually.

```TypeScript
 <Image source={{uri: 'https://url_of_image.png'}} style={{width: 60, height: 60}} />
```

  - **Reusable Component**
    - With the growing number of properties and features in the application, even simple reusable components like Button can become complicated as a result of mutations and possible combinations.

![Button Element](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample3.png "style=width:200 height: 200"))

![Sample Result](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample2.png "style=width:200 height: 200"))

![Sample Result](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample4.png "style=width:200 height: 200"))

```TypeScript
// @filename: ReactComponentButtonScreen.tsx
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const ReactComponentButtonScreen: React.FC = ({navigation}: {navigation: any}) => {

  return (
    <View>
      <Text style={styles.styleHeader}>
        Good day!! This is Home Screen
      </Text>

      <Button
      color={'#fff'}
      title="Go to Component Demo"
      onPress={() => navigation.navigate('Component')}
      />

      <Button
      color={'#fff'}
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
      />

      <Button
      color={'#fff'}
      title="Go to Image Demo"
      onPress={() => navigation.navigate('Image')}
      />

    </View>
  );
};

export default ReactComponentButtonScreen;

const styles = StyleSheet.create({
  styleHeader: {
    marginVertical: 20,
    fontSize: 40,
    color: 'yellow',
    backgroundColor: 'lightblue',
  },
  styleTouch: {
    marginVertical: 15,
    fontSize: 25,
    color: 'blue',
    backgroundColor: 'lightyellow',
  },
  styleMain: {
    marginVertical: 10,
    fontSize: 20,
    color: 'orange',
    backgroundColor: 'lightpink'
  }
}
}
);
```

```TypeScript
// @filename: ReactComponentImageScreen
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//todo import the child imageDetails to parent here
import ImageDetails from './../components/ImageDetails'

//todo customize each  of the different image detail to show slightly different content
//todo next is to pass some props from parent down to the child to customize how this child component display itself to show to the user
//todo code to add image and add image file to assets folder

//note
/* create a very unique custom props name called title */
/* 'ImageDetails => self close tag for display image details */
////<== props title for description
////<== 2nd props always use name make send to me & other developer
const ReactComponentImageScreen: React.FC = ({navigation}) => {

return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Counter')}>

      <ImageDetails
      imageTitle = 'sunset'
      imageSource = {require('../../assets/sunset.jpg')}
      score = {10}
      />
      </TouchableOpacity>
      <ImageDetails
      imageTitle = 'freeway'
      imageSource = {require('../../assets/freeway.jpg')}
      score = {8}
      />
      <ImageDetails
      imageTitle = 'cliffbythesea'
      imageSource = {require('../../assets/cliffbythesea.jpg')}
      score = {7}
      />
      <ImageDetails
      imageTitle = 'mountaintop'
      imageSource = {require('../../assets/mountaintop.jpg')}
      score = {10}
      />

    </View>
  )
}

export default ReactComponentImageScreen;

const styles = StyleSheet.create({})
//learn Parent-Child relationship
//todo same group of elements, repeated three times
//todo we could repeat the same JSX three times over, or we could create a separate component

//learn building reusable components exercise
/*
1. add a new prop to be passed from ImageScreen to ImageDetails
2. this props should indicate a 'score' for the image. Make sure you give the prop an appropriate name!
3. show the image score under the image in a new Text element
*/
```

```TypeScript
// @filename: App.tsx
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ReactComponentButtonScreen from "./ReactComponentButtonScreen";
import ReactComponentFileScreen from "./ReactComponentFileScreen";
import ReactComponentListScreen from "./ReactComponentListScreen";
import ReactComponentImageScreen from "./ReactComponentImageScreen";


const navigator = createStackNavigator(
  {
    Home: ReactComponentButtonScreen,
    Component: ReactComponentFileScreen,
    List: ReactComponentFileScreen,
    Image: ReactComponentImageScreen,

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
```

<p align="center">(<a href="#top">back to top</a>)</p>

**Day 10 React Native: State Management**

  - learn what is the react native state and how to use state to update the component
    - **State**
    - There are two types of data state and props in React Native which control the component.
    - The component that uses the state is mutable. They can be changed later on if required.
    - The props component is immutable, and it is fixed throughout the lifetime.
    - The state is generally initialized in constructor and then call setState when we want to change it.
    - We never directly modify a state variable. React doesn't detect this change. Only use the "setter" function
    - We can track any kind of data that changes over time - a number , string, array of object, etc.
    - When a component is rerendered, all of its children get rerendered too.
    - A state variable can be passed to a child component. At that point, the state variable is now being used as props.
**Why never change the state directly**
  - You may just replace the update you made.
  - When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
   - You will lose control of the state across all components.

![State Management](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample5.png "style=width:200 height: 200"))

![Sample Result](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample6.png "style=width:200 height: 200"))

![Three Question](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample7.png "style=width:200 height: 200"))

![Three Question](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample8.png "style=width:200 height: 200"))

![Three Question](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample9.png "style=width:200 height: 200"))

```TypeScript
// @filename: ReactComponentButtonScreen.tsx
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const ReactComponentButtonScreen: React.FC = ({navigation}: {navigation: any}) => {

  return (
    <View>
      <Text style={styles.styleHeader}>
        Good day!! This is Home Screen
      </Text>

      <Button
      color={'#fff'}
      title="Go to Component Demo"
      onPress={() => navigation.navigate('Component')}
      />

      <Button
      color={'#fff'}
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
      />

      <Button
      color={'#fff'}
      title="Go to Image Demo"
      onPress={() => navigation.navigate('Image')}
      />

       <Button
       color={'#fff'}
      title="Go to Hook's Counter Demo"
      onPress={() => navigation.navigate('StateCounter')}
      />

    </View>
  );
};

export default ReactComponentButtonScreen;

const styles = StyleSheet.create({
  styleHeader: {
    marginVertical: 20,
    fontSize: 40,
    color: 'yellow',
    backgroundColor: 'lightblue',
  },
  styleTouch: {
    marginVertical: 15,
    fontSize: 25,
    color: 'blue',
    backgroundColor: 'lightyellow',
  },
  styleMain: {
    marginVertical: 10,
    fontSize: 20,
    color: 'orange',
    backgroundColor: 'lightpink'
  }
}
}
);
```

```TypeScript
// @filename: ReactComponentCounterScreen
import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'

const Counter: React.FC = () => {
   //todo trying: try to replace the following line with let counter = 0;
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Button
      title="Increase"
      onPress={() => {
  //todo trying: try to replace the following line with counter++;
        setCounter(counter + 1)
      }}
      />
      <Button
      title="Decrease"
      onPress={() => {
  //todo trying: try to replace the following line with counter--;
        setCounter(counter - 1)
      }}
      />
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})
```

```TypeScript
// @filename: App.tsx
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ReactComponentButtonScreen from "./ReactComponentButtonScreen";
import ReactComponentFileScreen from "./ReactComponentFileScreen";
import ReactComponentListScreen from "./ReactComponentListScreen";
import ReactComponentImageScreen from "./ReactComponentImageScreen";
import ReactComponentCounterScreen from "./ReactComponentCounterScreen";


const navigator = createStackNavigator(
  {
    Home: ReactComponentButtonScreen,
    Component: ReactComponentFileScreen,
    List: ReactComponentFileScreen,
    Image: ReactComponentImageScreen,
    StateCounter: ReactComponentCounterScreen,

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
```

![notes on state](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample10.png "style=width:200 height: 200"))

![notes on state2](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample11.png "style=width:200 height: 200"))

![more notes on state](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample12.png "style=width:200 height: 200"))

<p align="center">(<a href="#top">back to top</a>)</p>

**Day 11 React Native: State Management**

- learn what is the react native state and how to use state to update the flatlist(state is data array)
  - **State**
  - Use state to store item into array.
    - The declaration with pre define variable.
      - Set color as an empty array
      - const [colors, setColors] = useState([])
      - set color to and initialize variable
      - const [colors, setColors] = useState( [ "rgb( 0, 0, 0 )" ] )
  - Add variable/object to array
      - setColors( [...colors,randomRGB()] )
      - ...colors = An array object which contain all the data
  - Three question:
  1. What piece of data inside this application is changing?
color
  2. What type of data is it? Is it number, a string an object or and array?
array of string.
  3. What is the starting value of that piece of data?
empty array []

![Sample Result2](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample13.png "style=width:200 height: 200"))

![Three Question2](https://github.com/CraftomeCJ/RNTraining-REMAKE/blob/main/src/Learning_TypeScript_RN/assets/learningImgs/sample14.png "style=width:200 height: 200"))

```TypeScript
// @filename: ReactComponentButtonScreen.tsx
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const ReactComponentButtonScreen: React.FC = ({navigation}: {navigation: any}) => {

  return (
    <View>
      <Text style={styles.styleHeader}>
        Good day!! This is Home Screen
      </Text>

      <Button
      color={'#fff'}
      title="Go to Component Demo"
      onPress={() => navigation.navigate('Component')}
      />

      <Button
      color={'#fff'}
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
      />

      <Button
      color={'#fff'}
      title="Go to Image Demo"
      onPress={() => navigation.navigate('Image')}
      />

       <Button
       color={'#fff'}
      title="Go to Hook's Counter Demo"
      onPress={() => navigation.navigate('StateCounter')}
      />

      <Button
      color={'#fff'}
      title="Go to Hook's Color Demo"
      onPress={() => navigation.navigate('StateColor')}
      />

    </View>
  );
};

export default ReactComponentButtonScreen;

const styles = StyleSheet.create({
  styleHeader: {
    marginVertical: 20,
    fontSize: 40,
    color: 'yellow',
    backgroundColor: 'lightblue',
  },
  styleTouch: {
    marginVertical: 15,
    fontSize: 25,
    color: 'blue',
    backgroundColor: 'lightyellow',
  },
  styleMain: {
    marginVertical: 10,
    fontSize: 20,
    color: 'orange',
    backgroundColor: 'lightpink'
  }
}
}
);
```

```TypeScript
// @filename: ReactComponentColorScreen.tsx
import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'

const ReactComponentColorScreen: React.FC= () => {
  const [color, setColor] = useState(["rgb( 0, 0, 0 )"])

  return (
    <View>
      <Text style={styles.textHeader}>
        What is your favorite color?
        </Text>
        <Text style={styles.textParagraph}>
        My favorite color is: {color}
        </Text>
      <Button
        title="Green"
        onPress={() => {
          setColor('green')
        }}
      />
      <Button
        title="Blue"
        onPress={() => {
          setColor('blue')
        }}
      />
      <Button
        title="Pink"
        onPress={() => {
          setColor('pink')
        }}
      />
      <Button
        title="Red"
        onPress={() => {
          setColor('red')
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          setColor('')
        }}
      />
    </View>
  )
}

export default ReactComponentColorScreen

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 30
  },
  textParagraph: {
    fontSize: 20
  },
  buttonStyle: {
    marginVertical: 20,
    color: 'red'
  }
})
```

```TypeScript
// @filename: App.tsx
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ReactComponentButtonScreen from "./ReactComponentButtonScreen";
import ReactComponentFileScreen from "./ReactComponentFileScreen";
import ReactComponentListScreen from "./ReactComponentListScreen";
import ReactComponentImageScreen from "./ReactComponentImageScreen";
import ReactComponentCounterScreen from "./ReactComponentCounterScreen";
import ReactComponentColorScreen from "./ReactComponentColorScreen";


const navigator = createStackNavigator(
  {
    Home: ReactComponentButtonScreen,
    Component: ReactComponentFileScreen,
    List: ReactComponentFileScreen,
    Image: ReactComponentImageScreen,
    StateCounter: ReactComponentCounterScreen,
    StateColor: ReactComponentColorScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
```

<p align="center">(<a href="#top">back to top</a>)</p>

### Possible Project Work

**I wished to:** <br/>

1. Create a marketplace app either host a numbers of ecommerce sites or dedicate app for my wife's Amigurumi doll's e-store
2. A predictive investment signal app based on Technical Analysis, Fundamental Analysis, and Machine Learning that break the Law of irrationalities.
3. A driverless car booking app
4. A food science app that offer unified insights into the ingredients of food in any supermarket
5. A food & nutrition app that provide food portions in smaller sizes to stimulate reduction of food consumption and reduction of food waste
6. A wellness app that provides more scientifically proven and generally understood advices to a health diet
7. An app to provide a more balanced healthcare for the various developed nations
8. An wellness and diet advisor app based on blood test result.
9. A bookstore app that provides a unified platform for all kinds of books and magazines.
10. A multilingual recipe app that provides recipes and nutrition facts to promote eat well eat healthy Southeast-Asia Cuisine.
11. Build a Chatbot that can provide a personalized service to the user based on the user's input

<p align="center">(<a href="#top">back to top</a>)</p>

## Room to improve?

- Had make good progress on practice to time-boxing my task to 90 minutes per self-assigned task.
- Continue to work on the more advance React Native concepts, its feature, workflows and how to use it with some CSS fundamentals.
- required more efforts on refactoring and TypeScript understanding ie interface and extends for type protection.
- Day 26 is continue to learn and practice on Day 15 & 16 notes of React Native concepts and at the same time work on TypeScript conversion, behind schedule by 2.5 days.
- Practice more to have better understanding of the useState & useReducer with other tutorials.
- Layout of working journal now look good, from day 26 onwards will improve on technical writing of learning experience and daily lesson task reviews with a better layout.
- Add one more column for technical book's chapter summary for future reference.
- add one more column for non-technical book's chapter summary for future reference.
- To learn and master better file management on using .gif to showcase course's challenge work and .png folder for error and warning messages display.

<p align="center">(<a href="#top">back to top</a>)</p>

### Contact Information

- Email me => [Christophe Javier Ho (CJ Ho)](javier.ho@activate.sg)
- [My Profile](https://linkedin.com/in/cjho)
**Learning Progress:**
- [React Native + Hooks Course](https://github.com/CraftomeCJ/RN-Hook_Course)
- [Understanding TypeScript](https://github.com/CraftomeCJ/rn-training)
- [Past Daily Journals](https://github.com/CraftomeCJ/learningJournal)
- [Practice Folder](https://github.com/CraftomeCJ/projectDemo)
**Projects:**
- [eCommerce Mocksite](https://github.com/CraftomeCJ/finalProjectCobra)
- [Mini Project Collections](https://codepen.io/my-work)

### Acknowledgments

- Course Resources Provided by:
  - Anya Huang
  - Janna
  - [Udemy](https://nlbsg.udemy.com/)
Million thanks to:
- Anya Huang, our supervisor cum mentor for a welcoming learning environment and providing valuable guidances.
- Janna, our trainer for helping me to understand the concepts and training contents.
- Russell aka Bob, our technical manager.
- My mentor [Kenneth Ham](https://www.linkedin.com/in/kennetham/?originalSubdomain=sg)
- The wonderful team from [Activate Interactive](https://www.activate.sg/), for providing us great internship experiences with a wonderful learning environment and resources.
- Every single marvelous talented course-mates of JFSD Cohort 4 learning together during the 9 months journey:
  - Willy, Janson, Jan, Christmin and Alvin and many others <br />
for their hard work and support.

### Author

Created by:

- [CJ Ho](https://linkedin.com/in/cjho)- feel free to contact me :>!!

### Software Installed
<!-- - [Xcode 13](https://developer.apple.com/xcode/) -->
<p align="center">(<a href="#top">back to top</a>)</p>

### Resource Links

[React Native Training Course Schedule](https://docs.google.com/document/d/1X1WgRPKxWwenKXswD5xHcuEZ4NFRj8EWmkCC8MLsBwg/edit#heading=h.2gbthfjx9c7r)
[The Complete React Native + Hooks Course](https://nlbsg.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706740#overview)

[Day 1: Computer/Software/IDE Setup](https://docs.google.com/document/d/1Mdpnr2owPIfNweP-585h9gG_6qRJ7o5y29WdMhK35w0/edit#)

[Day 2: React Native Training Course](https://docs.google.com/document/d/1xVfj6FU5U66KOUrjjZkWJ3uAaclqmt_RvZVPtJvKo6w/edit#)

[Configure VM acceleration on Linux](https://developer.android.com/studio/run/emulator-acceleration?utm_source=android-studio#vm-linux)

[Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
