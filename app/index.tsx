
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Index() {
  const [contador, setContador] = useState(0);
  var [meta] = useState(10);
  const incrementar = () =>setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  useEffect(()=>{
    if(contador === meta){
      Alert.alert('Felicidades', 'Meta numero 1 Alcanzada!')
    }else if (contador === 20) {
    Alert.alert('Increible!', 'Has Alcanzado la meta numero 2!');
    } else if (contador === -5) {
      Alert.alert('WOW!', 'Meta numero 3 Alcanzada!');
    }
  }, [contador])
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      
      <Text style={styles.numero}>{contador}</Text>
      
      <View style={styles.botones}>
        <TouchableOpacity 
          style={[styles.boton, styles.botonMenos]}
          onPress={decrementar}
        >
          <Text style={styles.textBoton}>−</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.boton, styles.botonMas]}
          onPress={incrementar}
        >
          <Text style={styles.textBoton}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.botonReset}
        onPress={() => setContador(0)}
      >
        <Text style={styles.textReset}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  numero: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 40,
  },
  botones: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 30,
  },
  boton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonMenos: {
    backgroundColor: '#FF3B30',
  },
  botonMas: {
    backgroundColor: '#34C759',
  },
  textBoton: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  botonReset: {
    backgroundColor: '#555',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  textReset: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});