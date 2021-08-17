import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function ButtonSolicitar({ size,focused }){
    return(
        <View style={[styles.container, {backgroundColor: focused? '#7B2DCD' : '#8337D4'}]}>
            <Ionicons
                name="add-circle-outline"
                color={focused ? '#FFF' : '#8A8A8A'}
                size={size}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:60,
        height:60,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,

        backgroundColor:'#7B2DCD'        
    }
})