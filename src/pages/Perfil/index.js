import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Perfil() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textTest}> Pagina Perfil </Text>
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