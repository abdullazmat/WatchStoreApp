import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {iconSize, spacing} from './constants/dimensons';
import {colors} from './constants/colors';
import {useRoute} from '@react-navigation/native';
import Header from './components/Header';
import ProductCaraousel from './components/ProductCaraousel';

const ProductDetailScreen = () => {
  const item = useRoute().params.item;
  console.log(item);
  return (
    <View style={styles.container}>
      <Header />
      <ProductCaraousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    marginVertical: spacing.xxl,
    backgroundColor: colors.background,
  },
});

export default ProductDetailScreen;
