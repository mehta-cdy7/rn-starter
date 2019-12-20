import React, { useReducer } from "react";
import { View, Text, StyleSheet, } from "react-native";
import ColorCounter from "./ColorCounter";
import { stat } from "fs";


const reducer = (state, action) => {

    //state === {'red' : number || 'green' : number || 'blue' : number }
    //action === {colorToChange : 'red' || 'green' || 'blue'  , amount : -15||15}

    switch (action.colorTochange) {

        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const SquareScreen = () => {


    const COLOR_INCREMENT = 15;

    const [state, dispatch] = useReducer(reducer, { 'red': 0, 'green': 0, 'blue': 0 });

    const [colorRed, colorGreen, colorblue] = state;

    return <View>
        <Text>SQUARE SCREEN</Text>

        <ColorCounter
            onIncrease={() => dispatch({ colorTochange: 'red', amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorTochange: 'red', amount: -1 * COLOR_INCREMENT })}
            color='Red'
        />
        <ColorCounter
            color='Green'
            onIncrease={() => dispatch({ colorTochange: 'green', amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorTochange: 'green', amount: -1 * COLOR_INCREMENT })}
        />
        <ColorCounter
            color='Blue'
            onIncrease={() => dispatch({ colorTochange: 'blue', amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorTochange: 'blue', amount: -1 * COLOR_INCREMENT })}
        />


        <View
            style={{ marginTop: 15, height: 100, backgroundColor: `rgb(${colorRed} ,${colorGreen} ,${colorblue}  )` }}
        ></View>

    </View>
}

const styles = StyleSheet.create({

})

export default SquareScreen;

