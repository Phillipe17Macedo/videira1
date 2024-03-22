import React from 'react';
import { Image, StyleSheet, Text, View, StatusBar, Platform, TouchableOpacity} from 'react-native';
import LogoVideira from "../../assets/img/logoVide.png";
import { Ionicons } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight;

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.logoVideiraHeader}>
          <Image style={styles.imgVideLogo} source={LogoVideira} />
        </View>

        <View style={styles.iconPersonHeader}>
          <TouchableOpacity onPress={() => console.log('Person Clicking Icon!')}>
              <Ionicons name="person" size={32} color="#B8D9D3"/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#040316',
    paddingTop: Platform.OS === 'ios' ? statusBarHeight : 25,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  logoVideiraHeader:{
    backgroundColor: '#3E4A59',
    width: '100%',
    height: 60,
    alignItems: 'left',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  iconPersonHeader:{
    position: 'absolute',
    alignItems:'flex-end',
    justifyContent: 'center',
    marginLeft: '85%',
    right: 20,
  },
});
