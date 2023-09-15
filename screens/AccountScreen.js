import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';


const AccountScreen = ({ Login, onOut, handleAdmin, out }) => {
  const navigation = useNavigation();
  const [check, setCheck] = useState(false)

  useEffect(() => {

    const user = auth.currentUser;

    const get = () => {
      console.log(user);
      if (user) {
        console.log("logged in")
        setCheck(true);

      } else {
        console.log("not logged in")
        setCheck(false);

      }

    }
    return get();

  }, [])






  // Function to handle user logout
  const handleOut = async () => {
    try {
      // Call the signOut function on the auth object
      await signOut(auth);
      out();
      onOut();

      console.log('User logged out');

      setCheck(false); // Call the provided onOut callback
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  return (<>
    {check ?
      (<View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> My Account</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Profile')}>
            <Icon name="user-circle" type="font-awesome" size={25}  />
            <Text style={styles.optionText}> Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Payment')}>
            <Icon name="credit-card" type="font-awesome" size={25}  />
            <Text style={styles.optionText}> Payment Methods</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Address')}>
            <Icon name="address-card" type="font-awesome" size={25}  />
            <Text style={styles.optionText}> Addresses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Order')}>
            <Icon name="history" type="font-awesome" size={25}  />
            <Text style={styles.optionText}> Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => handleAdmin()}>
            <Icon name="dashboard" type="font-awesome" size={25}  />
            <Text style={styles.optionText}> Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={handleOut}>
            <Icon name="sign-out" type="font-awesome" size={25}  />
            <Text style={styles.optionText}> Logout</Text>
          </TouchableOpacity>
        </View>
      </View>) : (
        <View className="flex-1 items-center p-10">

          <Text className="mb-10" style={{ fontSize: 30 }}>Hello! <Text style={{ color: "red" }}>Stranger</Text></Text>
          <TouchableOpacity style={styles.option1} onPress={() => Login()}>

            <Text style={styles.optionText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option1} onPress={() => handleAdmin()}>

            <Text style={styles.optionText}>Login as Admin</Text>
          </TouchableOpacity>
        </View>
      )}

  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  option1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  optionText: {
    marginLeft:10,
    fontSize: 18,
    color: '#333',
  },
});

export default AccountScreen;
