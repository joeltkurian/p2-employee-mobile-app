import { StyleSheet, Text, View, StatusBar } from 'react-native';
import RoomService from './room-service/room-service-component';

export default function App() {
  return (
    <View>
      <StatusBar/>
      <RoomService/>
    </View>
  );
}
