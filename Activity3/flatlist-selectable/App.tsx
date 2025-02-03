import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const Morning: ItemData[] = [
  {
    id: 'morning1',
    title: 'Wake up.',
  },
  {
    id: 'morning2',
    title: 'Pray.',
  },
  {
    id: 'morning3',
    title: 'Watch reels on instagram.',
  },
  {
    id: 'morning4',
    title: 'Send good morning messages to my loved ones.',
  },
  {
    id: 'morning5',
    title: 'Take a bath.',
  },
  {
    id: 'morning6',
    title: 'Get ready for school or OJT.',
  },
  {
    id: 'morning7',
    title: 'Commute to school or OJT.',
  },
  {
    id: 'morning8',
    title: 'Have breakfast.',
  },
];
const Afternoon: ItemData[] = [
  {
    id: 'afternoon1',
    title: 'Listen to class or perform OJT tasks.',
  },
  {
    id: 'afternoon2',
    title: 'Check if there are memos available.',
  },
  {
    id: 'afternoon3',
    title: 'Print if there is any memo.',
  },
  {
    id: 'afternoon4',
    title: 'Tell my girlfriend I love her.',
  },
  {
    id: 'afternoon5',
    title: 'Have lunch.',
  },
  {
    id: 'afternoon6',
    title: 'release plate numbers.',
  },
  {
    id: 'afternoon7',
    title: 'Fill out DTR.',
  },
  {
    id: 'afternoon8',
    title: 'Head home.',
  },
];
const Evening: ItemData[] = [
  {
    id: 'evening1',
    title: 'Arrive at home.',
  },
  {
    id: 'evening2',
    title: 'Rest for a bit.',
  },
  {
    id: 'evening3',
    title: 'Wash my clothes.',
  },
  {
    id: 'evening4',
    title: 'View instagram reels.',
  },
  {
    id: 'evening5',
    title: 'Have dinner.',
  },
  {
    id: 'evening6',
    title: 'Play Dota 2',
  },
  {
    id: 'evening7',
    title: 'Take a bath.',
  },
  {
    id: 'evening8',
    title: 'Pray then sleep.',
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const colors = ['blue','red','yellow','purple','orange','green','brown','violet'];


const App = () => {
  const [selectedId, setSelectedId] = useState();
  const renderItem = ({item, index}) => {
    const backgroundColor = item.id === selectedId ? 'black' : colors[index % colors.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <Text>
      My Morning Routine
    </Text>
        <FlatList
          data={Morning}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
        <Text>
      My Afternoon Routine
    </Text>
        <FlatList
          data={Afternoon}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
        <Text>
      My Evening Routine
    </Text>
        <FlatList
          data={Evening}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
