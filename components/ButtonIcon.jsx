import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function ButtonIcon({ onPress, style, ...rest }) {
    return (
        <Pressable style={styles.box} onPress={onPress}>
            <Ionicons size={30} style={style} {...rest} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    box: {
        borderRadius: 8,
        backgroundColor: '#a43333',
        padding: 16,
    }
})