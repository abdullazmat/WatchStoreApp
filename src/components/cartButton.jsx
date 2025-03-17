import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors} from '../constants/colors';
import LinearGradient from 'react-native-linear-gradient';

const CartButton = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8743FF', '#4136F1', '#192f6a']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Add To Cart</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartButton;
