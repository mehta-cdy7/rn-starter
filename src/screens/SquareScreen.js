import React, { useState } from "react";
import { View, Text, StyleSheet, } from "react-native";
import ColorCounter from "./ColorCounter";

const SquareScreen = () => {

    const COLOR_INCREMENT = 15;

    const [colorRed, setRed] = useState(0);
    const [colorGreen, setGreen] = useState(0);
    const [colorblue, setblue] = useState(0);

    const setColor = (colorYouWantToChange, changeValue) => {

        switch (colorYouWantToChange) {

            case 'red':
                colorRed + changeValue > 255 || colorRed + changeValue < 0 ? null : setRed(colorRed + changeValue)
                return;
            case 'green':
                colorGreen + changeValue > 255 || colorGreen + changeValue < 0 ? null : setGreen(colorGreen + changeValue)
                return;
            case 'blue':
                colorblue + changeValue > 255 || colorblue + changeValue < 0 ? null : setblue(colorblue + changeValue)
                return;
        }
    }

    return <View>
        <Text>SQUARE SCREEN</Text>

        <ColorCounter
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
            color='Red'
        />
        <ColorCounter
            color='Green'
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        />
        <ColorCounter
            color='Blue'
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        />


        <View
            style={{ marginTop: 15, height: 100, backgroundColor: `rgb(${colorRed} ,${colorGreen} ,${colorblue}  )` }}
        ></View>

    </View>
}

const styles = StyleSheet.create({

})

export default SquareScreen;

