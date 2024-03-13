import { StyleSheet, Text, View } from 'react-native';

export default function Events() {
  return (
    <View style={styles.container}>
      <Text>Pagina Eventos</Text>
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
