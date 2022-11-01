import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Animation1 from './Screen/Animation1';
import Animation2 from './Screen/Animation2';
import Animation3 from './Screen/Animation3';
import Animation4 from './Screen/Animation4';
import Home from './Screen/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >

      {/* init là chọn trang hien thi ban dau mac dinh la dong dau tien
      headShoewn hiern thị tên trang*/}
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Animation 1' component={Animation1}/>
        <Stack.Screen name='Animation 2' component={Animation2}/>
        <Stack.Screen name='Animation 3' component={Animation3}/>
        <Stack.Screen name='Animation 4' component={Animation4}/>



      </Stack.Navigator>
      

    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  
});
