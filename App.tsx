import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RoomService from './room-service/room-service-component';

export default function App() {
  return (
    <View>
      <RoomService/>
    </View>
  );
}
