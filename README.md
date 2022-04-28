<<<<<<< HEAD
=======
# react-native-starter
react-native start with functional programming/hooks.
It has the flow of Welcome Page -> Dashboard -> Login -> Dashbaord
                                             |
                                             |
                                              -> Other Pages No Need Login
>>>>>>> main
# Get Started

## Procedures:

### Step 1:

git clone this repo and install the NPM dependencies by

command: `git clone https://github.com/huanganya/react-native-starter && cd react-native-starter`

### Step 2:

install necessary NPM node modules by

command: `npm install` in the project root folder

### step 3:

for iOS:

command `cd ios && pod install && cd ..` in the project root folder

### step 4:

#### for iOS:

command: `npm run ios`

#### for android:
command: `npm run android`

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
Go to https://code.visualstudio.com/docs?dv=osx
Follow the steps to download and install vscode
- Install node & npm 
Use the following command to install homebrew:
 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" 
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
https://github.com/ and create your own github account
You should have a github account like 
https://github.com/yourusername
- Create your own Github repository
Login your github account and create your repository called RNTraining-REMAKE
You should a repository called RNTraining-REMAKE in your github accounnt
- Get the react native starter project from Github
Install git using: brew install git
Prepare create a folder in your mac called RNTraining
Go to RNTraining and run
git clone https://github.com/huanganya/react-native-starter
After step1, you should get this:
➜  ~ git --version
git version 2.32.0 (Apple Git-132)

After step 3, you should get this:

➜ ls
react-native-starter
- Push the cloned code to your own github account
Follow the steps at https://stackoverflow.com/questions/18200248/cloning-a-repo-from-someone-elses-github-and-pushing-it-to-a-repo-on-my-github
You should be able to see the react-native-starter project is in your RNTraining-REMAKE repo.

Day 2:
**What is React Native?**
 - Javascript framework
 - cross platform(ios & Android)
 - native UI looking instead of webview
 - JSX componets(TSX in our case)
 
Visit the following page and understand the pros and cons of react native
https://www.oreilly.com/library/view/learning-react-native/9781491929049/ch01.html
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
  11. ctrl + click  http://localhost:19002
  12. download expo app from Android Playstore
  13. scan QR code
  14. press 'a' open Android emulator

You should be able to see the app running in the simulator and the Metro server is running for your app.

- React Native Project File System
  1. Go to the project root and type code .
  2. You can have a look at the folders and files at the left side menu
  3. /package.json and /package-lock.json : Find the and visit https://dev.to/naveenchandar/package-json-file-explained-b94 try to understand what’s inside the package.json
  4. /android and /ios: Please note there are folders called android and ios, those folders contains the settings or the generated code for the android and ios
  5. /node_modules: Please note there is a folder called node_modules, which contains all the necessary node modules for the RN apps. It will be created when you run `npm install`
  6. /src: all the source code. Expand the src folder and have a look at the folders and files under src. You don’t need to understand what’s inside right now. It contains the main codes for the RN apps
  7. Index.js: the entry file for the react native
  8. __tests__: this is the the fold for all the unit tests
  9. Other system files and config files such as .gitignore, prettierrc.js,  babel.config.js, jest.config.js…

**Typescript Basics: Part 1**
- TypeScript is a programming language built and maintained by Microsoft. It is a superset of JavaScript that adds strong type checking and is compiled into plain JavaScript code.
- Refer to: https://www.freecodecamp.org/news/learn-typescript-basics/

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
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
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
https://www.typescriptlang.org/docs/handbook/enums.html

- Follow the content of Everyday types and practice the types and functions in the list. 
  1. Try to write some functions and Understand what is Anonymous Functions.
  2. Try to use union type for your function and do the type check inside the function
  3. Try to write interface and Understand what’s the difference between type and interface. We will have a lot of practice in lessons later.
  4. Understand what what is Literal Types and how to solve the type error for literal types
  5. Try to write some codes for enum

- If have extra time, please go through https://www.typescriptlang.org/docs/handbook/2/narrowing.html and practice more one:
  1. typeof type guards
  2. The in operator
  3. The instanceof check

Error:
[Unable to find expo in this project - have you run yarn / npm install yet?](https://stackoverflow.com/questions/67618967/unable-to-find-expo-in-this-project-have-you-run-yarn-npm-install-yet)

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
