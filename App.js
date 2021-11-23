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
  <Text  style={styles.title}>&lt; Players (1/20) &gt;</Text>
 
   <img style={{width:"70%",}}
   src={players[selectedCharacterId]['image']}
   resizeMode={'cover'} // cover or contain its upto you view look
   />
   <br/>
      <Text style={styles.playerName}>{players[selectedCharacterId]['name']}</Text>
      <Text style={styles.description}>{players[selectedCharacterId]['description']}</Text>
      <Text></Text>
      <StatusBar style="auto" />
      <View style={styles.bottom}>
      <button 
      style={{
        "fontSize": "7vw",
        padding:"10px",
        "margin":"10px",
color:"#000000"
      }} 
><b>&nbsp;&lt;&nbsp;</b>

</button><button 
      style={{
        "fontSize": "7vw",
        padding:"10px",
        "margin":"10px",
color:"#000000",

      }} 
><b>
BUY 0.99$
</b>
</button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  description:{
    fontSize:"5vw",
    justifyContent:"center",
  },
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
    "font-size":"8vw",
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
textAlign: 'center',
  },
});
