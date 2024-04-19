import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Clima from './Componentes/Clima';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.encabezado}>
        {}
      </View>
      <View style={styles.contenido}>
        <Clima />
      </View>
      <View style={styles.pie}>
        {}
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfe0c0',
  },
  encabezado: {
    height: 60, 
    backgroundColor: '#160921',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pie: {
    height: 60, 
    backgroundColor: '#160921',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenido: {
    flex: 1,
    padding: 20,
  },
});

