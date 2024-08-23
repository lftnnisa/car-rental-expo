import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';


export default function register() {
  return (
    <View>
      <Image
        source={require('@/assets/images/logo.png')}
        style={{
          margin: 23,
        }}
      />
      <Text style={styles.heading}>
        Sign Up
      </Text>

      <View style={styles.formContainer}>
        <Text style={styles.formLabel} >
          Name*
        </Text>
        <TextInput style={styles.formInput} placeholder='Full Name' />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formLabel} >
          Email*
        </Text>
        <TextInput style={styles.formInput} placeholder='liftaah@gmail.com' />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>
          Create Password*
        </Text>
        <TextInput style={styles.formInput} secureTextEntry={true} placeholder='6+ karakter' />
      </View>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.formButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        {/* <Button color='#3D7B3F' title="Sign Up" style={styles.signIn} /> */}
        <Text style={styles.textRegister}>Already have an account?<Link style={styles.linkRegister} href="./"> Sign In here</Link></Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 10,
    fontFamily: 'PoppinsBold',
  },
  formContainer: {
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 16,
    fontSize: 20,
    color: 'black',
    borderBlockColor: 'grey',
    fontFamily: 'PoppinsBold',
  },
  formLabel: {
    fontSize: 14,
    fontFamily: 'PoppinsBold',
  },
  formInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#0000001A',
  },
  formButton: {
    backgroundColor: '#3D7B3F',
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'PoppinsBold'
  },
  textRegister: {
    marginTop: 10,
    textAlign: 'center',
  },
  linkRegister: {
    color: '#0D28A6',
  }
})

