import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router';
import ModalPopup from '../../components/Modal';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
    await SecureStore.setItemAsync(key, value)
}

export default function Login() {

    const [modalVisible, setModalVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (name, text) => {
        setFormData({
            ...formData,
            [name]: text
        })
    }

    const handleSubmit = async () => {
        try {
            const request = await fetch('https://api-car-rental.binaracademy.org/customer/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                })
            })

            const response = await request.json()
            if (!request.ok) throw new Error(response.message || response.errors[0].message || "Something Went Wrong!")
            console.log(response)
            save("user", JSON.stringify(response))
            setModalVisible(true)
            setTimeout(() => {
                setModalVisible(false)
                router.navigate('../(tabs)');
            }, 3000);

        } catch (e) {
            setErrorMessage(e.message)
            setModalVisible(true)
            setTimeout(() => {
                setModalVisible(false)
                setErrorMessage(null)
            }, 3000);
        }
    }

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
                <Text style={styles.formLabel}>
                    Email*
                </Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={(text) => handleChange('email', text)}
                    placeholder='liftaah@gmail.com'
                    value={formData.email} // Mengikat nilai input dengan state
                />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formLabel}>
                    Password*
                </Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={(text) => handleChange('password', text)}
                    secureTextEntry={true}
                    placeholder='6+ karakter'
                    value={formData.password} // Mengikat nilai input dengan state
                />
            </View>
            <View style={styles.formContainer}>
                <TouchableOpacity style={styles.formButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <Text style={styles.textRegister}>
                    Don’t have an account? <Link style={styles.linkRegister} href="./register"> Sign Up for free</Link>
                </Text>
            </View>
            <ModalPopup visible={modalVisible}>
                <View style={styles.modalBackground}>
                    {errorMessage !== null ?
                        <>
                            <Ionicons color={'red'} size={48} name={'close-circle'} />
                            <Text style={styles.modalText}>{errorMessage}</Text>
                        </>
                        :
                        <>
                            <Ionicons color={'green'} size={48} name={'checkmark-circle'} />
                            <Text style={styles.modalText}>Login Successful!</Text>
                        </>
                    }
                </View>
            </ModalPopup>
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
    },
    modalBackground: {
        width: '80%',
        borderRadius: 12,
        padding: 30,
        backgroundColor: '#fff',
        elevation: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalText: {
        fontSize: 18,
        color: '#333',
        marginTop: 15,
        textAlign: 'center',
        fontFamily: 'Poppins'
    },
})
