import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text>ENCONTRO COM DEUS</Text>
        </View>

        <View style={styles.content}>
          <Text>IMERSÃO</Text>
        </View>

        <View style={styles.content}>
          <Text>RADICAIS LIVRES</Text>
        </View>

        <View style={styles.content}>
          <Text>RADICAIS KIDS</Text>
        </View>

        <View style={styles.content}>
          <Text>CÉLULAS</Text>
        </View>
        
        <View style={styles.content}>
          <Text>CULTOS</Text>
        </View>

        <View style={styles.content}>
          <Text>CONTRIBUIR</Text>
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
    height: 120,
    marginBottom: 25,
    backgroundColor: '#3E4A59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});
