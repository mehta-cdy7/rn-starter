import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {

    //state === { counter : number}
    // action  === {type : ? , payload :  INCREMENT(+1)||DECREMENT(-1)}

    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.payload }
        case 'decrement':
            return { ...state, counter: state.counter - action.payload }
        default:
            return state;
    }
    return { ...state, counter: state.counter + action.payload }
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 0 })



    return (
        <View>
            <Text
                style={stylezz.textDesign}
            >COUNTER SCREEN</Text>

            <Button
                title='INCREMENT'
                onPress={() => dispatch({ type: "increment", payload: 1 })}
            ></Button>

            <Button
                title='DECREMENT'
                onPress={() => dispatch({ type: "decrement", payload: 1 })}
            ></Button>

            <Text>CURRENT COUNT : {state.counter}</Text>

        </View>
    );
}

const stylezz = StyleSheet.create({

    textDesign: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10,
    },

    buttonDesign: {
        backgroundColor: 'red',

    },


});

export default CounterScreen;