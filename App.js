import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Tabs } from 'expo-router/tabs'

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hello World! Reacr Expo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

