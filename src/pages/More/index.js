import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function More() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textTest}> Pagina More </Text>
        <Text style={styles.textTest}> Em Breve </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTest: {
    alignSelf: 'center',
    color: '#fff',
  },
});
