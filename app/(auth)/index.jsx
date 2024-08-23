import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router';

export default function login(navigation) {
    return (
        <View>
            <Image
                source={require('@/assets/images/logo.png')}
                style={{
                    margin: 23,
                }}
            />
            <Text style={styles.heading}>
                Welcome Back!
            </Text>

            <View style={styles.formContainer}>
                <Text style={styles.formLabel} >
                    Email*
                </Text>
                <TextInput style={styles.formInput} placeholder='liftaah@gmail.com' />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formLabel}>
                    Password*
                </Text>
                <TextInput style={styles.formInput} secureTextEntry={true} placeholder='6+ karakter' />
            </View>
            <View style={styles.formContainer}>
                <TouchableOpacity style={styles.formButton} onPress={() => router.navigate('../(tabs)')}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                {/* <Button color='#3D7B3F' title="Sign In" style={styles.signIn} /> */}
                <Text style={styles.textRegister}>Don’t have an account? <Link style={styles.linkRegister} href="./register"> Sign Up for free</Link></Text>
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

