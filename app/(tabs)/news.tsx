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
          source={require('@/assets/images/NewsImage.jpg')}
          style={styles.mainImage}
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
  mainImage: {
    height: 260,
    width: 450,
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
    fontWeight: 'bold',
    fontSize: 12,
    marginVertical: 5,
    color: 'white',
  },
  info: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'gray',
  },
});
