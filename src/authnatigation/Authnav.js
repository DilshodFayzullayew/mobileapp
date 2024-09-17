import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import LoginScr from '../auth/LoginScr/LoginScr'
import ResetPassword from '../auth/ResetPassword'
import WorkPlace from '../admin/workplace/Ish Joylari'
import Adminnav from '../admin/adminnav/Adminnav'
import WorkerNav from '../worker/workernav/WorkerNav'
import Checknav from '../checker/checkernav/Checkernav'
import Quiz from '../mainComponent/quiz/screens/Quiz'


const Stack = createNativeStackNavigator()



export default function Authnav() {
  return (
   <NavigationContainer independent={true}>
    <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScr}  options={{headerShown:false}}/>
        <Stack.Screen name='ResetPassword' component={ResetPassword}  options={{headerShown:false}}/>
        <Stack.Screen name='Adminnav' component={Adminnav}  options={{headerShown:false}}/>
        <Stack.Screen name='WorkerNav' component={WorkerNav}  options={{headerShown:false}}/>
        <Stack.Screen name='Checknav' component={Checknav}  options={{headerShown:false}}/>
        <Stack.Screen name='Quiz' component={Quiz}  options={{headerShown:false}}/>
        
        
        
        
    </Stack.Navigator>
   </NavigationContainer>
  )
}