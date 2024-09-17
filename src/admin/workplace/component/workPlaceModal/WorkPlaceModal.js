import { View, Text, StyleSheet,Pressable,Modal, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import SyncStorge from 'sync-storage'
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from '@react-navigation/native';

export default function WorkPlaceModal(props) {
    const [workinTimesNames, setworkinTimesNames] = React.useState([''])
    const [workPlaceName, setWorkPlaceName] = React.useState('')
    const [message,setMessage] = React.useState('')
    const token = SyncStorge.get('token')
    const isFocused = useIsFocused();

    
    

    const onSubmitHandler = () => {
        const data = {
            workPlaceName: workPlaceName,
            workinTimesNames:workinTimesNames
        };
    
        
    
        fetch('http://192.168.80.101:8080/api/workPlace/add-workplace', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(responseData => {
              if (!responseData['success']) {
                Alert.alert(responseData['message'])
              }
              if (responseData['success']){
                props.setModalVisible(false)
                setworkinTimesNames([''])
                setWorkPlaceName('')
                
        
              }
            })
            .catch(error => {
                console.log(error);
            });
    };
    const handleChange = () => {
        const newInputs = [...workinTimesNames]
        newInputs.push('')
        setworkinTimesNames(newInputs)
      }

    const handleRemove = (index) => {
        const newInputs = [...workinTimesNames]
        newInputs.splice(index,1)
        setworkinTimesNames(newInputs)
    }

    const handleinputchange = (text,index) => {
        const newInputs = [...workinTimesNames]
        newInputs[index] = text
        setworkinTimesNames(newInputs)
    }
    
    const modalClose = () => {
        props.setModalVisible(false)
        setworkinTimesNames([''])
        setWorkPlaceName('')

        

    }

  return (
    <>
    <Modal
     transparent={true}
     animationType='fade'
     visible={props.modaVisible}
    >
        <View style={styles.modalAddContainer} transparent={false}>
            <View style={styles.modalView}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalText}>Ish Joyi Qo`shish</Text>
                    <Pressable onPress={modalClose}>
                        <MaterialIcons name='close' size={24} color="black" />
                    </Pressable>
                </View>
                <View  style={styles.modalBody}>
                    <Text>Sex nomi</Text>
                    <TextInput value={workPlaceName} onChangeText={setWorkPlaceName} autoCorrect={false} autoCapitalize='none' style={styles.input}/>
                </View>
                <View >
                  
                  <View>
                    {workinTimesNames.map((input,index)=>(
                       <View key={index} style={styles.mainmid}>
                            <View >
                                <TextInput style={styles.input2}   value={input} onChangeText={text=>handleinputchange(text,index)}/>
                            </View>
                            <View>
                                <MaterialIcons name='delete' size={33} onPress={() => handleRemove(index)} />
                            </View>
                       </View>
                    ))}
                    
                  </View>
                </View>

                <View style={styles.modalfooter}>
                <Button title='qo`shish' onPress={handleChange} /> 
                    <Pressable onPress={onSubmitHandler} 
                    style={styles.modalAddSubmitButton}>
                      <Text style={styles.modalSubmitText}>Jo`natish</Text>
                    </Pressable>
                </View>
               
            </View>

           
        </View>

    </Modal>
    </>
  )
}

const styles = StyleSheet.create({
    modalAddContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        backgroundColor:'rgba(0,0,0,0.3)',

    },
    modalView:{
        borderColor:"#cfcfcf",
        borderWidth:1,
        backgroundColor:'white',
        width:'80%',
        borderRadius:20,
        shadowOpacity:0.25,
        shadowRadius:20,
        elevation:5,
        marginVertical:2,
    },
    modalHeader:{
        borderColor:'#cfcfcf',
        borderBottomWidth:1,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',

    },
    modalBody:{
        padding:10,

    },
    input:{
        height:30,
        borderWidth:1,
        borderColor:'#cfcfcf0',
        padding:5,
        borderRadius:10,
        marginVertical:2,

    },
    mainmid:{
        flexDirection:'row',
        marginBottom:23,
    },
    input2:{
        height:30,
        borderWidth:1,
        borderColor:'#cfcfcf0',
        padding:5,
        borderRadius:10,
        marginVertical:2,
        width:200,
        marginLeft:20,

    },
    modalfooter:{
        borderColor:'#cfcfcf',
        borderBottomWidth:1,
        paddingBottom:10,
        paddingLeft:10,
        flexDirection:'row',
        justifyContent:'space-between',

    },
    modalAddSubmitButton:{
        backgroundColor:'green',
        borderRadius:3,
        padding:5,
        margin:1
    },
    modalSubmitText:{
        color:'white',

    }
})