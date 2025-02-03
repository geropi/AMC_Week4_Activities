import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Morning = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Wake up.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pray.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Watch reels on instagram.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Send good morning messages to my loved ones.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Take a bath.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Get ready for school or OJT.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Commute to school or OJT.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Have breakfast.',
  },
];
const Afternoon = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Listen to class or perform OJT tasks.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pray.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Watch reels on instagram.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Send good morning messages to my loved ones.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Take a bath.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Get ready for school or OJT.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Commute to school or OJT.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Have breakfast.',
  },
];
const Evening = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Wake up.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Pray.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Watch reels on instagram.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Send good morning messages to my loved ones.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Take a bath.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Get ready for school or OJT.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Commute to school or OJT.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Have breakfast.',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text>
      My Morning Routine
    </Text>
      <FlatList

        data={Morning}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        
      />
      <Text>
      
      My Afternoon Routine
    </Text>
      <FlatList
        data={Morning}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text >
      My Evening Routine
    </Text>
      <FlatList
        data={Morning}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;