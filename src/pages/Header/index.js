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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#040316',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
  },
  logoVideiraHeader:{
    backgroundColor: '#3E4A59',
    width: '100%',
    height: 55,
    alignItems: 'center',
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
