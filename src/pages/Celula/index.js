import { Image, StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const statusBarHeight = StatusBar.currentHeight;

export default function Celula() {
  const navigation = useNavigation();

  const openGoogleMaps = (lat, lng) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.containerEventos}>
            <TouchableOpacity onPress={() => openGoogleMaps(-18.927672, -46.970893)}>
              <Image source={require('../../assets/img/celulaAdonai.png')} style={styles.images} />
              <View style={styles.textContainer}>
                <Text style={styles.textOne}>CÉLULA ADONAI</Text>
                <Text style={styles.textTwo}>Data: Todos os Sábados</Text>
                <Text style={styles.textThree}>Horário: 15:30</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.containerEventos}>
            <TouchableOpacity onPress={() => openGoogleMaps(-18.961282, -46.987652)}>
              <Image source={require('../../assets/img/celulaRevived.png')} style={styles.images} />
              <View style={styles.textContainer}>
                <Text style={styles.textOne}>CÉLULA REVIVED</Text>
                <Text style={styles.textTwo}>Data: Todos os Sábados</Text>
                <Text style={styles.textThree}>Horário: 19:30</Text>
              </View>
            </TouchableOpacity>
          </View>
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
  content: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '85%',
    height: 200,
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    overflow: 'hidden',
  },
  containerEventos: {
    position: 'relative',
    width: '100%',
    height: '65.08%',
    textAlign: 'center',
    bottom: 35,
  },
  images: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    top: 130,
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#3E4A59',
    paddingTop: 6,
    paddingLeft: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textOne: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textTwo: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 14,
  },
  textThree: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 14,
  },
});
