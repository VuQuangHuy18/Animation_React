import { Animated, Dimensions, Easing, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useRef, useState } from "react";
function Screen2() {
    const navigation = useNavigation();
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [isTop, setIsTop] = useState(true);
    const [isRun, setRun] = useState(false);
    const hanldPressReset = () => {
        setRun(false);
        setIsTop(false);
        startAnimation(isTop ? 0 : 0);
    }
    const hanldPress = () => {
        setRun(true);
    }
    const hanldPressStop = () => {
        setRun(false);
    }
    const startAnimation = toValue => {
        Animated.timing(animatedValue, {
            toValue,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
            setIsTop(!isTop);
        })
    }

    useEffect(() => {
        if (isRun) {
            startAnimation(isTop ? 1 : 0);
        }
    }, [isTop, isRun]);

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, Dimensions.get('window').height - 70],
        extrapolate: 'clamp',

    })

    return (
        <SafeAreaView style={styles.container}>
            <Animated.View style={[styles.square, { transform: [{ translateY }] }]}>

                <Image
                   style={{width:100,height:100}}
                    
                    source={require('../assets/maybay.png')}
                    
                />
                

            </Animated.View>
            <View style={styles.bottonContainer}>
                <TouchableOpacity style={styles.bottom} onPress={hanldPress}>
                    <Text >Run</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 20, }}>
                    <TouchableOpacity style={styles.bottom} onPress={hanldPressStop}>
                        <Text >Stop</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    bottonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: "red",
       
    },
    square: {
        width: 70,
        height: 70,
        backgroundColor: 'green'
    }
});

export default Screen2;