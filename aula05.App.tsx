// dependencia para icones:
//npm install react-native-vector-icons
//npx react-native link react-native-vector-icons
import React, { Component } from "react";
import {
    SafeAreaView, View, Text, TouchableOpacity,
    StatusBar, Dimensions, TextInput, FlatList, StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useFonts } from "expo-font";
//traz o modulo para seu codigo e permite que use a função font.loadAsync
//para carregar as fontes personalizadas e no aplicativo EXPO
import * as Font from 'expo-font';
//import styles from "./assets/style/styles";


//Diagrama - classe App, propriedade State[item, shoppingList] e metodo add, edit, save e removeApp


class App extends Component {

    // construtor de classe, um metodo especial utilizado para iniciar o estado do componente
    constructor(props) {
        // o 'super' chama o construtor de classe, base( React.Component) para garantir que o 'this' seja tratado corretamente
        super(props);
        // inicialização do estado do componente
        this.state = {
            // armazena o valor de um item no campo de texto ou formulario. iniciando como vazio
            item: '',
            //array que contem os itens da lista de comprar. 
            shoppingList: [],
            //indica se estamos editando um item especifico da lista de compras
            //se for -1, significa que nao estamos editando nenhum item no momento
            editingIndex: -1,
            // deixa a entrad a da fonte personalizada como falsa caso ela nao encontre
            fontsLoaded: false,
        };
    }

