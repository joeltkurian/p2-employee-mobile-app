import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ActivitiesList from './src/components/activities/activities-list';
import ActivityDetails from './src/components/activities/activity-details';
import CreateActivity from './src/components/activities/create-activity';
import ComplaintsList from './src/components/complaints/complaints-list';
import ComplaintsDetails from './src/components/complaints/complaints-details';

export default function App() {
  return (
    //<CreateActivity/>
    <ActivitiesList/>
    //<ActivityDetails/>
    //<ComplaintsList/>
    //<ComplaintsDetails/>
  );
}