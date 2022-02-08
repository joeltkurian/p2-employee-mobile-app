import { StyleSheet, View } from 'react-native';
import Login from './components/login_page';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Employee } from './dtos';
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