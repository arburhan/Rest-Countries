import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Country({ country }) {
    return (
        <View>
            <Image
                source={{ uri: country.flags.svg }}
                style={{ height: '250px', width: '300px' }
                } ></Image>
            <Text style={{ fontSize: '20px' }} >{country.name.common}</Text>
        </View>
    )
}
