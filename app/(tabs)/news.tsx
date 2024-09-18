import { StyleSheet, Image, Text, View, TouchableOpacity, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import noticiasData from '@/assets/json/noticas.json';
import { Collapsible } from '@/components/Collapsible';


interface Noticia {
  titulo: string;
  texto: string;
  usuario: string;
  data: string;
  link: string; 
}

export default function NewsScreen() {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/NewsImage.jpg')}
          style={styles.mainImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Noticias do momento</ThemedText>
      </ThemedView>
      <ThemedText>Fique por dentro das últimas informações sobre a The King Gym.</ThemedText>
      {noticiasData.map((noticia: Noticia, index: number) => (
        <View key={index} style={styles.noticiaContainer}>
          <Collapsible title={noticia.titulo}>
            <Text style={styles.texto}>{noticia.texto}</Text>
            <Text style={styles.info}>
              {noticia.usuario.charAt(0).toUpperCase() + noticia.usuario.slice(1)}
            </Text>
            <Text style={styles.info}>{noticia.data}</Text>
            
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => handlePress(noticia.link)} 
            >
              <Text style={styles.buttonText}>Ver Feed</Text>
            </TouchableOpacity>
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
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
