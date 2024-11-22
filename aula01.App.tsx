//importando as dependencias do projeto
import React, { Component } from "react";
import {  View, Text, SafeAreaView, TouchableOpacity,  } from "react-native";
//importando o css da pasta style
import styles from './assets/style/styles_aula01';

//criando a classe publica para o APP
class App extends Component {

//Armazena a data
state = {
  date:'',
};

//metodo para definir a data de hoje
getDate = () =>{
  const today = new Date();
  //formatacao de data em pt-br
  const options ={ day:'2-digit', month:'2-digit', year:'numeric'}
  const formatDate = today.toLocaleDateString('pt-BR', options); //formata a data
  this.setState({date : formatDate}); //atualiza o estado

  //para forçar a atualização do componente
this.forceUpdate();
};



  render() {
    return (
      /* é um componente do RN que ajuda a garantir que o conteudo do seu  APP não seja sobreposto por areas interativas, como o notch(recorte) da tela ou barras de status em dispositivos ios ou Android */
      <SafeAreaView style={styles.container}>

        {/*iniciando o header*/}
        <View style={styles.header}>
          <Text>Cabeçalho</Text>
        </View>

        {/*iniciando o main*/}
        <View style={styles.body}>
          <Text>Corpo</Text>
          {/*<Button title='Mostrar a data de hoje' onPress={this.getDate} /> */}

          <TouchableOpacity onPress={this.getDate} style={styles.button}>
            <Text style={styles.buttonText}>Mostrar Data de Hoje!</Text>
          </TouchableOpacity>

          

          {/* exibe a data, se estiver disponivel */}
          {this.state.date ? (
            <Text style={styles.state}>Data: {this.state.date}</Text>
          ) : null}
        </View>

        {/*iniciando o footer*/}
        <View style={styles.footer}>
          <Text>Rodapé</Text>
        </View>

      </SafeAreaView>
    );
  }
}


export default App;
