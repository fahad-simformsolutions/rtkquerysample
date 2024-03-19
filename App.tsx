import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { UserDetailCard } from './app/components/UserDetailCard';
import { UserList } from './app/components/UserList';
import { getFakeUserList, getFakeDataForUser, FakeUserName, FakeUserData, FakeUserList } from './app/services/fakeData';

export default function App() {
  const [currentUser, setCurrentUser] = useState<FakeUserData | undefined>(undefined);
  const [userList, setUserList] = useState<FakeUserList>([]);
  const findAndSetUser = ({name}: {name: FakeUserName}) => {
    const userData = getFakeDataForUser({name});

    setCurrentUser(userData);
  }
  const unsetSelectedUser = () => setCurrentUser(undefined);

  useEffect(() => {
    setUserList(
      getFakeUserList()
    )
  }, [])

  return (
    <View style={styles.container}>
      
      {currentUser ? (
        <UserDetailCard userData={currentUser} resetUser={unsetSelectedUser}/>
      ) : (
        <>
          <Text style={styles.heading}>Members Area</Text>
          <UserList 
            userData={userList}
            setCurrentUser={findAndSetUser}
          />
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop: 100,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'left',
    alignSelf: 'stretch',
    marginBottom: 22,
    marginLeft: 16,
  }
});
