import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, ScrollView, Text, View } from 'react-native';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import noticiasData from '@/assets/json/noticas.json'; // Importando o JSON
import { Collapsible } from '@/components/Collapsible';

export default function NewsScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/amongNews.jpeg')}
          style={styles.mongusImage}
        />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Noticias do momento</ThemedText>
      </ThemedView>
      <ThemedText>Fique por dentro das informações mais suspeitas de toda a galaxia</ThemedText>
      
      

        {noticiasData.map((noticia, index) => (
          <View key={index} style={styles.noticiaContainer}>
            <Collapsible title={noticia.titulo}>
              <Text style={styles.texto}>{noticia.texto}</Text>
              <Text style={styles.info}>
                {noticia.usuario.charAt(0).toUpperCase() + noticia.usuario.slice(1)}
              </Text>
              <Text style={styles.info}>{noticia.data}</Text>
            </Collapsible>
          </View>
        ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  mongusImage: {
    height: 240,
    width: 380,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  noticiaContainer: {
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  info: {
    fontSize: 12,
    color: 'gray',
  },
});
