import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ActivitiesList from './src/components/activities/activities-list';
import ActivityDetails from './src/components/activities/activity-details';
import CreateActivity from './src/components/activities/create-activity';


export default function App() {
  return (
    //<CreateActivity/>
    <ActivitiesList/>
    //<ActivityDetails/>
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}