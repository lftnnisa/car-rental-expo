import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { router } from "expo-router";
export default function profile() {
  return (
    <View style={styles.titleContainer}>

      <Text style={styles.textStyles}>Akun</Text>
      <View style={styles.img}>
        <Image
          source={require("../../assets/images/Allura - Park 1.png")}

        />
      </View>
      <View>
        <Text style={styles.textStyle}>Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di TMMIN Car Rental lebih mudah</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("../(auth)")}
      >
        <Text style={styles.signIn}>Register</Text>
      </TouchableOpacity>
    </View>


  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    padding: 20,
    marginTop: Constants.statusBarHeight,
  },
  img: {
    marginTop: 100,
    marginLeft: 20,
    width: 312,
    height: 192,
    alignItems: 'center',
    borderColor: '#000'
  },
  textStyle: {
    fontFamily: 'PoppinsBold', fontSize: 16, color: '#000', marginTop: 16, marginBottom: 16, marginTop: 16, textAlign: 'center'
  },
  textStyles: {
    fontFamily: 'PoppinsBold', fontSize: 16, color: '#000', marginTop: 16, marginBottom: 16, marginTop: 16,
  },
  button: {
    backgroundColor: "#3D7B3F",
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: 5,
    fontFamily: "PoppinsBold",
    marginLeft: 130,
    marginRight: 130,

  },
  signIn: {
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins",
  },


})