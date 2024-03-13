import { Image, StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform, TouchableOpacity} from 'react-native';

import RadicaisLivres from "../../assets/img/RL/img-teste.png";

const statusBarHeight = StatusBar.currentHeight;

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>


        <View style={styles.content}>
          <TouchableOpacity style={styles.eventoImageHome}>
            <Image source={RadicaisLivres} style={styles.eventoImage}/>
            <Text style={styles.textoImg}>ENCONTRO COM DEUS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity>
            <Text>IMERSÃO</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity>
            <Text>RADICAIS LIVRES</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity>
            <Text>RADICAIS KIDS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity>
            <Text>CÉLULAS</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.content}>
          <TouchableOpacity>
            <Text>CULTOS</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },
  content:{
    alignSelf: 'center',
    flex:1,
    width: '85%',
    height: 330,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: '#3E4A59',
    justifyContent: 'center',
    borderRadius: 10,
  },
  eventoImageHome:{
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom:40,
  },
  textoImg:{
    marginTop:10,
    alignItems: 'center',
    fontSize: 20,
    color:'#fff',
    fontStyle: 'italic',
  }
});
