import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border,FontSize} from  "../../GlobalStyles";

export default function FlashScreen() {
  return (
    <View style={styles.splashScreen}>
      <View style={[styles.homeIndicator, styles.homeLayout]}>
        <View style={[styles.homeIndicatorChild, styles.homeLayout]} />
        <View style={[styles.homeIndicator1, styles.capacityBg]} />
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../../assets/train.png")}
        />
        <Text style={[styles.medics, styles.medicsPosition]}>O`zbekiston Lokomotive Depo</Text>
       
      </View>
      <View style={[styles.topBar, styles.topBarLayout]}>
        <View style={[styles.iphoneXstatusBarsstatusBa, styles.topBarLayout]}>
          <View style={[styles.rectangle, styles.medicsPosition]} />
         
          
          
          
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  homeLayout: {
    height: 36,
    width: 375,
    left: 0,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.otherColorsWhite,
    position: "absolute",
  },
  medicsPosition: {
    left: "0%",
    position: "absolute",
  },
  topBarLayout: {
    height: 44,
    width: 375,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  homeIndicatorChild: {
    top: 0,
  },
  homeIndicator1: {
    marginLeft: -67.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
  },
  homeIndicator: {
    top: 776,
  },
  vectorIcon: {
    height: "67.17%",
    width: "69.62%",
    bottom: "32.83%",
    maxWidth: "100%",
    maxHeight: "100%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  medics: {
    top: "88.36%",
    fontSize: 18,
    fontWeight: "700",
        textAlign: "center",
    color: Color.otherColorsWhite,
  },
  logo: {
    height: "23.74%",
    width: "80%",
    top: "38.18%",
    right: "25.33%",
    bottom: "38.08%",
    left: "20%",
    position: "absolute",
  },
  rectangle: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    width: "100%",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.otherColorsWhite,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
  },
  battery: {
    top: 17,
    right: 15,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  text: {
    letterSpacing: 0,
  },
  time: {
    marginTop: -7.5,
    fontSize: FontSize.bodyMediumRegular_size,
    fontWeight: "600",
    extAlign: "center",
    top: "50%",
    color: Color.otherColorsWhite,
    left: 0,
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
  topBar: {
    top: 0,
    left: 0,
  },
  splashScreen: {
    backgroundColor: Color.colorDarkcyan,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});