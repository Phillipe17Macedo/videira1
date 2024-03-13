import { StyleSheet, Text, View } from 'react-native';

export default function More() {
  return (
    <View style={styles.container}>
      <Text>Pagina Mais ou More</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
