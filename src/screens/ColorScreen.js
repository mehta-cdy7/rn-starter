import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList } from "react-native";


const ColorScreen = () => {

    console.log(randomRGB());

    const [color, setColor] = useState([]);



    return (
        <View>
            <Button
                title='ADD A COLOR'
                onPress={() => {
                    setColor([...color, randomRGB()])
                }}></Button>


            <FlatList
                keyExtractor={item=> item}
                data={color}
                renderItem={({item}) => {
                    return <View
                        style={{ width: 100, height: 100, backgroundColor: item, }}>
                    </View>
                }}
            ></FlatList>
        </View>
    );
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256) + 0;
    const green = Math.floor(Math.random() * 256) + 0;
    const blue = Math.floor(Math.random() * 256) + 0;

    return 'rgb(' + red + ',' + green + ',' + blue + ')';
};

export default ColorScreen;