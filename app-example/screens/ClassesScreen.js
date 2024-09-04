import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const classesData = [
  { id: '1', name: 'Yoga Class', instructor: 'Jane Doe', time: '10:00 AM' },
  { id: '2', name: 'HIIT Workout', instructor: 'John Smith', time: '12:00 PM' },
  { id: '3', name: 'Pilates', instructor: 'Sarah Johnson', time: '2:00 PM' },
  { id: '4', name: 'Zumba Dance', instructor: 'Mike Lee', time: '4:00 PM' },
];

export default function ClassesScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.classItem}>
      <Text style={styles.className}>{item.name}</Text>
      <Text>Instructor: {item.instructor}</Text>
      <Text>Time: {item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={classesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  classItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  className: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
