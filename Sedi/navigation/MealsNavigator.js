import React from 'react';
import CateGoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import { Platform } from 'react-native';
//import FavoritesScreen from './screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
//import FiltersScreen from './screens/FiltersScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'; //import to add bottom tab navigator
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FiltersScreen from '../screens/FiltersScreen';

const MealsNavigator = createStackNavigator({
    Categories: CateGoriesScreen,
    Meals: {
        screen: CategoryMealsScreen,
    },
    Details: MealDetailScreen,
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            headerTitle: 'Screen',
        }
    });
const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    Details: MealDetailScreen,
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        //headerTitle: 'Scree!!',
    }
});

const tabScreenConfig =
{
    AllMeals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Clients',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-clipboard' size={23} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor,
        },
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Saved',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={23} color={tabInfo.tintColor} />
            },
            tabBarColor: '#044C84',
        },


    }
};

const MealsFavTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'black',
        shifting: true,
    })
    : createBottomTabNavigator(tabScreenConfig,
        {
            tabBarOptions: {
                //activeTintColor: 'pink',
                //showLabel: false,

            }

        });


const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
},
{
    navigationOptions: {
        drawerLabel: 'Manual Override'
    },
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    }}
    );

const MainNavigator = createDrawerNavigator({
    MealsFavs:{
         screen: MealsFavTabNavigator,
         navigationOptions:{
             drawerLabel: 'Clients'
         }},

    Filters: FiltersNavigator,
},{
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontSize: 20,
            //backgroundColor: 'grey'
        }
    }
});


export default createAppContainer(MainNavigator);
