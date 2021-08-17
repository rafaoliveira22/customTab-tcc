import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import telas
import Home from './pages/Home';
import Vagas from './pages/Vagas';
import Chat from './pages/Chat';
import Perfil from './pages/Perfil';
import Solicitar from './pages/Solicitar';

import ButtonSolicitar from './components/buttonSolicitar';

//icons
import { Feather, Ionicons } from '@expo/vector-icons';

//tipo da navegação
const Tab = createBottomTabNavigator();



export default function Routes(){
    return(
        <Tab.Navigator
        tabBarOptions={{
                style:{
                    backgroundColor:'#FFF',
                    borderTopColor: 'transparent'
                },
                activeTintColor: '#7B2DCD',
                inactiveTintColor: '#848484',
                tabStyle:{
                    padding:5
                }
            }}
        >
            
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons 
                            name="home-outline" 
                            size={size} 
                            color={color}
                        />
                    )
                }}
            />

            <Tab.Screen 
                name="Vagas"
                component={Vagas}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <Ionicons 
                            name="briefcase-outline" 
                            size={size} 
                            color={color}
                            
                        />
                    )
                }}
            />

            <Tab.Screen 
                name="Solicitar"
                component={Solicitar}
                options={{
                    tabBarLabel:' ',
                    tabBarIcon: ({ size, color, focused }) => (
                        <ButtonSolicitar
                            size={size} 
                            color={color}
                            focused={focused}
                        />
                    )
                }}
            />

            <Tab.Screen 
                name="Chat"
                component={Chat}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons 
                            name="chatbubble-outline" 
                            size={size} 
                            color={color}
                        />
                    )
                }}
            /> 

            <Tab.Screen 
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons 
                            name="person-outline" 
                            size={size} 
                            color={color}
                        />
                    )
                }}
            />     

            
        </Tab.Navigator>
    )
}


/* CORES
* 
* #7B2DCD
* #848484
*/