    /*
     a função componentDidMount é chamada automaticamente assim que o componente é montado,
     ou seja, assim que ele é  inserido na arvore de componentes.
     a palavra-chave 'asnyc' inida que a funçãp é assincrona, permitindo o uso de 'await'
     ´para esperar que as fontes seja resolvidas.
    */
    async componentDidMount() {
        //usando o Font.loadAsync para carregar as fintes personalizadas, carrega antes da  renderização
        await Font.loadAsync({
            //nome da fonte como sera chamada no CSS e seu caminho como requerido
            'Roboto': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
            'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
            'Roboto-B-I': require('./assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
        });
        //apos o carregamento das fontes, atualiza o estado do componente para True
        this.setState({ fontLoaded: true });
    }


    //Criando nossos metodos (=funções ou escrever function additem() { })



    addItem = () => {
        //desestrutura as variaveis 'item' e 'shoppingList' do estado do componente
        const { item, shoppingList } = this.state;
        //verifica se  o campo 'item' noa esta vazio( removendo espaços em branco no inicio e no final - trim)
        if (item.trim()) {
            //atualiza o estado, adicionando um novo item a lista de compras
            this.setState({
                //adiciona o novo item ao final do array 'shoppingList'
                shoppingList: [...shoppingList, { text: item, bought: false }],
                //limpa o campo 'item' apos adicionar o item a lista
                item: '',
            });
        }
    };

    //metodo de edição de um item da lista de compras. metodo com parametros
    editItem = (index) => {
        //desenstrutura o array 'shoppingList' do estado do componente
        const { shoppingList } = this.state;
        //atualiza o estado para permitir a edicao do item selecionado
        this.setState({
            //define o valor do campo 'item' com o texto do item que esta sendo editado
            item: shoppingList[index].text,
            //define o indice do item que esta sendo editado, para poder identifica-lo mais tarde
            editingIndex: index,
        });
    };


    //metodo para salvar as edições feitas em um item da lista de compras
    saveEdit = () => {
        //desestrutura as variaveis 'item','shoppingList' e 'editingIndex' do estado do componente
        const { item, shoppingList, editingIndex } = this.state;
        //verifica se  o campo 'item' não esta vazio(removendo os espaços em branco no inio e fim)
        if (item.trim()) {
            //cria uma copia do array 'shoppingList', para garantir que o estado seja imutavel
            const updateList = [...shoppingList];
            //atualiza o item na posicao do indice 'editingIndex' com o novo texto
            updateList[editingIndex].text = item;
            //atualiza o estado com a lista de compras modifica, limpa o campo'item e desmarca o indice de edição
            this.setState({
                //atualiza a lista de compras com o item editado
                shoppingList: updateList,
                //limpa o campo de entrada
                item: '',
                //restaura o valor para '-1', indicando que não há mais item sendo editado
                editingIndex: -1,
            });
        }
    };


    // metodo para alterar o estado de 'comprado' - check!  de um item na lista de compras
    toggleBought = (index) => {
        // desenstrutura a variavel 'shoppingList' do estado do componente
        const { shoppingList } = this.state;
        //cria uma copia do array 'shoppingList' do estado do componente
        const updateList = [...shoppingList];
        //altera o valor da propriedade 'bought' do item no indice especifico
        updateList[index].bought = !updateList[index].bought;
        //atualiza o estado com a lista de compras modificada
        this.setState({
            //atualiza a lista de compras com novo estado do item
            shoppingList: updateList,
        });
    };





    // COMPONENTS metodo que renderiza um item da lista de compras
    renderItem = ({ item, index }) => (
        //componente View que contem a estrutura visual de uma lista
        <View style={styles.itemContainer}>
            {/*botao para alterar o estado 'comprado' do item*/}
            <TouchableOpacity onPress={() => this.toggleBought(index)}>
                {/*icone de status de compra: 'check-circle' para comprado ou 'radio-button-unchecked' para não comprado */}
                <Icon
                    //define o icone dependendo do status do item
                    name={item.bought ? 'check-circle' : 'radio-button-unchecked'}
                    //tamanho do icone
                    size={24}
                    //cor do icone: verde comprado e cinza nao comprado
                    color={item.bought ? 'green' : 'gray'}
                    //estilo de CSS aplicado ao icone
                    style={styles.checkIcon}
                />
            </TouchableOpacity>

            {/* texto do item */}
            <Text style={[styles.itemText, item.bought && styles.strikethrough]}>
                {/*exibe o texto do item*/}
                {item.text}
            </Text>

            {/*botao para editar o item*/}
            <TouchableOpacity onPress={() => this.editItem(index)}>
                {/* icone de edição */}
                <Icon
                    name="edit"
                    size={20}
                    color="blue"
                />
            </TouchableOpacity>
        </View>
    );

    // metodo responsavel por renderizar o separador entre os itens da lista
    renderSeparator = () => {
        //retorna uma view que serve com separador, com um CSS definido 
        return <View style={styles.separator} />;

    };

    //se as fontes nao estao carregadas, retorna null(ou pode retornar um loading)
    // if(!fontsLoadded) {
    //     return null;
    // }



    //renderiza o APP
    render() {

        const { item, shoppingList, editingIndex } = this.state;




        return (
            <SafeAreaView style={styles.container}>

                {/* ajustando a barra de status para nao interferir */}
                <StatusBar barStyle="dark-content" backgroundColor="pink" />

                {/*cabeçalho*/}
                <View style={styles.header}>
                    <Text style={styles.tittle}>Lista de Compras</Text>
                </View>

                {/*corpo*/}
                <View style={styles.body}>
                    <TextInput
                        //aplica o estilo de Css para o componente de entrada de texto
                        style={styles.input}
                        //exibe uma dica de texto para o usuario informando o que deve ser digitado
                        placeholder="Digite o nome do item "
                        //valor atual do campo de entrada, vinculado ao estado 'item' no componente
                        value={item}
                        //atualiza o estado 'item' sempre que o texto é alterado pelo usuario
                        onChangeText={(text) => this.setState({ item: text })}
                    />
                    <TouchableOpacity
                        style={[
                            //aplica o Css em estilo global ao botao 
                            styles.button,
                            /*
                            aplica o Css especifico baseado em 'editingIndex' : 
                            se for '-1', aplica o estilo 'addButton'
                            senão aplica o estilo 'saveButton'
                            */
                            editingIndex === -1 ? styles.addButton : styles.saveButton
                        ]}
                        /*
                        define a ação ao pressionar o botão:
                        se for '-1' , chama o metodo(função) 'addItem' para adicionar um novo item
                        senão chama o metodo(função) 'saveEdit' para salvar o item modificado ou sua alteracao
                        */
                        onPress={editingIndex === -1 ? this.addItem : this.saveEdit}
                    >
                        <Text style={styles.buttonText}>
                            {/*
                            o texto exibido no botao depende do valor de 'editingIndex' :
                            se for '-1', o texto do botao sera "adicionar"
                            senão o texto sera 'salvar edicao'                           
                            */}
                            {editingIndex === -1 ? 'Adicionar' : 'Salvar Edição'}
                        </Text>
                    </TouchableOpacity>

                    <FlatList
                        // a propriedade 'data' recebe a lista de itens que sera exibida na FlatList.
                        //nesse caso, é uma lista 'shoppingList'
                        data={shoppingList}
                        //o metodo(funcao) 'renderItem' é chamada para renderizar cada item da lista
                        //ela recebe um objeto de item e deve retornar o componente que sera exibido para cada item
                        renderItem={this.renderItem}
                        // a função "keyExtractor" extrai uma chave unica para cada item.
                        //aqui, estamos usando o  indice do item convertido para string
                        keyExtractor={(item, index) => index.toString()}
                        /*
                        a propriedade 'ItemSeparatorComponent' permite adicionar um componente visual entre os itens
                        da lista. Neste caso, 'renderSeparator' é um metodo(funcao) que retorna o separator visual.
                        */
                        ItemSeparatorComponent={this.renderSeparator}
                        //aplica o css na lista, isso permite custonizar a aparencia  da FlatList
                        style={styles.list}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

/*
Desestruturação da largura da janela do dispositivo. A função 'dimensions.get' retorna um objeto contendo
as dimensoes da janela ea desetruturaracção extrai apenas a propriedade 'width', que representa a 
largura da tela
*/
const { width } = Dimensions.get('window');



const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'gray',
        alignItems: 'center',
        padding: 20 // adiciona este padding para na ter a sobreposicao da barra de status
    },
    tittle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'Roboto-B-I',
    },
    input: {
        height: 40,
        borderColor: '#1E90FF',
        borderWidth: 1,
        paddingLeft: 20,
        width: width * 0.9,
        backgroundColor: 'green',
        fontFamily: 'Roboto',
    },
    list: {
        marginTop: 20,
        width: width * 0.9,
    },
    itemContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemText: {
        fontSize: 25,
        flex: 1,
        fontFamily: 'Roboto-Bold',
    },
    strikethrough: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    checkIcon: {
        marginRight: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#1E90FF',
        marginVertical: 5,
    },
    button: {
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
        marginTop: 20,
        width: width * 0.9,
    },
    addButton: {
        backgroundColor: '#4caf50',
    },
    saveButton: {
        backgroundColor: '#2196f3',
    },
    buttonText: {
        color: 'blac',
        fontSize: 16,
        fontWeight: 'bold',
    },
    header: {
        padding: 20,
    },
    body: {
        backgroundColor: 'pink',
    },
});

export default App;