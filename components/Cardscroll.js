import * as React from 'react';
import { Dimensions,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { Avatar, Button, Card, Text, IconButton } from 'react-native-paper';



const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Cardscroll = () =>
{ 
    const width=Dimensions.get('window').width;
    return(
  <Card className='m-3'>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button mode='text'>499</Button>
      <Button icon='cart' />
    </Card.Actions>
  </Card>
);}

export default Cardscroll;