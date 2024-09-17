import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontSize}from "../../GlobalStyles";

const CreateNewPassword = () => {
  return (
    <View style={styles.createNewPassword}>
      
      <View style={[styles.button, styles.inputLayout]}>
        <View style={[styles.buttonChild, styles.keyLightPosition]} />
        <Text style={[styles.createPassword, styles.timeTypo]}>
          Create Password
        </Text>
      </View>
      <View style={styles.inputFields}>
        <View style={[styles.input, styles.inputLayout]}>
          <View style={[styles.roundedRectangle, styles.borderBorder]} />
          
          <Image
            style={[styles.iconPassword, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/icon--password.png")}
          />
          <Image
            style={[styles.iconEyeSlash, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/icon--eye-slash.png")}
          />
        </View>
        <View style={[styles.input1, styles.inputLayout]}>
          <View style={[styles.roundedRectangle, styles.borderBorder]} />
          <Text style={[styles.enterYourPassword, styles.createFlexBox]}>
            Confirm password
          </Text>
          <Image
            style={[styles.iconEyeSlash, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/icon--eye-slash.png")}
          />
          <Image
            style={[styles.iconPassword, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/icon--password.png")}
          />
        </View>
      </View>
      <View style={styles.text}>
        <Text style={[styles.createNewPassword1, styles.timeClr]}>
          Create New Password
        </Text>
        <Text style={[styles.createYourNew, styles.createFlexBox]}>
          Create your new password to login
        </Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  topBarPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  viewPosition: {
    bottom: "21.24%",
    top: "62.55%",
    height: "16.22%",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelTypo: {
    textAlign: "center",
    color: Color.colorGray_300,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: "26.19%",
    
    letterSpacing: 0,
    left: 0,
    position: "absolute",
  },
  shiftPosition: {
    bottom: "42.08%",
    top: "41.7%",
    width: "11.38%",
    height: "16.22%",
    position: "absolute",
  },
  keyLightPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  symbolTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    marginTop: -13,
    top: "50%",
    textAlign: "center",
    color: Color.colorGray_300,
    
    position: "absolute",
  },
  mPosition: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  nPosition: {
    left: "66.12%",
    right: "25.2%",
  },
  bPosition: {
    left: "55.83%",
    right: "35.5%",
  },
  vPosition: {
    left: "45.8%",
    right: "45.53%",
  },
  cPosition: {
    left: "35.5%",
    right: "55.83%",
  },
  xPosition: {
    left: "25.47%",
    right: "65.85%",
  },
  zPosition: {
    left: "15.18%",
    right: "76.15%",
  },
  lPosition: {
    bottom: "62.93%",
    top: "20.85%",
    width: "8.67%",
    height: "16.22%",
    position: "absolute",
  },
  pPosition: {
    bottom: "83.78%",
    width: "8.67%",
    top: "0%",
    height: "16.22%",
    position: "absolute",
  },
  inputLayout: {
    height: 56,
    width: 327,
    position: "absolute",
  },
  timeTypo: {
    fontWeight: "600",
    textAlign: "center",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  placeholderLayout: {
    height: 8,
    width: 8,
  },
  iconLayout: {
    bottom: "28.57%",
    width: "7.34%",
    height: "42.86%",
    top: "28.57%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  createFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  timeClr: {
    color: Color.greyscaleGrey900,
    left: 0,
  },
  topBar1Layout: {
    height: 44,
    width: 375,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_300,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeIndicatorLight: {
    right: -1,
    left: 1,
    height: 34,
    bottom: 0,
    position: "absolute",
  },
  dictationIcon: {
    height: 25,
    width: 15,
  },
  emojiIcon: {
    width: 27,
    height: 27,
  },
  rectangleIcon: {
    borderRadius: Border.br_8xs_6,
    maxWidth: "100%",
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  label: {
    width: 88,
  },
  return: {
    width: "23.85%",
    left: "76.15%",
    right: "0%",
  },
  label1: {
    width: 182,
  },
  space: {
    width: "49.32%",
    right: "25.47%",
    left: "25.2%",
  },
  label2: {
    width: 87,
  },
  view: {
    width: "23.58%",
    right: "76.42%",
    left: "0%",
  },
  label3: {
    width: 42,
  },
  keyLight: {
    position: "absolute",
  },
  deleteButtonIcon: {
    width: 23,
    height: 17,
  },
  delete: {
    left: "88.62%",
    right: "0%",
  },
  rectangleShadowBox: {
    backgroundColor: Color.colorGray_100,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    borderRadius: Border.br_8xs_6,
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  symbol: {
    left: "48.1%",
  },
  shiftIcon: {
    height: "39.29%",
    width: "45%",
    top: "29.05%",
    right: "27.14%",
    bottom: "31.67%",
    left: "27.86%",
  },
  shift: {
    right: "88.62%",
    left: "0%",
  },
  symbol1: {
    left: "18.75%",
  },
  m: {
    right: "14.91%",
    left: "76.42%",
  },
  symbol2: {
    left: "25%",
  },
  n: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol3: {
    left: "28.13%",
  },
  b: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  v: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  c: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  x: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  z: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol8: {
    left: "31.25%",
  },
  l: {
    right: "4.88%",
    left: "86.45%",
  },
  k: {
    right: "15.18%",
    left: "76.15%",
  },
  j: {
    left: "66.12%",
    right: "25.2%",
  },
  h: {
    left: "55.83%",
    right: "35.5%",
  },
  g: {
    left: "45.8%",
    right: "45.53%",
  },
  f: {
    left: "35.5%",
    right: "55.83%",
  },
  d: {
    left: "25.47%",
    right: "65.85%",
  },
  s: {
    left: "15.18%",
    right: "76.15%",
  },
  a: {
    right: "86.18%",
    left: "5.15%",
  },
  p: {
    left: "91.33%",
    right: "0%",
  },
  symbol18: {
    left: "21.88%",
  },
  o: {
    right: "10.03%",
    left: "81.3%",
  },
  symbol19: {
    left: "40.63%",
  },
  i: {
    right: "20.33%",
    left: "71%",
  },
  u: {
    right: "30.35%",
    left: "60.98%",
  },
  y: {
    right: "40.65%",
    left: "50.68%",
  },
  t: {
    right: "50.68%",
    left: "40.65%",
  },
  r: {
    right: "60.98%",
    left: "30.35%",
  },
  e: {
    right: "71%",
    left: "20.33%",
  },
  symbol25: {
    left: "15.63%",
  },
  w: {
    right: "81.3%",
    left: "10.03%",
  },
  q: {
    right: "91.33%",
    left: "0%",
  },
  keys: {
    height: "89%",
    width: "98.4%",
    top: "2.75%",
    right: "0.8%",
    bottom: "8.25%",
    left: "0.8%",
    position: "absolute",
  },
  keyboard: {
    top: 521,
    backgroundColor: Color.colorLightgray,
    height: 291,
  },
  buttonChild: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorDarkcyan,
    position: "absolute",
  },
  createPassword: {
    left: "29.66%",
    old,
    color: Color.otherColorsWhite,
    lineHeight: 24,
    fontWeight: "600",
    top: "28.57%",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  button: {
    top: 364,
    left: 24,
  },
  roundedRectangle: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorWhitesmoke,
    borderColor: Color.colorGainsboro_100,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  placeholderItem: {
    marginLeft: 4,
  },
  placeholder: {
    height: "14.29%",
    width: "28.13%",
    top: "42.86%",
    right: "52.29%",
    bottom: "42.86%",
    flexDirection: "row",
    left: "19.57%",
    position: "absolute",
  },
  iconPassword: {
    right: "85.32%",
    left: "7.34%",
  },
  iconEyeSlash: {
    right: "7.34%",
    left: "85.32%",
  },
  input: {
    top: 0,
    left: 0,
  },
  enterYourPassword: {
    color: Color.greyscaleGrey400,
    ar,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    left: "19.57%",
    top: "28.57%",
  },
  input1: {
    top: 72,
    left: 0,
  },
  inputFields: {
    top: 212,
    height: 128,
    width: 327,
    left: 24,
    position: "absolute",
  },
  createNewPassword1: {
    fontSize: FontSize.size_5xl,
    lineHeight: 32,
    fontWeight: "700",
    
    textAlign: "left",
    position: "absolute",
    top: 0,
  },
  createYourNew: {
    top: 40,
    color: Color.greyscaleGrey400,
    ar,
    textAlign: "left",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    width: 327,
    left: 0,
  },
  text: {
    top: 124,
    height: 64,
    width: 327,
    left: 24,
    position: "absolute",
  },
  buttonIcon: {
    top: 52,
    width: 40,
    height: 40,
    left: 24,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.greyscaleGrey900,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.greyscaleGrey900,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 15,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    height: 11,
    width: 15,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  text1: {
    letterSpacing: 0,
  },
  time: {
    marginTop: -7.5,
    fontSize: FontSize.bodyMediumRegular_size,
    color: Color.greyscaleGrey900,
    left: 0,
    fontWeight: "600",
    textAlign: "center",
    top: "50%",
    
    width: 54,
  },
  timeStyle: {
    top: 13,
    left: 21,
    height: 21,
  },
  iphoneXstatusBarsstatusBa: {
    marginTop: -22,
    marginLeft: -187.5,
    top: "50%",
    left: "50%",
    overflow: "hidden",
  },
  topBar1: {
    top: 0,
    left: 0,
  },
  topBar: {
    height: 100,
    top: 0,
  },
  createNewPassword: {
    backgroundColor: Color.otherColorsWhite,
    flex: 1,
    height: '100',
    overflow: "hidden",
    width: "100%",
  },
});

export default CreateNewPassword;
