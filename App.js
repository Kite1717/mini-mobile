import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  MyBooks,
  Blog,
  Profile,
  AddBook,
  BookEx,
  Chart,
  Exercise,
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="MyBooks" component={MyBooks} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Blog" component={Blog} />
          <Stack.Screen name="AddBook" component={AddBook} />
          <Stack.Screen name="BookExercises" component={BookEx} />
          <Stack.Screen name="Chart" component={Chart} />
          <Stack.Screen name="Exercise" component={Exercise} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
