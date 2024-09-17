import * as React from "react";
import { Image } from "expo-image";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Padding,FontSize,Color } from "./LoginScr/GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import SyncStorge from 'sync-storage'
const CreateAnAccount = () => {
  const nav = useNavigation()
  const [message,setMessage] = React.useState('')
  const [username, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const onSubmitHandler = () => {
    const data = {
        username: username,
        password:password
    };

    

    fetch('http://192.168.137.1:8080/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData)
          
          setMessage(responseData['message'])
          if (!responseData['success']) {
            Alert.alert(responseData['message'])
          }
          if (responseData['success']){
            SyncStorge.set('permission',responseData['permissions'])
            SyncStorge.set('user_id',responseData['id'])
            SyncStorge.set('token',responseData['token'])
            console.log(responseData)
            if (responseData['permissions'][0] === "CAN_DO_WORKER_ROLE") {
              nav.navigate("WorkerNav")
            } 
            if (responseData['permissions'][0] === "CAN_DO_CHECKER_ROLE") {
              nav.navigate("Checknav")
            } 
            if (responseData['permissions'][0] === "CAN_DO_ADMIN_ROLE") {
              nav.navigate('Adminnav')
            } 
            if (responseData['permissions'][0] === "CAN_DO_OWNER_ROLE") {
              Alert.alert("Owner")
            } 
            if (responseData['permissions'][0] === "CAN_DO_MINE_ROLE") {
              Alert.alert("Mine")
            } 
                  
          }
        })
        .catch(error => {
            console.log(error);
        });
};

  return (
    <LinearGradient
      style={styles.createAnAccount}
      locations={[0, 1]}
      colors={["#036bb9", "#3b5998"]}
    >
      <Image
        style={[styles.createAnAccountChild, styles.createPosition]}
        contentFit="cover"
        source={require("./LoginScr/loginassets/rectangle-17.png")}
      />
      <Image
        style={[styles.createAnAccountItem, styles.createPosition]}
        contentFit="cover"
        source={require("./LoginScr/loginassets/rectangle-18.png")}
      />
      
      <Pressable onPress={onSubmitHandler}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.frameShadowBox]} />
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </View>
      </Pressable>
      
      <View style={styles.welcomeParent}>
        <Text style={[styles.welcome, styles.welcomeTypo]}>Hush Kelibsiz!</Text>
        <Text style={[styles.bySigningInContainer, styles.welcomeTypo]}>
          <Text
            style={styles.bySigningIn}
          >{"O`zbekiston Lokomotive Deposining "}</Text>
          <Text style={styles.bySigningIn}>markaziy dasturiga</Text>
          
        </Text>
      </View>
      <Pressable onPress={() => nav.navigate('ResetPassword')}>
        <Text style={[styles.forgetPassword, styles.loginTypo]}>
          Parolimni unutdim
        </Text>
      </Pressable>
      
      <Image
        style={styles.createAnAccountInner}
        contentFit="cover"
        source={require("./LoginScr/loginassets/rectangle-10.png")}
      />
     
      
      <Text style={[styles.loginWitTouch, styles.loginTypo]}>
       Tizimiga kirish uchun Login tugmasini bosing
      </Text>
      <View style={[styles.rectangleContainer, styles.frameLayout]}>
        
        <TextInput placeholder="   Sizning telefon raqamingiz" value={username} onChangeText={setUserName} autoCorrect={false} autoCapitalize='none'  
         style={[styles.emailAddress, styles.passwordTypo,styles.frameInner, styles.frameLayout]} />
         
        <Image
          style={[styles.mailIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("./LoginScr/loginassets/mail.png")}
        />
      </View>
      <View style={[styles.frameView, styles.frameLayout]}>
       <TextInput placeholder="   Sizning parolingiz" autoCorrect={false} autoCapitalize='none' onChangeText={setPassword}  
         style={[styles.emailAddress, styles.passwordTypo,styles.frameInner, styles.frameLayout]} />
        <Image
          style={[styles.lockIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("./LoginScr/loginassets/lock.png")}
        />
      </View>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("./LoginScr/loginassets/rectangle-19.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  createPosition: {
    width: 374,
    left:7,
    position: "absolute",

  },
  rectangleLayout: {
    height: 45,
    width: 151,
    top: 601,
    position: "absolute",
    left:'31%',
  },
  frameShadowBox: {
    borderRadius: Border.br_8xl,
    elevation: 4,
    shadowRadius: 4,
    height: 45,
    width: 151,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  loginTypo: {
    
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frameBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  welcomeTypo: {
    textAlign: "center",
    
  },
  iconLayout1: {
    height: 39,
    width: 39,
    overflow: "hidden",
  },
  frameLayout: {
    height: 47,
    width: 312,
    left:17,
    position: "absolute",
    
  },
  passwordTypo: {
    color: Color.colorSilver,
    fontSize: FontSize.size_mini,
    top: 12,
    
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  createAnAccountChild: {
    top: 35,
    height: 558,
  },
  createAnAccountItem: {
    top: 430,
    height: 419,
  },
  orConnectWith: {
    
    color: "#747070",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    width: 104,
    position: "absolute",
  },
  orConnectWithWrapper: {
    top: 784,
    left: 162,
    height: 20,
    width: 104,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorSteelblue,
    left: 0,
    elevation: 4,
    shadowRadius: 4,
    top: 0,
  },
  login: {
    color: Color.colorWhite,
    width: 54,
    top: 13,
    left: 54,
  },
  rectangleParent: {
    left: 54,
  },
  frameItem: {
    borderColor: Color.colorSteelblue,
    borderRadius: Border.br_8xl,
    elevation: 4,
    shadowRadius: 4,
    height: 45,
    width: 151,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  register: {
    left: 49,
    width: 62,
    color: Color.colorCornflowerblue,
    top: 13,
  },
  rectangleGroup: {
    left: 210,
    borderRadius: 25,
    backgroundColor: Color.colorWhite,
  },
  welcome: {
    fontSize: 21,
    color: "#000",
    width: 242,
    height: 35,
  },
  bySigningIn: {
    color: Color.colorDimgray_100,
  },
  termAndPrivacy: {
    color: Color.colorSteelblue,
  },
  y: {
    color: Color.colorCornflowerblue,
  },
  bySigningInContainer: {
    fontSize: 13,
    lineHeight: 29,
    width: 244,
    height: 66,
  },
  welcomeParent: {
    top: 212,
    left: 83,
    position: "absolute",
  },
  forgetPassword: {
    top: 540,
    left: 220,
    width: 140,
    color: Color.colorSteelblue,
  },
  rememberPassword: {
    left: 35,
    width: 157,
    color: Color.colorDimgray_100,
    top: 4,
    

  },
  groupChild: {
    top: 4,
    borderRadius: Border.br_11xs,
    height: 21,
    width: 24,
    left: 0,
    position: "absolute",
  },
  rememberPasswordParent: {
    top: 455,
    left: 55,
    width: 191,
    height: 25,
    position: "absolute",
  },
  createAnAccountInner: {
    top: 1,
    left: 537,
    width: 414,
    height: 895,
    position: "absolute",
  },
  instagram1Icon: {
    marginLeft: 18,
  },
  facebook1Parent: {
    top: 799,
    left: 98,
    flexDirection: "row",
    padding: 11,
    position: "absolute",
  },
  frameIcon: {
    top: 701,
    left: 177,
    borderRadius: 14,
    width: 69,
    height: 72,
    position: "absolute",
  },
  loginWitTouch: {
    top: 660,
    left: 50,
    width: 290,
    textAlign:'center',
    alignItems:'center',
    color: Color.colorDimgray_100,
  },
  frameInner: {
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorWhitesmoke,
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  emailAddress: {
    left: 13,
  },
  mailIcon: {
    left: 276,
    top: 13,
  },
  rectangleContainer: {
    top: 316,
    left: 53,
    width: 312,
  },
  password: {
    left: 18,
  },
  lockIcon: {
    top: 11,
    left: 275,
  },
  frameView: {
    top: 385,
    left: 53,
    width: 312,
  },
  rectangleIcon: {
    top: 46,
    left: 26,
    borderTopLeftRadius: Border.br_14xl,
    borderTopRightRadius: Border.br_14xl,
    width: 365,
    height: 147,
    position: "absolute",
  },
  createAnAccount: {
    elevation: 23,
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default CreateAnAccount;
