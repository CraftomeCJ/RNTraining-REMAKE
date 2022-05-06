// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import HomeScreen from "./HomeScreen";
import createStackNavigator from "@react-navigation/stack/lib/typescript/src/navigators/createStackNavigator";
import ReactComponentFileScreen from "./ReactComponentFileScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
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
