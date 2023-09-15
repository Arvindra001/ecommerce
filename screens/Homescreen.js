import React, { useRef, useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Text, View, Image, TextInput, TouchableOpacity, DrawerLayoutAndroid, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import Card1 from '../components/Card';
import { Skeleton, VStack, Center, NativeBaseProvider } from "native-base";
import { ScrollView } from 'react-native';
import NavigationView from '../components/NavigationView';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../Firebase/Firebase';
import { useCart } from '../components/CartContex';
import { Button, Searchbar } from 'react-native-paper';
import ImageSlider from '../components/ImageSlider';
import Brands from '../components/Brands';
import darkColors from 'react-native-elements/dist/config/colorsDark';
import SearchBarCar from '../components/SearchBarCar/SearchBarCar';
import { useNavigation } from '@react-navigation/native';


const product = [1, 2, 3, 4, 5, 6, 7, 8];

function Homescreen({ Login }) {

  const navigation = useNavigation();
  const width = Dimensions.get('window').width;
  const [check, setCheck] = useState(false)
  const { setdataUser, datauser, userUID } = useCart();
  const [searchInput, setSearchInput] = useState('');
  const [allProducts, setAllProducts] = useState([]); // Store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
  const [isLoading, setisLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [textcar, setTextcar] = useState(true);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);

    // Update the filteredProducts based on the selected filter
    if (filter === 'Trending Now') {
      setFilteredProducts(allProducts.filter(item => item.isTrending));
    } else if (filter === 'All') {
      setFilteredProducts(allProducts);
    } else if (filter === 'New') {
      setFilteredProducts(allProducts.filter(item => item.isNew));
    }
  };


  const fetchAllProducts = async () => {
    try {
      setisLoading(false);
      const querySnapshot = await getDocs(collection(db, "products"));
      const allData = [];
      querySnapshot.forEach(doc => {
        allData.push(doc.data());
      });
      console.log(allData);
      setAllProducts(allData);
      setisLoading(true);
      setFilteredProducts(allData); // Initially display all products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearch = () => {
    if (searchInput.length === 0) {
      // Handle the case when the search input is empty
      setTextcar(true);
      setFilteredProducts(allProducts); // Display all products when search input is empty
    } else {
      // Filter products based on the search input
      setTextcar(false);
      const filtered = allProducts.filter(item =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };
  
  //Profile Details is Fetching
  const fetchProfile = async () => {
    try {
      const userDocRef = doc(db, 'users', userUID);
      console.log('Fetching profile for user:', userUID);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        console.log('User data:', userData);
        setdataUser(userData);
        console.log('Profile image set:', userData.profileImage);
        console.log('profileImage:', datauser.profileImage);
      } else {
        console.log('User document does not exist.');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };



  useEffect(() => {
    fetchAllProducts();
  }, []);




  useEffect(() => {

    const user = auth.currentUser;

    const get = () => {
      console.log(user);
      if (user) {
        fetchProfile();
        console.log("logged in")
        setCheck(true);

      } else {
        console.log("not logged in")
        setCheck(false);

      }

    }
    return get();

  }, [])




  return (
    // <DrawerLayoutAndroid
    //   ref={drawer}
    //   drawerWidth={250}
    //   drawerPosition={'left'}
    //   renderNavigationView={() => <NavigationView />}
    // >

    <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: '#ebe8e8' }}>
      <StatusBar style='light' />

      <View className='pr-4 pl-4' style={{ marginTop: 32, flexDirection: 'column' }}>
        <View style={{ width: '100%', justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center' }}>

          <View className="flex-row justify-center items-center">
            {check ? (<><Icon
              name="bell" // Name of the icon from the library, you can use any icon you want
              type="font-awesome" // Type of icon library, could be 'material', 'font-awesome', etc.
              size={20} // Size of the icon
              onPress={() => {
                // Handle icon press event
              }}
            />
              <Image
                style={{ width: 35, height: 35, borderRadius: 50, marginLeft: 10 }}
                source={{ uri: datauser.profileImage }}
              /></>) : (<Button mode="text" onPress={() => Login()}>
                Log In
              </Button>)}

          </View>
        </View>

        <View>
          {isLoading ? (<><Text style={{ fontSize: 26, marginTop: 19 }}>Match Your Style </Text>
            {/* SearchBar */}
            {/* <TextInput
            style={{ height: 40, width: 332, borderRadius: 16, backgroundColor: 'white', marginTop: 22, paddingLeft: 20 }}
            placeholder='Type your search'
            value={searchInput}
            onChangeText={text => {
              setSearchInput(text);
              handleSearch(); // Call handleSearch whenever the input changes
            }}

            onSubmitEditing={handleSearch}

          /> */}

            <Searchbar
              style={{ backgroundColor: 'white', marginTop: 10, padding: 0, }}
              placeholder="Search"


              onChangeText={text => {

                setSearchInput(text);
                handleSearch(); // Call handleSearch whenever the input changes
              }}
              value={searchInput}
            />
            {/* SearchBar */}

            {textcar ? <SearchBarCar /> : ''}</>) : (
            <View style={{ marginTop: 19 }}>
              <Skeleton w={width / 2} marginBottom='5' borderWidth={1} borderColor="coolGray.300" h="5" rounded="full" startColor="coolGray.300" />
              <Skeleton w={width / 1.1} borderWidth={1} borderColor="coolGray.300" h="33" rounded="full" startColor="coolGray.300" />
            </View>
          )}
        </View>


        <ScrollView showsVerticalScrollIndicator={false} className='mb-20 mt-3'>
          {/* Grid */}
          {isLoading ? (<View className="pb-20">
            {/* Filter */}
            <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity onPress={() => handleFilterChange('Trending Now')} style={[styles.trend, selectedFilter === 'Trending Now' && styles.activeFilterButton]} >
                <Text>Trending Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.filterButton, selectedFilter === 'All' && styles.activeFilterButton]}
                onPress={() => handleFilterChange('All')}>
                <Text>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.filterButton, selectedFilter === 'New' && styles.activeFilterButton]}
                onPress={() => handleFilterChange('New')}>
                <Text>New</Text>
              </TouchableOpacity>
            </View>
            <ImageSlider />

            <Brands />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {filteredProducts.map((item) => (

                <Card1 items={item} key={item.id} />

              ))}


            </View></View>) : (<>

              <View className="mt-6 flex-row justify-between">
                <Skeleton w="156" borderWidth={1} borderColor="coolGray.300" h="33" rounded="full" startColor="coolGray.300" />
                <Skeleton w="67" borderWidth={1} borderColor="coolGray.300" h="33" rounded="full" startColor="coolGray.300" />
                <Skeleton w="67" borderWidth={1} borderColor="coolGray.300" h="33" rounded="full" startColor="coolGray.300" />
              </View>
              <VStack my="4" w={width} h="200" borderWidth="1" overflow="hidden" rounded="lg" _dark={{
                borderColor: "coolGray.100"
              }} _light={{
                borderColor: "coolGray.300"
              }}>
                <Skeleton h="100%" />

                {/* <Skeleton mt="150" className="absolute"  h="10" my="2" rounded="full" startColor="primary.100">
                        
                      </Skeleton> */}
                <Skeleton h="10" ml="2" w="138" mt="150" borderWidth={0.5} borderColor="coolGray.300" className="absolute" rounded="full" startColor=".50" />
              </VStack>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {product.map((item) => {
                  return (
                    <VStack key={item.id} my="4" w="156" h="200" borderWidth="1" overflow="hidden" rounded="lg" _dark={{
                      borderColor: "coolGray.100"
                    }} _light={{
                      borderColor: "coolGray.300"
                    }}>
                      <Skeleton h="100%" />
                      <Skeleton borderWidth={1} borderColor="coolGray.300" size="8" ml="110" mt="2" className="absolute" startColor="amber.50" rounded="full" />

                      {/* <Skeleton mt="150" className="absolute"  h="10" my="2" rounded="full" startColor="primary.100">
                        
                      </Skeleton> */}
                      <Skeleton h="10" ml="2" w="138" mt="150" borderWidth={0.5} borderColor="coolGray.300" className="absolute" rounded="full" startColor=".50" />
                    </VStack>)
                })}

              </View></>)}

        </ScrollView>

      </View>

    </View>
    // </DrawerLayoutAndroid>
  );
}

export default Homescreen;

const styles = StyleSheet.create({
  // ... other styles ...

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 22,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingRight: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  filterButton: {
    borderRadius: 14,
    backgroundColor: '#D0C6C6',
    fontSize: 14,
    fontWeight: '500',
    width: 67,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeFilterButton: {
    backgroundColor: '#DF5F5F',
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  trend: {
    borderRadius: 14,
    backgroundColor: '#D0C6C6',
    fontWeight: '500',
    width: 156,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',


  }
});