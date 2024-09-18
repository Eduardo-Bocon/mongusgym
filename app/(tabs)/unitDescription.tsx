import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

type Unit = {
  name: string;
  images: string[];
  address: string;
  coordinates: { lat: number, lng: number };
  hours: string;
  price: string;
  phone: string;
  whatsapp: string;
};

export default function UnitDetailsScreen() {
  const { name } = useLocalSearchParams(); 
  const [unit, setUnit] = useState<Unit | null>(null); 

  useEffect(() => {
    const data = require('@/assets/json/units.json') as Unit[]; 
    const selectedUnit = data.find(unit => unit.name === name); 
    setUnit(selectedUnit || null); 
  }, [name]);

  if (!unit) {
    return <Text style={styles.noUnitText}>Primeiro escolha uma unidade!</Text>;
  }

  const openMap = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${unit.coordinates.lat},${unit.coordinates.lng}`;
    Linking.openURL(url).catch(() => Alert.alert('Error', 'Unable to open maps.'));
  };

  const openDialer = () => {
    Linking.openURL(`tel:${unit.phone}`).catch(() => Alert.alert('Error', 'Unable to open dialer.'));
  };

  const openWhatsApp = () => {
    const url = `whatsapp://send?phone=+55${unit.whatsapp}`;
    Linking.openURL(url).catch(() => Alert.alert('Error', 'Unable to open WhatsApp.'));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.unitName}>{unit.name}</Text>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imagesContainer}>
        {unit.images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </ScrollView>

      <View style={styles.infoContainer}>
        <Ionicons name="location-outline" size={24} color="#FFF" />
        <Text style={styles.infoText}>{unit.address}</Text>
        <TouchableOpacity onPress={openMap} style={styles.iconButton}>
          <Ionicons name="map-outline" size={30} color="#FFF" />
          <Text style={styles.iconButtonText}>Open in Maps</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Ionicons name="time-outline" size={24} color="#FFF" />
        <Text style={styles.infoText}>Horas: {unit.hours}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Ionicons name="cash-outline" size={24} color="#FFF" />
        <Text style={styles.infoText}>Preço: {unit.price}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Ionicons name="call-outline" size={24} color="#FFF" />
        <Text style={styles.infoText}>{unit.phone}</Text>
        <TouchableOpacity onPress={openDialer} style={styles.iconButton}>
          <Ionicons name="call" size={30} color="#FFF" />
          <Text style={styles.iconButtonText}>Ligar agora</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Ionicons name="logo-whatsapp" size={24} color="#25D366" />
        <Text style={styles.infoText}>WhatsApp</Text>
        <TouchableOpacity onPress={openWhatsApp} style={[styles.iconButton, styles.whatsappButton]}>
          <Ionicons name="logo-whatsapp" size={30} color="#FFF" />
          <Text style={styles.iconButtonText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1C1C1E',
  },
  unitName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
    textAlign: 'center',
  },
  imagesContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  image: {
    width: 250,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#333', 
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50
  },
  infoText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#FFF', 
  },
  noUnitText: {
    color: '#FFF', 
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: "#1C1C1E",
    paddingVertical: 420
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF', 
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
  iconButtonText: {
    marginLeft: 5,
    color: '#FFF',
    fontSize: 14,
  },
  whatsappButton: {
    backgroundColor: '#25D366', 
  },
  background:{
    backgroundColor: "#1C1C1E"

  }
});
