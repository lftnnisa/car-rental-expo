import React from 'react'
import { Stack } from 'expo-router'

export default function LisCarLayaout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="details/[id]" />

        </Stack>
    )
}