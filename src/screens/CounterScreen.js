import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    setCounterHandler = (counterValue) =>{
        return  setCounter(counterValue) 
    }

    return (
        <View>
            <Text
                style={stylezz.textDesign}
            >COUNTER SCREEN</Text>

            <Button
                title='INCREMENT'
                onPress = {()=>{setCounterHandler(counter+1)}}
            ></Button>

            <Button
                title='DECREMENT'
                onPress = {()=>{setCounterHandler(counter-1)}}
            ></Button>

<Text>CURRENT COUNTE : {counter}</Text>

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