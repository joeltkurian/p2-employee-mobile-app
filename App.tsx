
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ActivitiesList from './src/components/activities/activities-list';
import ActivityDetails from './src/components/activities/activity-details';
import CreateActivity from './src/components/activities/create-activity';
import ComplaintsList from './src/components/complaints/complaints-list';
import ComplaintsDetails from './src/components/complaints/complaints-details';
import { Employee } from './dtos';
import Login from './components/login_page';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { userContext } from './userContext';
import HomePage from './components/homepage';


export default function App() {
  const [user, setUser] = useState<Employee>(account);

  useEffect(() => {
    AsyncStorage.getItem('user').then(json => {
      if (json) {
        setUser(JSON.parse(json));
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {user.username === '' ?
        <Login setUser={setUser} /> :
        <userContext.Provider value={{ user: user, setUser }}>
          <HomePage />
        </userContext.Provider>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const account: Employee = {
  id: NaN, isManager: false, fname: '', lname: '', username: '', password: ''
};

