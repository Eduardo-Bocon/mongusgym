import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, TouchableOpacity, Linking, ScrollView } from 'react-native';

import Video, {VideoRef} from 'react-native-video';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRef } from 'react';

export default function VideosScreen() {

  const videos = [
    { id: 1, url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg' },
    { id: 2, url: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g', thumbnail: 'https://img.youtube.com/vi/2Vv-BfVoq4g/0.jpg' },
    { id: 3, url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ', thumbnail: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/0.jpg' },
    { id: 4, url: 'https://www.youtube.com/watch?v=V-_O7nl0Ii0', thumbnail: 'https://img.youtube.com/vi/V-_O7nl0Ii0/0.jpg' },
  ];

  const openYouTubeVideo = (url:string) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Image
        source={require('@/assets/images/amongus_watching.png')}
        style={styles.headerImage}/>}>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Videos</ThemedText>
      </ThemedView>

      <ScrollView style={styles.container}>
      {videos.map((video) => (
        <TouchableOpacity key={video.id} onPress={() => openYouTubeVideo(video.url)}>
          <Image
            source={{ uri: video.thumbnail }}
            style={styles.image}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
      
    </ParallaxScrollView>

  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 240,
    width: 380,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
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
});
