import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable,Button,FlatList, ScrollView, RefreshControl,SafeAreaView, Dimensions,Row,Rows,Table, Alert } from "react-native";
import { Color, Border, Padding,FontSize } from "./GlobalStyles";
import {MaterialIcons} from '@expo/vector-icons'
import SyncStorge from 'sync-storage'
import React from 'react'

export default function Trip() {

  const [workplace_id, setWorkPlace_id] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const token = SyncStorge.get('token')
  const workpalce = SyncStorge.get('workplace')
  const [refreshing, setRefreshing] = React.useState(false);
  const [masters, setMasters] = React.useState([])

  const fetchdata = async (id) => {
    fetch('http://192.168.137.1:8080/api/train/get_train/' + id, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + token
      },
    
  })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData['permissions']) 
        setMasters(responseData['permissions'])    
      })
      .catch(error => {
          console.log(error);
      });
}



 

  const onGetId = (id) => {
    fetchdata(id)
  }
  return (
    <View style={styles.personalInfo}>
   
      <View style={styles.topmain}>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
            {
              workpalce.map((item,index)=>{
                return(
                  <Pressable onPress={() => onGetId(item.id)}>
                    <View key={index} style={styles.scrollContainer}>
                      <View style={styles.scrollmid}>
                          <Text style={styles.scrollText}>{item.nameaOfWorkPlace}</Text>
                        </View>
                     </View>
                  </Pressable>
                )
              })
            }
          </ScrollView>
        </View>
       
{/* 
        <View>
            <View style={styles.tablecontainer}>
              <View style={styles.headItemcontainer}>
                <View style={styles.headItemrow}>
                  <Text>Poyzd nomeri</Text>
                </View>
                <View style={styles.headItemrow}>
                 
                      <Text>
                      <MaterialIcons name='add' size={28} color='black' />
                      </Text>
                 
                </View>
              </View>
            </View>
           <View style={styles.scrollView}>
            <ScrollView >
              <View style={styles.tablecon}>
              {
                  masters.map((item,index) => (
                    <View key={index} style={styles.tablecontainer1}>
                      <View style={styles.headItemcontainer2}>
                        <View style={styles.headItemrow1}>
                          <Text style={styles.texttable}>{item.name}</Text>
                        </View>
                        <View style={styles.headItemrow1}>
                          <View style={styles.headItemrow11}>
                            <View style={styles.concon}><MaterialIcons style={styles.iconstyle} name="edit" size={22}/></View>
                            
                            <MaterialIcons name="delete" size={22}/>
                          </View>
                        </View>

                      </View>
                    </View>
                  ))
                } 
              
              </View>
              </ScrollView>
           </View>
          </View>
         */}

      </View>
    <View style={styles.info}>
      <Image
        style={styles.avatarIcon}
        contentFit="cover"
        source={require("./settings.png")}
      />
      <Text style={styles.choudaryAoun}>Havsiz poyaskalar</Text>
      <Text style={styles.choudaryaoun121gmailcom}>
        Eng havsiz payaskalar
      </Text>
     
      <View style={styles.totalCalcutaions}>
        <View style={styles.weightParent}>
          <Text style={[styles.weight, styles.ageTypo]}> Tr1</Text>
          <Text style={[styles.kg, styles.textTypo]}>2 o`rin</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.height, styles.ageTypo]}> Pto</Text>
          <Text style={[styles.text4, styles.agePosition]}>1 o`rin</Text>
        </View>
        <View style={styles.parentShadowBox}>
          <Text style={[styles.age, styles.agePosition]}> 63</Text>
          <Text style={[styles.text5, styles.textTypo]}>3 o`rin</Text>
        </View>
      </View>
     
    </View>
    <View style={[styles.top, styles.topFlexBox]}>
     
      <Text style={styles.text2Typo}>Masterlar</Text>
     <Pressable >
      <Image
          style={[styles.bell11, styles.bell11Layout]}
          contentFit="cover"
          source={require("../workplace/workpalceasstets/plus.png")}
        />
     </Pressable>
    </View>
    
    
  </View>
  )
}


const styles = StyleSheet.create({
  texttable:{
    width:82,
    marginLeft:43,
  },
  
  
  
  scrollContainer: {
    margin: 10, 
    padding: 3, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 10, 
    backgroundColor: '#fff', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
    elevation: 1, 
  },
  
  scrollText: {
    fontSize:13, 
    color: '#333', 
    padding:5,
  },
  tablecon:{
    width:'90%',
    marginLeft:20,
  },
  concon:{
    marginRight:9,
  },

  tablebody:{
    flexDirection:'row',
  },

    topmain:{
        top:250,
    },

    tablecontainer:{
      backgroundColor:'rgba(255,255,255,1)',
      borderRadius:100,
      padding:10,
    
    },

    tablecontainer1:{
      backgroundColor:'rgba(255,255,255,1)',
      right:0,
    
    
    },
    headItemcontainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      padding:10,
      borderWidth:2,
      borderColor:'#cfcfcf',
      backgroundColor:'#e8e8e8',
      borderRadius:20,
      shadowOpacity:0.25,
      shadowRadius:4,
      elevation:5,
      marginBottom:2,

    },
    headItemcontainer2:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      padding:10,
      borderWidth:1,
      borderColor:'#cfcfcf',
      backgroundColor:'#e8e8e8',
      borderRadius:20,
      shadowOpacity:0.25,
      shadowRadius:4,
      elevation:5,

    },
    headItemrow:{
      width:'20%',
      alignItems:'center'
    },
    headItemrow1:{
      width:'13%',
      alignItems:'center',
    },

    headItemrow11:{
     flexDirection:'row',
     justifyContent:'space-between',
     margin:2,
     padding:1,
    },

    addButton:{
      backgroundColor:'green',
      borderRadius:3,
      padding:5,
      margin:1,

    },
    addButtonText:{

    },
    
  homeLayout: {
    width: 78,
    top: 0,
    height: 72,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  iconLayout: {
    width: 77,
    top: 0,
    height: 72,
    position: "absolute",
    overflow: "hidden",
  },
  goWrapperBg: {
    backgroundColor: Color.colorSlateblue,
    top: 0,
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  heartShadowBox: {
    width: 171,
    borderRadius: Border.br_8xs,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: -1,
      height: -1,
    },
    position: "absolute",
    overflow: "hidden",
  },
  bell11Layout: {
    height: 30,
    overflow: "hidden",
  },
  textClr: {
    color: Color.colorGray_300,
    
  },
  kcalTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    
    position: "absolute",
  },
  heartChildLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  heartPosition: {
    height: 50,
    marginTop: -25,
    maxWidth: "100%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  heartChildPosition1: {
    marginTop: -17,
    maxWidth: "100%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  heartChildPosition: {
    height: 58,
    marginTop: -29,
    maxWidth: "100%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  walkShadowBox: {
    top: 314,
    width: 171,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_8xs,
    elevation: 6,
    shadowRadius: 6,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -1,
      height: -1,
    },
    position: "absolute",
    overflow: "hidden",
  },
  text2Typo: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_300,
    textAlign: "left",
    
  },
  kgPosition: {
    marginLeft: -15.5,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  infoChildLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  ageTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
    marginTop: -12.5,
    
  },
  textTypo: {
    marginTop: 4.5,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_400,
        fontWeight: "500",
  },
  agePosition: {
    marginLeft: -10.5,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  topFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  topPosition: {
    marginLeft: -195,
    left: "50%",
    width: 390,
    position: "absolute",
  },
  navbarChild: {
    top: 0,
    height: 72,
    width: 390,
    left: 0,
    position: "absolute",
  },
  apps1Icon: {
    marginTop: -12,
    marginLeft: -12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  home: {
    left: 16,
  },
  profileIcon: {
    left: 297,
  },
  statusIcon: {
    left: 203,
  },
  activityIcon: {
    left: 110,
  },
  navbar1: {
    top: 34,
    height: 72,
    width: 390,
    left: 0,
    position: "absolute",
  },
  go: {
    marginTop: -8,
    marginLeft: -16,
    fontSize: 24,
    color: Color.colorWhite,
    
    textAlign: "left",
    left: "50%",
    top: "50%",
  },
  goWrapper: {
    marginLeft: -34,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 7,
    elevation: 7,
    borderRadius: 36,
    width: 70,
    height: 70,
    shadowOpacity: 1,
    shadowOffset: {
      width: -1,
      height: -1,
    },
    backgroundColor: Color.colorSlateblue,
    left: "50%",
    position: "absolute",
  },
  navbar: {
    top: 738,
    height: 106,
    width: 390,
    left: 0,
    position: "absolute",
  },
  walkIcon: {
    top: 6,
    left: 6,
    width: 30,
    borderRadius: Border.br_9xs,
    height: 30,
    position: "absolute",
  },
  calories1: {
    marginLeft: -23.5,
    fontSize: FontSize.size_smi,
    top: 17,
    textAlign: "left",
    position: "absolute",
    left: "50%",
  },
  kcal: {
    bottom: 32,
    left: 7,
  },
  text: {
    bottom: 7,
    fontSize: FontSize.size_base,
    left: 7,
    textAlign: "left",
    position: "absolute",
  },
  calories: {
    top: 540,
    height: 123,
    left: 203,
  },
  heart1: {
    marginLeft: -16.5,
    fontSize: FontSize.size_smi,
    top: 17,
    textAlign: "left",
    position: "absolute",
    left: "50%",
  },
  heartChild: {
    marginTop: -19,
    left: 12,
    height: 37,
    top: "50%",
    position: "absolute",
  },
  heartItem: {
    left: 24,
  },
  heartInner: {
    marginTop: -34,
    left: 48,
    height: 67,
    top: "50%",
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -23,
    left: 71,
    height: 46,
    top: "50%",
    position: "absolute",
  },
  heartChild1: {
    marginTop: -40,
    left: 96,
    height: 80,
    top: "50%",
    position: "absolute",
  },
  heartChild2: {
    marginTop: -45,
    left: 121,
    height: 89,
    top: "50%",
    position: "absolute",
  },
  heartChild3: {
    marginTop: -21,
    left: 144,
    height: 42,
    top: "50%",
    position: "absolute",
  },
  heartChild4: {
    left: 36,
    height: 34,
  },
  heartChild5: {
    left: 60,
  },
  heartChild6: {
    marginTop: -35,
    left: 83,
    height: 69,
    top: "50%",
    position: "absolute",
  },
  heartChild7: {
    left: 108,
  },
  heartChild8: {
    left: 132,
  },
  heartChild9: {
    left: 157,
    height: 33,
  },
  heart: {
    top: 455,
    height: 208,
    left: 16,
  },
  circleIcon: {
    top: 66,
    left: 21,
    width: 130,
    height: 130,
    position: "absolute",
  },
  walk1: {
    marginLeft: -14.5,
    fontSize: FontSize.size_smi,
    top: 17,
    textAlign: "left",
    position: "absolute",
    left: "50%",
  },
  steps: {
    marginLeft: -13.5,
    top: 111,
    left: "50%",
  },
  text2: {
    marginLeft: -22.5,
    top: 132,
    left: "50%",
    position: "absolute",
  },
  walk: {
    height: 208,
    left: 203,
  },
  sleep1: {
    color: Color.colorGray_300,
    
    fontSize: FontSize.size_smi,
    top: 17,
  },
  sleep: {
    height: 123,
    left: 16,
  },
  today: {
    marginTop: -143,
    fontSize: 15,
    color: Color.colorGray_400,
        fontWeight: "500",
    marginLeft: -177,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  avatarIcon: {
    top: 7,
    left: 11,
    borderRadius: 25,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  choudaryAoun: {
    fontSize: FontSize.size_sm,
    left: 63,
        fontWeight: "500",
    color: Color.colorGray_300,
    top: 17,
    textAlign: "left",
    position: "absolute",
  },
  choudaryaoun121gmailcom: {
    top: 33,
    color: "#c2c1c1",
    left: 63,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    
    position: "absolute",
  },
  infoChild: {
    marginLeft: -157,
    top: 57,
    width: 315,
    left: "50%",
  },
  weight: {
    marginLeft: -18.5,
    textAlign: "left",
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  kg: {
    marginLeft: -15.5,
    textAlign: "left",
    left: "50%",
    position: "absolute",
    top: "50%",
  },
  weightParent: {
    height: 43,
    width: 101,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    shadowColor: "rgba(0, 0, 0, 0.13)",
    elevation: 15,
    shadowRadius: 15,
    shadowOpacity: 1,
    shadowOffset: {
      width: -1,
      height: -1,
    },
    overflow: "hidden",
  },
  height: {
    marginLeft: -17.5,
    textAlign: "left",
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  text4: {
    marginTop: 4.5,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_400,
        fontWeight: "500",
  },
  parentShadowBox: {
    marginLeft: 20,
    height: 43,
    width: 101,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    shadowColor: "rgba(0, 0, 0, 0.13)",
    elevation: 15,
    shadowRadius: 15,
    shadowOpacity: 1,
    shadowOffset: {
      width: -1,
      height: -1,
    },
    overflow: "hidden",
  },
  age: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_xs,
    marginTop: -12.5,
    
  },
  text5: {
    marginLeft: -7.5,
    textAlign: "left",
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  totalCalcutaions: {
    top: 67,
    paddingHorizontal: 6,
    paddingVertical: 4,
    flexDirection: "row",
    marginLeft: -177,
    left: "50%",
    position: "absolute",
  },
  menuDotsVertical1Icon: {
    left: 327,
    top: 17,
    position: "absolute",
  },
  info: {
    marginLeft: -179,
    top: 116,
    width: 358,
    height: 124,
    elevation: 15,
    shadowRadius: 15,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOpacity: 1,
    shadowOffset: {
      width: -1,
      height: -1,
    },
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  bell11: {
    width: 31,
  },
  top: {
    top: 37,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowRadius: 9,
    elevation: 9,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginLeft: -195,
    left: "50%",
    width: 390,
    position: "absolute",
    backgroundColor: Color.colorWhite,
    justifyContent: "space-between",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: -1,
      height: -1,
    },
  },
  signalIcon: {
    height: "82.94%",
    width: "16.72%",
    top: "0%",
    right: "0%",
    bottom: "17.06%",
    left: "83.28%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text6: {
    top: "5.88%",
    left: "0%",
        color: Color.colorWhitesmoke_200,
    fontSize: FontSize.size_smi,
  },
  top1: {
    width: 340,
    height: 17,
  },
  icons: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_14xl,
    paddingVertical: Padding.p_3xs,
  },
  statusBar: {
    paddingVertical: 0,
    backgroundColor: Color.colorSlateblue,
    top: 0,
    overflow: "hidden",
  },
  personalInfo: {
    backgroundColor: "#faf9ff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});