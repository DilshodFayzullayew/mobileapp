import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Login from '../Login'
import FlashScreen from '../FlashScreen'
import { useState } from 'react'

export default function LoginScr() {

   const [load,setLoad] =  useState(true)

    useEffect(()=>{
        setTimeout(() => {
            setLoad(false)
        }, 5000);
    },[])

  return load?<FlashScreen/>:<Login/>
      
}