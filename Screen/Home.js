import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.contaiter}>
            <Button 
            style= {styles.button2}
            title='Animate 1'
            onPress={() => navigation.navigate('Animation 1')}
               
            />

            <Button title='Animate 2'
             style= {styles.button2}
             onPress={() => navigation.navigate('Animation 2')}
                
            ></Button>

            <Button title='Animate 3'
             style= {{backgroundColor:'red'}}
             onPress={() => navigation.navigate('Animation 3')}
               
            ></Button>

            <Button title='Animate 4'
             
             onPress={() => navigation.navigate('Animation 4')}

             style={styles.button2}
                
            ></Button>

            


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    contaiter:{
        paddingVertical:50
       
        
        
        
    },
    button2:{
        margin:300,
        backgroundColor:'red',
        justifyContent:'flex-start',
        color:'red',
        alignItems:'flex-start',
        width:200,
        height:100

    }

});
   


export default Home