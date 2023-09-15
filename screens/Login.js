

import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, FacebookAuthProvider, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../Firebase/Firebase';
import { Toast, Spinner } from 'native-base';
import { useCart } from '../components/CartContex';
import { themeColors } from '../theme';

const provider = new FacebookAuthProvider();
const Google = new GoogleAuthProvider();
Google.addScope('https://www.googleapis.com/auth/contacts.readonly');
function Loginscreen({ onLog, handle }) {
  const { setUserUID } = useCart();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);



  {/*Facebook Auth */ }
  const handlefacebook = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });

  }


  {/*Facebook Auth */ }




  {/*Google Auth */ }


  const handleGoogle = async () => {

    await signInWithPopup(auth, Google)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        console.log('Token: ', token);
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.error("Error: ", errorCode);
        const errorMessage = error.message;
        // The email of the user's account used.
        console.error("ErrorMessage: ", errorMessage);
        const email = error.customData.email;
        // The AuthCredential type that was used.\
        console.error("ErrorEmail: ", email);
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log('credential:', credential);
      });
  }

  {/*Google Auth */ }
  const handleLogin = async () => {


    if (email && password) {

      try {
        if (email === '' || password === '') {
          console.error('Please fill in all fields.');
          return;
        }
        //this will be come after console.log

        setLoading(true);

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in:', userCredential.user);
        setUserUID(userCredential.user.uid);
        // Notify the parent component about successful login
        Toast.show({
          title: "Logged In Successfully",
          variant: "solid",
          placement: 'top'
        });

        onLog();
      } catch (error) {
        console.error('Error logging in:', error.message);
        Toast.show({
          title: "Something went wrong",
          variant: "solid",
          isClosable: true
        });
        setLoading(false);
      }
    }
  };
  // const handleSignup = () => {
  //   onsignup();
  // };

  return (<View className="flex-1">
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: themeColors.bg }}>
      {/* Status Bar */}
      <StatusBar style='light' />

      {/* Rest of the login UI */}
      {/* ... (The existing login UI code goes here) ... */}
      {/* Login Container */}
      <View style={{ marginTop: '30%' }}>
        {/* Login Title */}
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontWeight: '700', fontSize: 70, color: themeColors.text }}>Login</Text>
        </View>

        {/* Username */}
        <View style={{ marginLeft: 42, marginTop: 47 }}>
          <Text style={{ fontWeight: '700', fontSize: 25, color: themeColors.text }}>Email</Text>
          <TextInput
            style={{ height: 40, borderBottomWidth: 2, width: 280 }}
            placeholder='Enter email'
            value={email}
            type="email"
            onChangeText={(value) => setEmail(value)} // Set the username state correctly
          />
        </View>

        {/* Password */}
        <View style={{ marginLeft: 42, marginTop: 47 }}>
          <Text style={{ fontWeight: '700', fontSize: 25, color: themeColors.text }}>Password</Text>
          <TextInput
            style={{ height: 40, borderBottomWidth: 2, width: 280 }}
            placeholder='Type your password'
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry // Set the password state correctly
          />
          <TouchableOpacity><Text style={{ marginLeft: 190, marginTop: 7 }}>Forgot password?</Text></TouchableOpacity>
        </View>

        {/* Login Button */}
        <View style={{ marginTop: 47, justifyContent: 'center', alignItems: 'center' }}>

          <TouchableOpacity
            style={{
              width: 291,
              height: 52,
              borderRadius: 40,
              backgroundColor: themeColors.text,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handleLogin}
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? ( // Step 2: Conditionally render loading indicator or success message
              <ActivityIndicator color="white" />
            ) : (
              <Text style={{
                fontSize: 25,
                fontWeight: 700,
                color: 'white',
              }}>Login</Text>
            )}
          </TouchableOpacity>
          {/* Or Sign Up Using */}
          {/* <Text style={{ marginTop: 28 }}>Or Sign Up Using </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Icon size={50} disabled={false} containerStyle={{ padding: 10 }} disabledStyle={{ backgroundColor: 'red' }} name='facebook' />
            <Icon size={50} disabled={false} containerStyle={{ padding: 10 }} disabledStyle={{ backgroundColor: 'red' }} type='ionicon' name='logo-twitter' />
            <Icon size={50} disabled={false} containerStyle={{ padding: 10 }} disabledStyle={{ backgroundColor: 'red' }} type='font-awesome' name='google' />
          </View> */}
        </View>

        <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-full" onPress={handleGoogle}>
            <Image source={require('../assets/icons/google.png')} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-full">
            <Image source={require('../assets/icons/apple.png')} className="w-10 h-10" />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-full" onPress={handlefacebook}>
            <Image source={require('../assets/icons/facebook.png')} className="w-10 h-10" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text className="font-semibold text-yellow-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View className="items-center mt-8">
          <TouchableOpacity onPress={() => onLog()}>
            <Text className="font-semibold  text-yellow-500" style={{ fontSize: 30 }}> Back</Text>
          </TouchableOpacity></View>
      </View>
    </View>
  </View>
  );
}

export default Loginscreen;
