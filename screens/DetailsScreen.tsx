import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../assets/style/styles_aula02";


class DetailsScreen extends Component{
    render(){
        return(
            <View>
                <Text style={styles.text2}>Tela de detalhes!</Text>
            </View>
            
        );
    }
}

export default DetailsScreen;
