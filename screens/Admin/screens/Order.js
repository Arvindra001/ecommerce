import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { DataTable, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Order() {
    const navigation=useNavigation();
    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([4, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = useState(
      numberOfItemsPerPageList[0]
    );
  
    const [items] = useState([
     {
       key: 1,
       name: 'Zara Pant',
       price: 356,
       description:'It is Amazing .',
       fat: 16,
     },
     {
       key: 2,
       name: 'Eclair',
       description:'It is Amazing .',
       price: 262,
       fat: 16,
     },
     {
       key: 3,
       name: 'Frozen yogurt',
       description:'It is Amazing .',
       price: 159,
       fat: 6,
     },
     {
       key: 4,
       name: 'Gingerbread',
       price: 305,
       fat: 3.7,
     },
    ]);
  
    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);
  
    useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);
  
    return (
      <View>
         <Appbar.Header>
    <Appbar.BackAction onPress={() => navigation.goBack()} />
    <Appbar.Content title="Order" />
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
     
        <View className='p-4'>
        <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Description</DataTable.Title>
          <DataTable.Title numeric>Price</DataTable.Title>
          <DataTable.Title numeric>Stock</DataTable.Title>
        
        </DataTable.Header>
  
        {items.slice(from, to).map((item) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell numeric>{item.description}</DataTable.Cell>
            <DataTable.Cell numeric>{item.price}</DataTable.Cell>
          
            <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
          </DataTable.Row>
        ))}
  
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        />
      </DataTable>
        </View>
      </View>)
}