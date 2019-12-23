import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const TextScreen = () => {

    const [password, setPassword] = useState('')
    return (
        < View >
            <Text>Enter Name :</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />

            { password.length  < 4 ? <Text>Password must be atleast 4 character's </Text> :  null}
           
        </View >
    );
}

const styles = StyleSheet.create({

    title: {
        fontSize: 16,
        padding: 4

    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
    text: {
        fontSize: 12,
        padding: 4
    },
})
export default TextScreen;