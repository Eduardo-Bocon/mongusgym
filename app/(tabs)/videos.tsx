import { StyleSheet, Image, Platform, View, TouchableOpacity, Linking, ScrollView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';

export default function VideosScreen() {
  type Video = {
    id: number;
    name: string;
    channel: string;
    url: string;
    thumbnail: string;
    duration: string;
  };

  const videoData = require('@/assets/json/videos.json') as Video[];

  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    setVideos(videoData);
  }, []);

  const openYouTubeVideo = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/VideosImage.jpg')} style={styles.mainImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.pageTitle}>Videos</ThemedText>
      </ThemedView>

      <ScrollView contentContainerStyle={styles.container}>
        {videos.map((video) => (
          <TouchableOpacity
            key={video.id}
            style={styles.videoCard}
            onPress={() => openYouTubeVideo(video.url)}
            activeOpacity={0.8}
          >
            <Image source={{ uri: video.thumbnail }} style={styles.image} />
            <View style={styles.videoInfo}>
              <ThemedText style={styles.videoTitle}>{video.name}</ThemedText>
              <ThemedText style={styles.videoChannel}>{video.channel}</ThemedText>
              <ThemedText style={styles.videoDuration}>{video.duration}</ThemedText>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  mainImage: {
    height: 260,
    width: '100%',
  },
  titleContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  videoCard: {
    backgroundColor: '#3C3C3E',
    borderRadius: 12,
    marginVertical: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  image: {
    width: '100%',
    height: 180,
  },
  videoInfo: {
    padding: 16,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 6,
  },
  videoChannel: {
    fontSize: 14,
    color: '#A9A9A9',
    marginBottom: 4,
  },
  videoDuration: {
    fontSize: 12,
    color: '#A9A9A9',
  },
});
