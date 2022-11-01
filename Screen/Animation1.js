import { View, Text ,Animated, SafeAreaView, StyleSheet} from 'react-native'

import React, { useEffect, useRef } from 'react';


const Animation1 = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000,
            useNativeDriver:true,
          }).start();
})







  return (
    <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.fadingContainer,{opacity: fadeAnim}]}>
                <Text style={styles.fadingText}>Welcom To Animation React Native</Text>
            </Animated.View>
        </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    fadingContainer: {
        padding: 20,
       
      },
      fadingText: {
        fontSize: 28
      },
    
  });

export default Animation1