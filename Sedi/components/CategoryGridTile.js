import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Image, TouchableNativeFeedbackComponent, ImageBackground} from 'react-native';

const CategoryGridTile = props =>{
return (
    <View style={styles.grid}>
    <TouchableNativeFeedback
    style={{flex: 1}}

    onPress={props.onSelect}>

        <View style={{...styles.container,...{backgroundColor: 'white'}}}>
        
        
            <ImageBackground
            source ={props.image}
            style={styles.bgImage}>
               
            </ImageBackground>
            <View style={styles.center}>
            <Text style={styles.text}>{props.title}</Text>
            </View>
            
            </View>
    </TouchableNativeFeedback>
    </View>
)};
const styles = StyleSheet.create({
    grid:
    {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 10,
    },
    container:{
        flex: 1,
        borderRadius: 10,


        //padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    bgImage:{
        height: '100%',
        width: '100%',
        //paddingRight: 20,
        //justifyContent: 'flex-end',
        
    },
    text:{
//fontFamily: 'open-sans-bold',

fontSize:15,

    },
    center:{
        //alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingHorizontal: 100,
    }

});
export default CategoryGridTile;