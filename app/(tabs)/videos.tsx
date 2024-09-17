import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, TouchableOpacity, Linking, ScrollView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useRef, useState } from 'react';

export default function VideosScreen() {

  type Video = {
    id: number;
    name: string;
    channel: string;
    url: string;
    thumbnail: string;
    duration: string;
  };

  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch('assets/json/videos.json') 
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  const openYouTubeVideo = (url:string) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Image
        source={require('@/assets/images/VideosImage.jpg')}
        style={styles.mainImage}/>}>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Videos</ThemedText>
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
