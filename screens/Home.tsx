import React from "react";
import { View, Text, Button, StyleSheet, } from "react-native";


export default class Home extends React.Component {
    render() {


        navigateToPolitica = () => {
            this.props.navigation.navigate('Politica');
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Tela Home</Text>
                <Button
                    title=" Ir para Politica"
                    onPress={() => this.props.navigation.navigate('Politica')}
                />

            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignContent:'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize : 24,
        fontWeight: 'bold',
        marginBottom : 30,
    },
});


// comentario

// export default Home;


