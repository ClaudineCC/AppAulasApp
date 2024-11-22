//  folha estilo exercicio 2

import { StyleSheet } from "react-native";


//CSS para os componentes
const styles = StyleSheet.create({



    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },

    button:{
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
    },
    
    text:{
      color: 'pink',
      margin: 10,
      padding: 10,
      textAlign: 'center',
    },

    text1:{
        color: 'green',

    },

    text2:{
        color: 'blue',
        fontSize: 25,
        display: 'flex',

    },

    container:{
        flex:1,
        backgroundColor: 'green',
        alignItems:'center',
        padding: 15,
    },

});

export default styles;

