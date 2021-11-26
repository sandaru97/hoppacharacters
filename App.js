import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';

import {players} from "./players";

//var selectedCharacterIdGlobal = 1;
class PlayerDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1
        };
    }
    nextId = () => {
        this.setState({id: this.state.id+1});
    }
    render() {
        var selectedCharacterId = this.props.id;

        return <View style={
                {
                    "height": "100%",
                    "width": "100%"
                }
            }
            style={
                styles.container
        }>
            <Text style={
                styles.title
            }>&lt; Players (1/20) &gt;</Text>

            <Image 
            alt="Error Loading Characters. Please try again!"
            style={{
                    width: "70%",
                }}
                source={{ uri: String.raw(players[this.state.id]['image']) }}

                resizeMode={'cover'}
                // cover or contain its upto you view look
            />
            <br/>
            <Text style={
                styles.playerName
            }>
                {
                players[this.state.id]['name']
            }</Text>
            <Text style={
                styles.description
            }>
                {
                players[this.state.id]['description']
            }</Text>
            <Text></Text>
            <StatusBar style="auto"/>
            <View style={
                styles.bottom
            }>
                <button style={
                    {
                        "fontSize": "7vw",
                        padding: "10px",
                        "margin": "10px",
                        color: "#000000"
                    }
                }>
                    <b>&nbsp;&lt;&nbsp;</b>

                </button>
                <button onClick={
                        this.nextId

                        // selectedCharacterIdGlobal++
                    }
                    style={
                        {
                            "fontSize": "7vw",
                            padding: "10px",
                            "margin": "10px",
                            color: "#000000"

                        }
                }>
                    <b>
                        BUY 0.99$
                    </b>
                </button>
            </View>
        </View>;
    }
}

export default function App() {
    return (
        <PlayerDisplay id={1}/>
    );
}

const styles = StyleSheet.create({
    description: {
        fontSize: "5vw",
        justifyContent: "center"
    },
    title: {
        position: "absolute",

        fontSize: "10vw",
        top: "15px"
    },
    button: {
        "fontSize": "18",
        padding: "10px",
        "font-size": "3vw",
        "width": "10px",

        // width:"10%",
        // height:"100%",
        // flex: 1,
        // justifyContent: 'flex-end',
    },
    bottom: {
        "position": "fixed",
        "bottom": "0",
        "align-items": "center",
        "bottom": "15px",

        // "font-size":"3vw",

        flexDirection: "row",
        justifyContent: "space-between",
        // "height":"1w",
        flex: 1,
        justifyContent: 'flex-end'
    },
    playerName: {
        "font-size": "8vw",
        "font-weight": "bold"
    },
    description: {
        "font-size": "5vw"

    },
    container: {
        "border-bottom": "10px solid #eb9486",
        "border-top": "10px solid #eb9486",
        "height": "100%",
        "width": "100%",
        // backgroundColor: '#d7d9b1',
        backgroundColor: '#d7d9b1',

        // "background-color":"#d7d9b1",
        display: "flex",
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        "align-items": "center",
        textAlign: 'center'
    }
});
