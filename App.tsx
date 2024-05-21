import React from "react";
import { Home } from "./home";
import { SayriList } from "./shayriList";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OpenShayri } from "./openshayri";
const Stack=createNativeStackNavigator();

export default function App()
{
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={Home} ></Stack.Screen>
          <Stack.Screen name="shayrilist" component={SayriList} ></Stack.Screen>
          <Stack.Screen name="shayri" component={OpenShayri} ></Stack.Screen>       
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}
