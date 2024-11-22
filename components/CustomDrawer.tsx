//crie o arquivo ./components/CustomDrawer.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
//  import Icon form '<react-native-vector-icons /Ionicons>  ou:
import { Ionicons } from 'react-native-vector-icons';


//este componente sera responsavel por exibir o menu de navegacao personalizada
export default class CustomDrawer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* Titulo do menu*/}
                <Text style={styles.drawTitle}>Menu</Text>


                { /* navegação para tela Home*/}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}
                    style={styles.menuItem}    >

                    <Ionicons style={styles.menuItem} name="home-outline" size={25} color="#000" />
                    <Text style={styles.itemText}>Home</Text>
                </TouchableOpacity>


                { /* navegação para quem-somos*/}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Politica')}
                    style={styles.menuItem}    >

                    <Ionicons style={styles.menuItem} name="information-circle-outline" size={25} color="#000" />
                    <Text style={styles.itemText}>Politica</Text>
                </TouchableOpacity>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f7f7f7',
        paddingTop: 50,
        paddingLeft: 20,
    },
    drawTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    itemText: {
        fontSize:  18,
        marginLeft: 15,
    },
});





// ou export no final
//export default CustomDrawer;