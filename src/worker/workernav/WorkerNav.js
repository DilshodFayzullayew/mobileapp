import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Chat from '../screens/Chat'
import MyWorks from '../screens/MyWorks'
import Profile from '../screens/Profile'
import Test from '../screens/Test'
import { Entypo } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';




const Tab = createBottomTabNavigator()

const screenOptions ={
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:60,
        beckgroud:'green',
        borderRadius:20,
    }
}


export default function WorkerNav() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Home'  component={Home} 
          options={{tabBarIcon:({focused}) => {
            return(
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Entypo name='home' size={24} color={focused?'#16247d':'#111'} />
                    <Text style={{fontSize:12,color:'#16247d'}}>HOME</Text>
                 </View>
            )
          }
          }}
        />
        <Tab.Screen name='MyWorks' component={MyWorks} 
          options={{tabBarIcon:({focused}) => {
            return(
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Ionicons name="cloud-done" size={24} color={focused?'#16247d':'#111'}/>
                    <Text style={{fontSize:12,color:'#16247d'}}>MyWorks</Text>
                 </View>
            )
          }
          }}
        />
        <Tab.Screen name='Test' component={Test} 
          options={{tabBarIcon:({focused}) => {
            return(
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <MaterialCommunityIcons name="ab-testing" size={24}  color={focused?'#16247d':'#111'} />
                    <Text style={{fontSize:12,color:'#16247d'}}>Test</Text>
                 </View>
            )
          }
          }}
        />
        <Tab.Screen name='Chat' component={Chat} 
          options={{tabBarIcon:({focused}) => {
            return(
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <AntDesign name="wechat" size={24} color={focused?'#16247d':'#111'} />
                    <Text style={{fontSize:12,color:'#16247d'}}>Chat</Text>
                 </View>
            )
          }
          }}
        />
        <Tab.Screen name='Profile' component={Profile} 
          options={{tabBarIcon:({focused}) => {
            return(
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Ionicons name="settings" size={24}  color={focused?'#16247d':'#111'} />
                    <Text style={{fontSize:12,color:'#16247d'}}>Profile</Text>
                 </View>
            )
          }
          }}
        />
    </Tab.Navigator>
  )
}