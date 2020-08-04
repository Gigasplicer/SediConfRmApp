import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors'

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Colors.primaryColor}
                value={props.state}
                onValueChange={props.onChange} />
        </View>
    )
}

const FiltersScreen = props => {
    const {navigation} = props;
    const [glutenFree, setGlutenFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const [lactoseFree, setLactoseFree] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters ={
            glutenFree1: glutenFree,
            lactoseFree1: lactoseFree,
            vegan1: vegan,
            vegetarian1: vegetarian,
        }
        Alert.alert('Manual Override Set Successfully', '', [{ text: 'Okay', style: 'cancel' }]);
        console.log(appliedFilters)
    },[glutenFree, lactoseFree, vegan, vegetarian]);
    
    useEffect(() =>{// gets re run whenever the components change (saveFilters).
        props.navigation.setParams({save: saveFilters});

    }, [saveFilters]);//you need to include the depencencies

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Manual Override Off/On</Text>
            <FilterSwitch
                label='Sedi Conference Room'
                state={glutenFree}
                onChange={newValue => setGlutenFree(newValue)} />
            <FilterSwitch
                label='Bobs office'
                state={vegan}
                onChange={newValue => setVegan(newValue)} />
            <FilterSwitch
                label='Sedi A/V Office'
                state={vegetarian}
                onChange={newValue => setVegetarian(newValue)} />
            <FilterSwitch
                label='Welding Department'
                state={lactoseFree}
                onChange={newValue => setLactoseFree(newValue)} />
        </View>
    );
};

FiltersScreen.navigationOptions = {
    headerTitle: 'Filtered Meals'
}
FiltersScreen.navigationOptions = navData => {//if you make this a function..by adding navData in this case. It allowas you to pass the navigation component into the function. allowing you to 'toggledrawer'
    return {
        headerTitle: 'Override',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' color='white' onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Save'
                iconName='ios-save'
                color='green' onPress={navData.navigation.getParam('save')}
                     //navData.navigation.toggleDrawer();
                 />
        </HeaderButtons>,
    }
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    },
});

export default FiltersScreen;


