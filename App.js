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

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          // Essa guia não aparecerá na barra de guias.
          href: null,
        }}
      />
      <Tabs.Screen
        name="[user]"
        options={{
          // Garanta que a guia sempre aponte para o mesmo href.
          href: '/evanbacon',
          // OU você pode usar o objeto Href:
          // href: { pathname: '/[user]', params: { user: 'evanbacon' } },
        }}
      />
    </Tabs>
  );
}
