// import * as React from "react";
// import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
// import { Image } from "expo-image";
// import { Border, Color, FontSize} from "../../GlobalStyles";
// import { useNavigation } from "@react-navigation/native";
// const ResetPassword = () => {
//   const nav = useNavigation()
//   return (
//     <View style={styles.resetPasswordPhone}>
//       <View style={[styles.homeIndicator, styles.homeLayout1]}>
//         <View style={[styles.homeIndicatorChild, styles.topPosition]} />
//         <View style={[styles.homeIndicator1, styles.homeLayout]} />
//       </View>
      
//       <View style={[styles.button, styles.inputLayout]}>
//         <View style={[styles.buttonChild, styles.keyLightPosition]} />
//         <Text style={styles.resetPassword}>Parolimni o`zgartirish</Text>
//       </View>
      
//       <View style={[styles.rectangleContainer, styles.frameLayout]}>
        
//         <TextInput placeholder="Sizning telefon raqamingiz"
//          style={[styles.emailAddress, styles.passwordTypo,styles.frameInner, styles.frameLayout]} />
         
//         <Image
//           style={[styles.mailIcon, styles.iconLayout]}
//           contentFit="cover"
//           source={require("./LoginScr/loginassets/mail.png")}
//         />
//       </View>
      
//       <View style={[styles.text1, styles.tabPosition]}>
//         <Text style={[styles.enterYourEmail, styles.emailClr]}>
//           Telefon raqmingizni kiriting va biz sizga yangi parol yasab beramiz!
//         </Text>
//         <Text style={[styles.forgotYourPassword, styles.textFlexBox]}>
//           Parolingizni Unutdingizmi?
//         </Text>
//       </View>
//       <View style={[styles.topBar, styles.topPosition]}>
//         <View style={styles.keyLightPosition} />
//         <Pressable onPress={() => nav.navigate('Login')}>
//           <Image
//             style={styles.buttonIcon}
//             contentFit="cover"
//             source={require("../../assets/button1.png")}
//           />
//         </Pressable>
//         <View style={[styles.topBar1, styles.topBar1Layout]}>
//           <View
//             style={[styles.iphoneXstatusBarsstatusBa, styles.topBar1Layout]}
//           >      
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   rectangleContainer: {
//     top: 316,
//     left: 53,
//     width: 312,
//   },
//   frameLayout: {
//     height: 47,
//     width: 312,
//     left:17,
//     position: "absolute",
    
//   },
//   frameInner: {
//     borderRadius: 14,
//     backgroundColor: Color.colorWhitesmoke,
//     borderColor: Color.colorLightgray,
//     borderWidth: 1,
//     borderStyle: "solid",
//     left: 0,
//     top: 0,
//   },
//   passwordTypo: {
//     color: Color.colorSilver,
//     fontSize: FontSize.size_mini,
//     top: 12,
//     textAlign: "left",
//     position: "absolute",
//   },
//   frameLayout: {
//     height: 47,
//     width: 312,
//     left:17,
//     position: "absolute",
    
//   },
//   homeLayout1: {
//     height: 36,
//     width: 375,
//     position: "absolute",
//   },
//   topPosition: {
//     top: 0,
//     left: 0,
//   },
//   homeLayout: {
//     height: 5,
//     width: 134,
//     borderRadius: Border.br_81xl,
//     left: "50%",
//     bottom: 8,
//     position: "absolute",
//   },
//   topBarLayout: {
//     width: 375,
//     position: "absolute",
//   },
//   viewPosition: {
//     bottom: "21.24%",
//     top: "62.55%",
//     height: "16.22%",
//     position: "absolute",
//   },
//   iconLayout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   labelTypo: {
//     textAlign: "center",
//     color: Color.colorGray_300,
    
//     lineHeight: 21,
//     fontSize: FontSize.size_base,
//     top: "26.19%",
//     letterSpacing: 0,
//     left: 0,
//     position: "absolute",
//   },
//   shiftPosition: {
//     bottom: "42.08%",
//     top: "41.7%",
//     width: "11.38%",
//     height: "16.22%",
//     position: "absolute",
//   },
//   symbolTypo: {
//     letterSpacing: -1,
//     fontSize: FontSize.size_3xl_5,
//     marginTop: -13,
//     top: "50%",
//     textAlign: "center",
//     color: Color.colorGray_300,
    
//     position: "absolute",
//   },
//   mPosition: {
//     width: "8.67%",
//     bottom: "42.08%",
//     top: "41.7%",
//     height: "16.22%",
//     position: "absolute",
//   },
//   nPosition: {
//     left: "66.12%",
//     right: "25.2%",
//   },
//   bPosition: {
//     left: "55.83%",
//     right: "35.5%",
//   },
//   vPosition: {
//     left: "45.8%",
//     right: "45.53%",
//   },
//   cPosition: {
//     left: "35.5%",
//     right: "55.83%",
//   },
//   xPosition: {
//     left: "25.47%",
//     right: "65.85%",
//   },
//   zPosition: {
//     left: "15.18%",
//     right: "76.15%",
//   },
//   lPosition: {
//     bottom: "62.93%",
//     top: "20.85%",
//     width: "8.67%",
//     height: "16.22%",
//     position: "absolute",
//   },
//   pPosition: {
//     bottom: "83.78%",
//     width: "8.67%",
//     top: "0%",
//     height: "16.22%",
//     position: "absolute",
//   },
//   inputLayout: {
//     height: 56,
//     width: 327,
//     left: 24,
//     position: "absolute",
//   },
//   keyLightPosition: {
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
//     left: "0%",
//     right: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   borderBorder: {
//     borderWidth: 1,
//     borderStyle: "solid",
//   },
//   textFlexBox: {
//     textAlign: "left",
//     position: "absolute",
//   },
//   tabPosition: {
//     width: 327,
//     left: 24,
//     position: "absolute",
//   },
//   roundedPosition: {
//     borderRadius: Border.br_10xl,
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
//     left: "0%",
//     right: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   emailPosition: {
//     bottom: "7.84%",
//     top: "7.84%",
//     height: "84.31%",
//     position: "absolute",
//   },
//   emailClr: {
//     color: Color.greyscaleGrey400,
//     textAlign: "left",
//     position: "absolute",
//   },
//   email1Typo: {
//     lineHeight: 20,
//     top: "27.91%",
//     fontSize: FontSize.bodyMediumRegular_size,
//     m,
//     fontWeight: "500",
//   },
//   topBar1Layout: {
//     height: 44,
//     width: 375,
//     position: "absolute",
//   },
//   timeLayout: {
//     width: 54,
//     position: "absolute",
//   },
//   homeIndicatorChild: {
//     height: 36,
//     width: 375,
//     position: "absolute",
//   },
//   homeIndicator1: {
//     marginLeft: -67.5,
//     backgroundColor: Color.colorDarkslategray_200,
//   },
//   homeIndicator: {
//     top: 776,
//     left: 0,
//   },
//   homeIndicator2: {
//     marginLeft: -66.5,
//     backgroundColor: Color.colorGray_300,
//   },
//   homeIndicatorLight: {
//     right: -1,
//     left: 1,
//     height: 34,
//     bottom: 0,
//     position: "absolute",
//   },
//   dictationIcon: {
//     height: 25,
//     width: 15,
//   },
//   emojiIcon: {
//     width: 27,
//     height: 27,
//   },
//   rectangleIcon: {
//     borderRadius: Border.br_8xs_6,
//     maxWidth: "100%",
//     right: 0,
//     bottom: 0,
//     top: 0,
//     left: 0,
//   },
//   label: {
//     width: 88,
//   },
//   return: {
//     width: "23.85%",
//     left: "76.15%",
//     right: "0%",
//   },
//   label1: {
//     width: 182,
//   },
//   space: {
//     width: "49.32%",
//     right: "25.47%",
//     left: "25.2%",
//   },
//   label2: {
//     width: 87,
//   },
//   view: {
//     width: "23.58%",
//     right: "76.42%",
//     left: "0%",
//   },
//   label3: {
//     width: 42,
//   },
//   deleteButtonIcon: {
//     width: 23,
//     height: 17,
//   },
//   delete: {
//     left: "88.62%",
//     right: "0%",
//   },
//   rectangleShadowBox: {
//     backgroundColor: Color.colorGray_100,
//     shadowOpacity: 1,
//     elevation: 0,
//     shadowRadius: 0,
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowColor: "#898a8d",
//     borderRadius: Border.br_8xs_6,
//     right: 0,
//     bottom: 0,
//     top: 0,
//     left: 0,
//     position: "absolute",
//   },
//   symbol: {
//     left: "48.1%",
//   },
//   shiftIcon: {
//     height: "39.29%",
//     width: "45%",
//     top: "29.05%",
//     right: "27.14%",
//     bottom: "31.67%",
//     left: "27.86%",
//   },
//   shift: {
//     right: "88.62%",
//     left: "0%",
//   },
//   symbol1: {
//     left: "18.75%",
//   },
//   m: {
//     right: "14.91%",
//     left: "76.42%",
//   },
//   symbol2: {
//     left: "25%",
//   },
//   n: {
//     width: "8.67%",
//     bottom: "42.08%",
//     top: "41.7%",
//     height: "16.22%",
//     position: "absolute",
//   },
//   symbol3: {
//     left: "28.13%",
//   },
//   b: {
//     width: "8.67%",
//     bottom: "42.08%",
//     top: "41.7%",
//     height: "16.22%",
//     position: "absolute",
//   },
//   v: {
//     width: "8.67%",
//     bottom: "42.08%",
//     top: "41.7%",
//     height: "16.22%",
//     position: "absolute",
//   },
//   c: {
//     width: "8.67%",
//     bottom: "42.08%",
//     top: "41.7%",
//     height: "16.22%",
//     position: "absolute",
//   },
//   x: {
//     width: "8.67%",
//     bottom: "42.08%",
//     top: "41.7%",
//     height: "16.22%",
//     position: "absolute",
//   },
//   z: {
//     width: "8.67%",
//     bottom: "42.08%",
//     top: "41.7%",
//     height: "16.22%",
//     position: "absolute",
//   },
//   symbol8: {
//     left: "31.25%",
//   },
//   l: {
//     right: "4.88%",
//     left: "86.45%",
//   },
//   k: {
//     right: "15.18%",
//     left: "76.15%",
//   },
//   j: {
//     left: "66.12%",
//     right: "25.2%",
//   },
//   h: {
//     left: "55.83%",
//     right: "35.5%",
//   },
//   g: {
//     left: "45.8%",
//     right: "45.53%",
//   },
//   f: {
//     left: "35.5%",
//     right: "55.83%",
//   },
//   d: {
//     left: "25.47%",
//     right: "65.85%",
//   },
//   s: {
//     left: "15.18%",
//     right: "76.15%",
//   },
//   a: {
//     right: "86.18%",
//     left: "5.15%",
//   },
//   p: {
//     left: "91.33%",
//     right: "0%",
//   },
//   symbol18: {
//     left: "21.88%",
//   },
//   o: {
//     right: "10.03%",
//     left: "81.3%",
//   },
//   symbol19: {
//     left: "40.63%",
//   },
//   i: {
//     right: "20.33%",
//     left: "71%",
//   },
//   u: {
//     right: "30.35%",
//     left: "60.98%",
//   },
//   y: {
//     right: "40.65%",
//     left: "50.68%",
//   },
//   t: {
//     right: "50.68%",
//     left: "40.65%",
//   },
//   r: {
//     right: "60.98%",
//     left: "30.35%",
//   },
//   e: {
//     right: "71%",
//     left: "20.33%",
//   },
//   symbol25: {
//     left: "15.63%",
//   },
//   w: {
//     right: "81.3%",
//     left: "10.03%",
//   },
//   q: {
//     right: "91.33%",
//     left: "0%",
//   },
//   keys: {
//     height: "89%",
//     width: "98.4%",
//     top: "2.75%",
//     right: "0.8%",
//     bottom: "8.25%",
//     left: "0.8%",
//     position: "absolute",
//   },
//   keyboard: {
//     top: 521,
//     backgroundColor: Color.colorLightgray,
//     height: 291,
//     left: 0,
//   },
//   buttonChild: {
//     borderRadius: Border.br_13xl,
//     backgroundColor: Color.colorDarkcyan,
//   },
//   resetPassword: {
//     left: "27%",
//     old,
//     color: Color.otherColorsWhite,
//     fontWeight: "600",
//     lineHeight: 24,
//     top: "28.57%",
//     textAlign: "center",
//     fontSize: FontSize.size_base,
//     position: "absolute",
//   },
//   button: {
//     top: 399,
//   },
//   roundedRectangle: {
//     borderRadius: 70,
//     borderColor: Color.colorGainsboro_100,
//     backgroundColor: Color.colorWhitesmoke,
//     borderWidth: 1,
//     borderStyle: "solid",
//     bottom: "0%",
//     top: "0%",
//     height: "100%",
//     left: "5%",
//     right: "0%",
//     position: "absolute",
//     width: "90%",
//   },
//   iconCall: {
//     height: "42.86%",
//     width: "7.34%",
//     right: "98%",
//     bottom: "28.57%",
//     top: "28.57%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   text: {
//     left: "19.57%",
//     color: Color.greyscaleGrey900,
//     textAlign: "left",
//     m,
//     fontWeight: "500",
//     lineHeight: 24,
//     top: "28.57%",
//     fontSize: FontSize.size_base,
//   },
//   input: {
//     top: 311,
//   },
//   tabChild: {
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: Color.colorGainsboro_100,
//     backgroundColor: Color.colorWhitesmoke,
//   },
//   email1: {
//     left: "39.07%",
//     lineHeight: 20,
//     top: "27.91%",
//     fontSize: FontSize.bodyMediumRegular_size,
//     fontWeight: "500",
//   },
//   email: {
//     width: "46.18%",
//     right: "52.6%",
//     left: "1.22%",
//   },
//   roundedRectangle2: {
//     backgroundColor: Color.otherColorsWhite,
//     borderRadius: Border.br_10xl,
//   },
//   phone1: {
//     left: "37.5%",
//     color: Color.colorDarkcyan,
//     textAlign: "left",
//     position: "absolute",
//   },
//   phone: {
//     width: "46.48%",
//     right: "1.22%",
//     left: "52.29%",
//   },
//   tab: {
//     top: 236,
//     height: 51,
//   },
//   enterYourEmail: {
//     top: 40,
//     ar,
//     lineHeight: 24,
//     color: Color.greyscaleGrey400,
//     width: 327,
//     fontSize: FontSize.size_base,
//     left: 0,
//   },
//   forgotYourPassword: {
//     fontSize: FontSize.size_5xl,
//     lineHeight: 32,
//     fontWeight: "700",
    
//     color: Color.greyscaleGrey900,
//     textAlign: "left",
//     top: 0,
//     left: 0,
//   },
//   text1: {
//     top: 124,
//     height: 88,
//   },
//   buttonIcon: {
//     top: 52,
//     width: 40,
//     height: 40,
//     left: 24,
//     position: "absolute",
//   },
//   border: {
//     right: 2,
//     borderRadius: 3,
//     borderColor: Color.greyscaleGrey900,
//     width: 22,
//     opacity: 0.35,
//     height: 11,
//     borderWidth: 1,
//     borderStyle: "solid",
//     top: 0,
//     position: "absolute",
//   },
//   capIcon: {
//     top: 4,
//     width: 1,
//     height: 4,
//     opacity: 0.4,
//     right: 0,
//     position: "absolute",
//   },
//   capacity: {
//     top: 2,
//     right: 4,
//     borderRadius: 1,
//     backgroundColor: Color.greyscaleGrey900,
//     width: 18,
//     height: 7,
//     position: "absolute",
//   },
//   battery: {
//     top: 17,
//     right: 15,
//     width: 24,
//     height: 11,
//     position: "absolute",
//   },
//   wifiIcon: {
//     height: 11,
//     width: 15,
//   },
//   cellularConnectionIcon: {
//     width: 17,
//     height: 11,
//   },
//   text2: {
//     letterSpacing: 0,
//   },
//   time: {
//     marginTop: -7.5,
//     fontSize: FontSize.bodyMediumRegular_size,
//     width: 54,
//     color: Color.greyscaleGrey900,
//     fontWeight: "600",
//     top: "50%",
//     textAlign: "center",
    
//     left: 0,
//   },
//   timeStyle: {
//     top: 13,
//     left: 21,
//     height: 21,
//   },
//   iphoneXstatusBarsstatusBa: {
//     marginTop: -22,
//     marginLeft: -187.5,
//     top: "50%",
//     height: 44,
//     left: "50%",
//     overflow: "hidden",
//   },
//   topBar1: {
//     top: 0,
//     left: 0,
//   },
//   topBar: {
//     height: 100,
//     width: 375,
//     position: "absolute",
//   },
//   resetPasswordPhone: {
//     flex: 1,
//     height: 812,
//     overflow: "hidden",
//     width: "100%",
//     backgroundColor: Color.otherColorsWhite,
//     marginLeft:6,
//   },
// });

// export default ResetPassword;
import { View, Text } from 'react-native'
import React from 'react'

export default function ResetPassword() {
  return (
    <View>
      <Text>ResetPassword</Text>
    </View>
  )
}