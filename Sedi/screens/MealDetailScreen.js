//this is the configuration Screen

import React, { useEffect, useCallback, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, Slider, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';
import PreSetButtons from '../components/PreSetButtons'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const ListItems = props => {
    return (
        <View style={styles.coolList}><Text>{props.children}</Text></View>
    );
};

const MealDetailScreen = props => {

    const [lightUpdate, setLightUpdate] = useState([0,0,0,0,0,0,0,0,0,0,0,0])
    const allMeals = useSelector(state => state.meals.meals)
    const mealId = props.navigation.getParam('mealId')
    const favoriteSettings = useSelector(state =>
        state.meals.favoriteMeals.some(meal => meal.id === mealId));

    const selectedMeal = allMeals.find(meal => meal.id === mealId);

    const barHandler = () => {
        console.log(lightUpdate[0])
    }
    const submitHandler = () => {
        Alert.alert('Lights Manually Updated', '', [{ text: 'Okay', style: 'cancel' }]);
    }
    const dispatch = useDispatch();

    const lightHandler= () => {
        console.log('test')
        setLightUpdate[0]=1}

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId])

    useEffect(() => {
        //props.navigation.setParams({ mealTitle: selectedMeal.title })//setting params this way allows navigation options access to the redux useSelector
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
    }, [toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({ isFav: favoriteSettings });
    }, [favoriteSettings]);

    //console.log(lightUpdate[1])
    if (selectedMeal.duration === 12) {
        return (
            <ScrollView>
                <TouchableNativeFeedback onPress={lightHandler}>
                <Image source={selectedMeal.imageURL} style={styles.image} />
                </TouchableNativeFeedback>
                <View style={styles.detail}>

                    <Text>Hue:{selectedMeal.complexity.toUpperCase()}</Text>
                    <Text>Control: {selectedMeal.affordability.toUpperCase()}</Text>
                </View>

                <View style={styles.preset}>
                    <PreSetButtons title='Doc Review' onPress={() => Alert.alert('Lights Updated for Documentation Review', '', [{ text: 'Thanks', style: 'cancel' }])} />
                    <PreSetButtons title='Theater Mode' onPress={() => Alert.alert('Lights Updated for Theater Mode', '', [{ text: 'Thanks', style: 'cancel' }])} />
                    {/* <PreSetButtons title='test3'/> */}
                </View>
                <Text style={styles.bullet}>Advanced Controls </Text>
                <View style={styles.preset}>
                    <Text style={styles.txt}>Off                                                                   </Text>
                    <Text style={styles.txt}>                                                   On</Text>
                </View>
                {/* {selectedMeal.ingredients.map(ingredient => <ListItems key={ingredient}>{ingredient}</ListItems>)} */}
                {/* this is how you would print out a list of data stored in an array ^ */}
                <View style={styles.sliders}>
                    <View style={styles.set}>
                        <Text>1 </Text>
                        <View style={styles.min}>
                            <Slider maximumValue={10} value={lightUpdate[0]} onSlidingComplete={barHandler} />
                        </View>
                    </View>
                    <View style={styles.set}>
                        <Text>2 </Text>
                        <View style={styles.min}>
                            <Slider maximumValue={10} value={lightUpdate[1]} onSlidingComplete={barHandler} />
                        </View>
                    </View>
                    <View style={styles.set}>
                        <Text>3 </Text>
                        <View style={styles.min}>
                            <Slider maximumValue={10} value={lightUpdate[2]} onSlidingComplete={barHandler} />
                        </View>
                    </View>
                    <View style={styles.set}>
                        <Text>4 </Text>
                        <View style={styles.min}>
                            <Slider maximumValue={10} value={lightUpdate[3]} onSlidingComplete={barHandler} />
                        </View>
                    </View>
                    <View style={styles.set}>
                        <Text>5 </Text>
                        <View style={styles.min}>
                            <Slider maximumValue={10} value={lightUpdate[4]} onSlidingComplete={barHandler} />
                        </View>
                    </View>
                    <View style={styles.set}>
                        <Text>6 </Text>
                        <View style={styles.min}>
                            <Slider maximumValue={10} value={lightUpdate[5]} onSlidingComplete={barHandler} />
                        </View>
                    </View>
                    <View style={styles.set}>
                        <Text>7 </Text>
                        <View style={styles.min}>
                            <Slider maximumValue={10} value={lightUpdate[6]} onSlidingComplete={barHandler} />
                        </View>
                    </View>
                    <View style={styles.set}>
                        <Text>8 </Text>
                        <View style={styles.min}>
                            <Slider maximumValue={10} value={lightUpdate[7]} onSlidingComplete={barHandler} />
                        </View>
                    </View>
                    <View style={styles.set}>
                        <Text>9 </Text>
                        <View style={styles.min}>
                            <Slider maximumValue={10} value={lightUpdate[8]} onSlidingComplete={barHandler} />
                        </View>
                    </View>
                    <View style={styles.set}>
                        <Text>10</Text>
                        <View style={styles.min}>
                            <Slider maximumValue={10} value={lightUpdate[9]} onSlidingComplete={barHandler} />
                        </View>
                    </View>
                    <View style={styles.set}>
                        <Text>11</Text>
                        <View style={styles.min}>
                            <Slider maximumValue={10} value={lightUpdate[10]} onSlidingComplete={barHandler} />
                        </View>
                    </View>
                    <View style={styles.set}>
                        <Text>12</Text>
                        <View style={styles.min}>
                            <Slider maximumValue={10} value={lightUpdate[11]} onSlidingComplete={barHandler} />
                        </View>
                    </View>
                </View>
                <Button color='#044C84' title='Update' onPress={submitHandler} />
                {/* {selectedMeal.steps.map(steps => <ListItems key={steps}>{steps}</ListItems>)} */}

            </ScrollView>
        );
    } else if (selectedMeal.duration === 6) {
        return (
            <ScrollView>
                <Image source={selectedMeal.imageURL} style={styles.image} />
                <View style={styles.detail}>

                    <Text>Hue:{selectedMeal.complexity.toUpperCase()}</Text>
                    <Text>Control: {selectedMeal.affordability.toUpperCase()}</Text>
                </View>
                <Text style={styles.bullet}>Advanced Controls </Text>
                <View style={styles.preset}>
                    <Text style={styles.txt}>Off                                                                   </Text>
                    <Text style={styles.txt}>                                                   On</Text>
                </View>
                {/* {selectedMeal.ingredients.map(ingredient => <ListItems key={ingredient}>{ingredient}</ListItems>)} */}
                {/* this is how you would print out a list of data stored in an array ^ */}
                <View style={styles.sliders}>
                    <Text>Counter A1</Text>
                    <Slider maximumValue={10} value={lightUpdate[0]} onSlidingComplete={barHandler} />
                    <Text>Counter A2</Text>
                    <Slider maximumValue={10} value={lightUpdate[1]} onSlidingComplete={barHandler} />
                    <Text>Counter B1</Text>
                    <Slider maximumValue={10} value={lightUpdate[2]} onSlidingComplete={barHandler} />
                    <Text>Counter B2</Text>
                    <Slider maximumValue={10} value={lightUpdate[3]} onSlidingComplete={barHandler} />
                    <Text>Counter C1</Text>
                    <Slider maximumValue={10} value={lightUpdate[4]} onSlidingComplete={barHandler} />
                    <Text>Counter C2</Text>
                    <Slider maximumValue={10} value={lightUpdate[5]} onSlidingComplete={barHandler} />
                </View>
                <Button title='Update' onPress={submitHandler} />
                {/* {selectedMeal.steps.map(steps => <ListItems key={steps}>{steps}</ListItems>)} */}

            </ScrollView>
        );

    } else {
        return (
            <ScrollView>
                <Image source={selectedMeal.imageURL} style={styles.image} />
                <View style={styles.detail}>

                    <Text>Hue:{selectedMeal.complexity.toUpperCase()}</Text>
                    <Text>Control: {selectedMeal.affordability.toUpperCase()}</Text>
                </View>
                <Text style={styles.bullet}>Advanced Controls </Text>
                <View style={styles.preset}>
                    <Text style={styles.txt}>Off                                                                   </Text>
                    <Text style={styles.txt}>                                                   On</Text>
                </View>
                {/* {selectedMeal.ingredients.map(ingredient => <ListItems key={ingredient}>{ingredient}</ListItems>)} */}
                {/* this is how you would print out a list of data stored in an array ^ */}
                <View style={styles.sliders}>
                    <Text>Desk Light</Text>
                    <Slider maximumValue={10} value={lightUpdate[0]} onSlidingComplete={barHandler} />
                    <Text>Overhead Light</Text>
                    <Slider maximumValue={10} value={lightUpdate[1]} onSlidingComplete={barHandler} />
                </View>
                <Button title='Update' onPress={submitHandler} />
                {/* {selectedMeal.steps.map(steps => <ListItems key={steps}>{steps}</ListItems>)} */}

            </ScrollView>
        );

    }

};

MealDetailScreen.navigationOptions = navigationData => {
    //const mealId = navigationData.navigation.getParam('mealId');
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFavorite = navigationData.navigation.getParam('isFav')
    //const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: mealTitle,
        headerRight: () =>
            < HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Favorite'
                    iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
                    color='red'
                    onPress={toggleFavorite} />
            </HeaderButtons>


    };

};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    bullet: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        paddingTop: 15,
    },
    detail: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'

    },
    txt: {
        fontSize: 10,
    },
    set: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    min: {
        width: '95%',
    },
    sliders: {
        paddingVertical: 10,
        justifyContent: 'flex-end'
    },
    coolList:
    {
        marginVertical: 5,
        marginHorizontal: 8,
        borderColor: 'pink',
        backgroundColor: 'white',
        elevation: 5,
        borderWidth: 2,
        padding: 7,
    },
    preset: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 25,
        //backgroundColor: 'red'
    }
});

export default MealDetailScreen;


