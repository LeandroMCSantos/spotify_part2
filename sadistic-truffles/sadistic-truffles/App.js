import * as React from 'react';
import { View } from 'react-native';
import { BottomNavigation, Text, Appbar, Button, IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [index, setIndex] = React.useState(0);

  const routes = [
    { key: 'home', title: 'Início', icon: 'home' },
    { key: 'search', title: 'Buscar', icon: 'magnify' },
    { key: 'library', title: 'Sua Biblioteca', icon: 'bookshelf' },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    library: LibraryRoute,
  });

  return (
    <View style={{ flex: 1, backgroundColor:"#2f2f2f" }}>
      <Appbar.Header style={{ backgroundColor:"#2f2f2f" }}>
        <Appbar.Content title="Bom dia!" />
        <IconButton icon="heart-outline" color="#FFFFFF" onPress={() => {}} />
        <Appbar.Action icon="bell-outline" onPress={() => {}} />
        <Appbar.Action icon="clock-outline" onPress={() => {}} />
        <Appbar.Action icon="cog-outline" onPress={() => {}} />
      </Appbar.Header>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10 }}>
        <Button mode="contained" onPress={() => console.log('Pressed')} color="#FFFFFF" style={{ backgroundColor: "#ebebeb", borderRadius: 20 }}>
          musica
        </Button>
        <Button mode="contained" onPress={() => console.log('Pressed')} color="#FFFFFF" style={{ backgroundColor: "#ebebeb", borderRadius: 20 }}>
          Podcasts e Programas
        </Button>
      </View>
      <BottomNavigation
        barStyle={{ backgroundColor: '#2f2f2f' }}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
}

function HomeRoute() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"#2f2f2f" }}>
      <MaterialCommunityIcons name="heart-outline" size={40} color="#FFFFFF" />
      <Text style={{ color: "#FFFFFF", marginTop: 10 }}>Músicas curtidas</Text>
    </View>
  );
}

function SearchRoute() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: "#FFFFFF" }}>Buscar jnji in in nji nji nji</Text>
    </View>
  );
}

function LibraryRoute() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: "#FFFFFF" }}>Sua Biblioteca</Text>
    </View>
  );
}
