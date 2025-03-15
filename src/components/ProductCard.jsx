import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {colors} from '../constants/colors';
import {fontSize, spacing} from '../constants/dimensons';
import {fontFamily} from '../constants/font';

const ProductCard = () => {
  const imageUrl =
    'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1725994442/Croma%20Assets/Communication/Wearable%20Devices/Images/309428_0_jhv5to.png';
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.ImageWrapper}>
        <Image source={{uri: imageUrl}} style={styles.productImage} />
      </View>
      <View style={styles.contentContainer}>
        <Text numberOfLines={1} style={styles.name}>
          Apple Watch Series 10
        </Text>
        <Text style={styles.brand}>Apple </Text>
        <Text style={styles.price}>$100 </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    elevation: 5,
    backgroundColor: colors.background,
    borderRadius: 12,
    marginVertical: spacing.md,
  },
  ImageWrapper: {
    borderRadius: 12,
    backgroundColor: '#FFC8B7',
    margin: spacing.sm,
  },
  productImage: {
    height: 120,
    width: '100%',
    resizeMode: 'center',
  },
  contentContainer: {
    padding: spacing.sm,
  },
  name: {
    color: colors.black,
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
  },
  brand: {
    color: colors.gray,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.Medium,
    paddingVertical: spacing.sm,
  },
  price: {
    color: colors.purple,
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.md,
  },
});

export default ProductCard;
