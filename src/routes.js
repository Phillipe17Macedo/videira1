import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Favorites from './pages/Favorites'
import Search from './pages/Search'

const Tab = createBottomTabNavigator();

function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Search"
                component={Search}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator> 
    )
}

export default Routes;