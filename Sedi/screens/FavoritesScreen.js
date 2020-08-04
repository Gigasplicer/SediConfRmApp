import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux'

const FavoritesScreen = props => {

    
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    //const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        (<MealList listData={favMeals} navigation={props.navigation}/>)
    );
};

FavoritesScreen.navigationOptions = navData => {//if you make this a function..by adding navData in this case. It allowas you to pass the navigation component into the function. allowing you to 'toggledrawer'
    return {
        headerTitle: 'Saved Locations',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' color='white' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>

    }
};
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FavoritesScreen;


