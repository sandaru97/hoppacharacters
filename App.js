import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { players } from "./players";


export default function App() {
  var selectedCharacterId=1;
  return (
    <View style={{
      "height":"100%",
    "width":"100%",
}}
style={styles.container} >
  <Text style={styles.title}>Players</Text>
 
   <img style={{width:"80%",}}
   src={players[selectedCharacterId]['image']}
   resizeMode={'cover'} // cover or contain its upto you view look
   />
      <Text style={styles.playerName}>{players[selectedCharacterId]['name']}</Text>
      <Text style={styles.description}>{players[selectedCharacterId]['description']}</Text>
      <Text></Text>
      <StatusBar style="auto" />
      <View style={styles.bottom}>
      <button 
      style={{
        "fontSize": "7vw",
        padding:"5px",

      }} 
>*

</button><button 
      style={{
        "fontSize": "7vw",
        padding:"5px",
        "margin":"10px",
color:"#3581b8"
      }} 
>
BUY 0.99$
</button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    position: "absolute",

    fontSize:"10vw",
    top:"15px",
  },
  button: {
    "fontSize": "18",
padding:"10px",
    "font-size":"3vw",
    "width":"10px",

//width:"10%",
    //height:"100%",
    //flex: 1,
    //justifyContent: 'flex-end',
},bottom: {
  "position":"fixed",
  "bottom":"0",
  "align-items":"center",
  "bottom":"15px",

  //"font-size":"3vw",

  flexDirection:"row",
  justifyContent:"space-between"
,
  //"height":"1w",
  flex: 1,
  justifyContent: 'flex-end',
},
  playerName:{
    "font-size":"7vw",
    "font-weight":"bold",
  },description:{
    "font-size":"5vw",
  },
  container: {
    "border-bottom":"10px solid #eb9486",
    "border-top":"10px solid #eb9486",
    "height":"100%",
    "width":"100%",
   // backgroundColor: '#d7d9b1',
   backgroundColor: '#d7d9b1',

    //"background-color":"#d7d9b1",
    display: "flex",
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
"align-items":"center",
  },
});
