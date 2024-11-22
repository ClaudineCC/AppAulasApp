//importar as bibliotecas de uso
import React, { Component } from "react";    // biblioteca
import { View, Text, Button, TouchableOpacity } from "react-native";   //framework
import { NavigationProp } from "@react-navigation/native";
import styles from "../assets/style/styles_aula02";


//criando uma interface
interface Props {
    navigation: NavigationProp<any>;   // vazio
}

class HomeScreen extends Component<Props> {
    render() {
        return (
            <View>
                <Text style={styles.text1}>Bem-vindo ao APP SENAC Tito</Text>
                <Button
                    title="Ir para os Detalhes!"
                    onPress={() => this.props.navigation.navigate('Details')}
                />

                <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Details')}>
                    <Text style={styles.text}>Ir para os detalhes!</Text>
                </TouchableOpacity>
            </View>

        );
    }

}

export default HomeScreen;