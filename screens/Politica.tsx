import React from "react";
import { Text, View, Button, StyleSheet} from "react-native";


export default class Politica  extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Tela de Politica</Text>

                <Button title="Voltar para Home"
                 onPress={() => this.props.navigation.navigate('Home')}
                //  onPress={() => this.props.navigation.goback()}

                // onPress={this.navigateToPolitica}          
                />
            </View>

        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent: 'center',
        backgroundColor:'#f0f0f0',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
});



