import React, { useReducer } from "react";
import { View, Text, StyleSheet, } from "react-native";
import ColorCounter from "./ColorCounter";


const reducer = (state, action) => {

    //state === {'red' : number || 'green' : number || 'blue' : number }
    //action === {colorToChange : 'red' || 'green' || 'blue'  , amount : -15||15}

    switch (action.colorTochange) {

        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;

    }
}

const SquareScreen = () => {


    const [state, dispatch] = useReducer(reducer, { 'red': 0, 'green': 0, 'blue': 0 });



    return <View>
        <Text>SQUARE SCREEN</Text>

        <ColorCounter
            onIncrease={() => { }}
            onDecrease={() => { }}
            color='Red'
        />
        <ColorCounter
            color='Green'
            onIncrease={() => { }}
            onDecrease={() => { }}
        />
        <ColorCounter
            color='Blue'
            onIncrease={() => { }}
            onDecrease={() => { }}
        />


        <View
            style={{ marginTop: 15, height: 100, backgroundColor: `rgb(${colorRed} ,${colorGreen} ,${colorblue}  )` }}
        ></View>

    </View>
}

const styles = StyleSheet.create({

})

export default SquareScreen;

