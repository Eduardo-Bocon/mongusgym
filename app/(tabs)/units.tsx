import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, Image, View, TouchableOpacity, FlatList, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';

type Unit = {
  name: string;
  location: string;
  image: string; // Assuming each unit has an associated image
};

const Units = () => {
  const router = useRouter();
  const [units, setUnits] = useState<Unit[]>([]); // State to hold unit data

  // Fetch units from the JSON file
  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const data = require('@/assets/json/units.json') as Unit[];
        setUnits(data);
      } catch (error) {
        console.error('Failed to load units:', error);
      }
    };
    
    fetchUnits();
  }, []);

  // Handle press to navigate to the UnitDetails screen
  const handlePress = (name: string) => {
    router.push({
      pathname: "/(tabs)/unitDescription",
      params: { name }, // Pass the name as a parameter
    });
  };

  // Render each unit as a card
  const renderUnit = ({ item }: { item: Unit }) => (
    <TouchableOpacity key={item.name} style={styles.card} onPress={() => handlePress(item.name)} activeOpacity={0.8}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <ThemedText type="title" style={styles.unitName}>{item.name}</ThemedText>
        <ThemedText type="default" style={styles.unitLocation}>{item.location}</ThemedText>
      </View>
    </TouchableOpacity>
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000000', dark: '#000000' }}
      headerImage={<Image source={require('@/assets/images/UnitsImage.jpg')} style={styles.mainImage} />}
    >
      <View style={styles.container}>
        <ThemedText type="title" style={styles.pageTitle}>Nossas Unidades</ThemedText>
        {units.length > 0 ? (
          <FlatList
            data={units}
            renderItem={renderUnit}
            keyExtractor={(item) => item.name} // Use the name as the key
            contentContainerStyle={styles.listContent}
          />
        ) : (
          <Text style={styles.noUnitsText}>No units available.</Text>
        )}
      </View>
    </ParallaxScrollView>
  );
};

export default Units;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#1C1C1E', // Dark background for the screen
  },
  mainImage: {
    height: 260,
    width: '100%',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFF',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#2C2C2E',
    borderRadius: 15,
    overflow: 'hidden', // Makes sure image stays within card bounds
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 15,
  },
  unitName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  unitLocation: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  noUnitsText: {
    color: '#FFF',
    textAlign: 'center',
  },
});
