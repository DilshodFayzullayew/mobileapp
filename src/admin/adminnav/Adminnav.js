import { View, Text } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Workplace from '../workplace/Ish Joylari'
import Masters from '../masters/Masterlar'
import Workers from '../workers/Ishchilar'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Mashinistlar from '../mashinistlar/Mashinist'
import Olchovchi from '../olchovchi/Olchovchi'
import Poyezdlar from '../poyezdlar/Poyezdlar'
import Trip from '../trips/Trip'

export default function Adminnav() {

    const Drawer = createDrawerNavigator()



  return (
    <Drawer.Navigator 
      screenOptions={{
        statusBarColor:'#0163d2',
        headerStyle:{
          backgroundColor:"#0163d2"
        },
        headerTintColor:"#fff",
        headerTitleAlign:'center',
        drawerStyle:{
          borderStyle:'dotted'
        },
       
      }}
    >
        <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="home" color='#0163d2' size={20} />
          ),
        }}
        name='Ish Joylari' component={Workplace}/>

        <Drawer.Screen  
         options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="school" color='#0163d2' size={20} />
          ),
        }}
        name='Masterlar' component={Masters}/>

        <Drawer.Screen   
         options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="engineering" color='#0163d2' size={20} />
          ),
        }}
        name='Ishchilar' component={Workers}/>

        <Drawer.Screen   
         options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="star" color='#0163d2' size={20} />
          ),
        }}
        name='Mashinistlar' component={Mashinistlar}/>

        <Drawer.Screen   
         options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="terminal" color='#0163d2' size={20} />
          ),
        }}
        name='O`lchovchilar' component={Olchovchi}/>

        <Drawer.Screen   
         options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="train" color='#0163d2' size={20} />
          ),
        }}
        name='Poyezdlar' component={Poyezdlar}/>

      <Drawer.Screen   
         options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="warehouse" color='#0163d2' size={20} />
          ),
        }}
        name='Trips' component={Trip}/>






    </Drawer.Navigator>
  )
}