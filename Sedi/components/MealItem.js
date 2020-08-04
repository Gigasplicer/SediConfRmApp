import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.test}>
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground 
                        source ={props.image}
                        //source={{uri: props.image}} 
                        style={styles.bgImage}
                        >
                        <Text style={styles.title} numberOfLines={1} >{props.title}</Text>
                    </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        {/* <Text>{props.duration}m</Text> */}
                        <Text>Hue: {props.complexity.toUpperCase()}</Text>
                        <Text>Control: {props.affordability.toUpperCase()}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },
    test:{
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    mealItem: {
        height: 200,
        width: '100%',
        //paddingHorizontal: 5,
        backgroundColor: 'grey',
        borderRadius: 20,
        overflow: 'hidden',
        
    },
    mealHeader: {
        height: '85%',

    },
    bgImage:{
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        
    },
    title:{
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 10,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    mealDetail:
    {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',

    },
});

export default MealItem;