import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export default function Celula() {
  return (
    <SafeAreaView  style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Text>Célula Adonai</Text>
        </View>

        <View style={styles.content}>
          <Text>Célula Revived</Text>
        </View>
        
        <View style={styles.content}>
          <Text>Célula Tetelestai</Text>
        </View>

        <View style={styles.content}>
          <Text>Célula El Shadai</Text>
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
    height: 200,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
});
