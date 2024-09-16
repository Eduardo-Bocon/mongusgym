import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Gym{
  id: number;
  name: string;
  location: string;
  image: string;
}

export default function UnitsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/gymunits.jpg')}
          style={styles.mainImage}
        />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Nossa unidades</ThemedText>
      </ThemedView>
      <ScrollView style={styles.container}>
        {videos.map((video) => (
          <TouchableOpacity key={video.id} onPress={() => openYouTubeVideo(video.url)}>
            <Image source={{ uri: video.thumbnail }} style={styles.image} />
            <ThemedText>{video.name}</ThemedText>
            <ThemedText>{video.channel}</ThemedText>
            <ThemedText>{video.duration}</ThemedText>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#0',
    margin: 30,
    
  },
  video: {
    width: '100%',
    height: 300, 
  },
  image: {
    width: 300*0.75,
    height: 200*0.75,
    borderRadius: 10,
    marginVertical: 10
  },
  mainImage: {
    height: 260,
    width: 450,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

