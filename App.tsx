import { StyleSheet, View } from 'react-native';
import { Employee } from './dtos';
import Login from './components/login_page';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { userContext } from './userContext';
import HomePage from './components/homepage';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function App() {
  const [user, setUser] = useState<Employee>(account);

  useEffect(() => {
    AsyncStorage.getItem('use').then(json => {
      if (json) {
        setUser(JSON.parse(json));
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {user.username === '' ?
          <Login setUser={setUser} /> :
          <userContext.Provider value={{ user: user, setUser }}>
            <HomePage />
          </userContext.Provider>
        }
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

const account: Employee = {
  id: NaN, isManager: false, fname: '', lname: '', username: '', password: ''
}
