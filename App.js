import Routes from  './src/routes';
import Header from './src/pages/Header';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Header/>
      <Routes/>
    </NavigationContainer>
    
  );
}

