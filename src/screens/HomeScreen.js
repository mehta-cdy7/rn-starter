import React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

const HomeScreen = (props) => {


  return (<View>
    <Text style={styles.text}>HomeScreen</Text>
    
    <Button
         style = {styles.Button}
         title = 'Go to Counter Demo'
         onPress = {()=> {props.navigation.navigate('Counter')}}>

    </Button>
     
    <Button
         style = {styles.Button}
         title = 'Go to Color Set Demo'
         onPress = {()=> {props.navigation.navigate('MyColor')}}>

    </Button>
     
    <Button
         style = {styles.Button}
         title = 'Go to Square Screen Demo'
         onPress = {()=> {props.navigation.navigate('SQuare')}}>

    </Button>
     
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign : 'center',
    marginVertical :10,
  },

  Button :{
    margin : 5 ,
    padding :5 ,
  }
});

export default HomeScreen;
