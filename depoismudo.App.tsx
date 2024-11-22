// Importando as dependecias do projeto
import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView, Image, Dimensions, ScrollView, StatusBar,} from "react-native";


// Criando as classe publica para o APP
class App extends Component{
  render(){

    const screenWhidt = Dimensions.get('window').width;

    // const { width } = Dimensions.get('window'); // aula 05




    return(
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="blue" />    
      
        <ScrollView style={styles.scrollView}>

        <View style={styles.header}>
          {/* <Text>Header</Text> */}
          <Image
            source={require('./assets/images/senac_header.png')}
            style={styles.logoTop}
          />
        </View>

       
        
        <View>
          <Image 
          source={require('./assets/images/banner_apps.png')}
          style={styles.banner}
          />
          
        </View>

        <Text style={styles.textBody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit aspernatur soluta tenetur distinctio pariatur necessitatibus laboriosam officiis ea eaque. Repudiandae eius accusamus ipsam nisi, earum quae sit nobis exercitationem!</Text>
        <Text style={styles.textBody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt pariatur ex deleniti, eum a quisquam omnis rem. Libero, doloremque! In voluptate saepe magnam dolor quibusdam blanditiis eveniet illum expedita?</Text>
        <Text style={styles.textBody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit aspernatur soluta tenetur distinctio pariatur necessitatibus laboriosam officiis ea eaque. Repudiandae eius accusamus ipsam nisi, earum quae sit nobis exercitationem!</Text>
        <Text style={styles.textBody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt pariatur ex deleniti, eum a quisquam omnis rem. Libero, doloremque! In voluptate saepe magnam dolor quibusdam blanditiis eveniet illum expedita?</Text>  
        <Text style={styles.textBody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit aspernatur soluta tenetur distinctio pariatur necessitatibus laboriosam officiis ea eaque. Repudiandae eius accusamus ipsam nisi, earum quae sit nobis exercitationem!</Text>
        <Text style={styles.textBody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt pariatur ex deleniti, eum a quisquam omnis rem. Libero, doloremque! In voluptate saepe magnam dolor quibusdam blanditiis eveniet illum expedita?</Text>
        <Text style={styles.textBody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit aspernatur soluta tenetur distinctio pariatur necessitatibus laboriosam officiis ea eaque. Repudiandae eius accusamus ipsam nisi, earum quae sit nobis exercitationem!</Text>
        <Text style={styles.textBody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit aspernatur soluta tenetur distinctio pariatur necessitatibus laboriosam officiis ea eaque. Repudiandae eius accusamus ipsam nisi, earum quae sit nobis exercitationem!</Text>
        <Text style={styles.textBody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere incidunt pariatur ex deleniti, eum a quisquam omnis rem. Libero, doloremque! In voluptate saepe magnam dolor quibusdam blanditiis eveniet illum expedita?</Text>
        


        <View>
          <Text>Rodapé</Text>
          <Image 
          source={require('./assets/images/senac_header.png')}
          />
        </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles =StyleSheet.create({
  scrollView:{
    paddingBottom:20,
  },
header:{
  alignItems: 'center',
  justifyContent: 'center',
  padding:20,
  
},
logoTop:{
  height:150,
  width: 150,
  resizeMode:'contain', // garante dimensionamentode 100% da area visivel
},
banner :{
  resizeMode:'cover',  // outros como strech, repeat
},
textBody:{
  fontSize: 20,
  padding: 20,

}

 
});

export default App;