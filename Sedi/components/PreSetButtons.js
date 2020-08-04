import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors'
const PreSetButton = props => {
    return (
        <TouchableOpacity  onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )

};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        //paddingVertical: 1,
        borderRadius: 5,
        paddingHorizontal: 20,
        //elevation: 1,
        color: 'green'


    },
    text: {
        color: 'black',
        //fontFamily: 'open-sans',
        fontSize: 20,

    },
});

export default PreSetButton;