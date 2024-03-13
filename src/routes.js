import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './pages/Home'
import Celula from './pages/Celula'
import Events from './pages/Events'
import More from './pages/More'

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Routes(){
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: '#B8D9D3',
                tabBarInactiveTintColor: '#fff',
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#282A36',
                    borderTopWidth: 0,

                    bottom: 15,
                    left: 15,
                    right: 15,
                    elevation: 0,
                    borderRadius: 15, 
                    height: 70,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size, focused}) => {
                        if(focused){
                            return <Ionicons name='home' size={size} color={color}/>
                        }

                        return <Ionicons name='home-outline' size={size} color={color} />;
                    }
                }}
            />

            <Tab.Screen
                name="Celula"
                component={Celula}

                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size,focused}) =>{
                        if(focused){
                            return <MaterialIcons name="connect-without-contact" size={size} color={color}/>
                        }
                        return <MaterialIcons name="connect-without-contact" size={size} color={color} />;
                    }
                }}
            />
            
            <Tab.Screen
                name="Events"
                component={Events}

                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size,focused}) =>{
                        if(focused){
                            return <MaterialIcons name='event' size={size} color={color}/>
                        }
                        return <MaterialIcons name="event" size={size} color={color} />;
                    }
                }}

            />
            <Tab.Screen
                name="More"
                component={More}

                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size,focused}) =>{
                        if(focused){
                            return <AntDesign name='appstore1' size={size} color={color}/>
                        }
                        return <AntDesign name="appstore1" size={size} color={color} />;
                    }
                }}
            />
        </Tab.Navigator> 
    )
}

export default Routes;