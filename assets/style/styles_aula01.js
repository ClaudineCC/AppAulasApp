//Arquivo nome styles.js
//importe a dependencia do css

import { StyleSheet } from "react-native";



//CSS para os componentes
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ADD8E6',  /* '#F00', */
    },
    header: {
      padding: 20,
      paddingTop: 50,
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
    },
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      padding: 20,
      backgroundColor: '#1E90FF',
      alignItems: 'center',
    },
    state:{
     fontSize: 40,   
     color: 'white',
     padding: 20,
    },
    button:{
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,      
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },


  });


  export default styles;