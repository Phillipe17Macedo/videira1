import Routes from  './src/routes';
import Header from './src/pages/Header';
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <Header/>
      <Routes/>
    </NavigationContainer>
    
  );
}

