//this is the Company Screen
import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import CategoryMealsScreen from './CategoryMealsScreen';
import { CATEGORIES, MEALS } from '../data/dummy-data'
import Colors from '../constants/Colors'
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (<CategoryGridTile
            title={itemData.item.title}
            image={itemData.item.image}
            //image={itemData.item.image}
            color={itemData.item.color}
            onSelect={() => {
                console.log(itemData.item.title)
                props.navigation.navigate({
                    routeName: 'Meals',
                    params: {
                        categoryId: itemData.item.id
                    }
                });
            }} />
        )

    };
    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={1} />
    );
};

CategoriesScreen.navigationOptions = navData => {//if you make this a function..by adding navData in this case. It allowas you to pass the navigation component into the function. allowing you to 'toggledrawer'
    return {
        headerTitle: 'Client Management',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        //backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mealChoices: {
        //backgroundColor: Colors.banners,
        textAlign: 'center',
    },

});

export default CategoriesScreen;


