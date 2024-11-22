import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from 'react-native-vector-icons';

import Home from "./screens/Home";
import Politica from "./screens/Politica";
import CustomDrawer from "./components/CustomDrawer";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Home"
                    drawerContent={(props) => <CustomDrawer {...props} />}
                >
                    <Drawer.Screen
                    name="Home"
                    component ={Home}
                    />

                    <Drawer.Screen
                    name ="Politica"
                    component = {Politica}
                    />

                </Drawer.Navigator>
            </NavigationContainer>



        );
    }
}

export default App;


