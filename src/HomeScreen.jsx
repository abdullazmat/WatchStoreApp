import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {fontSize, iconSize, spacing} from './constants/dimensons';
import {colors} from './constants/colors';
import {fontFamily} from './constants/font';
import {TextInput} from 'react-native-gesture-handler';
import Category from './components/Category';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.headline}>Find your suitable watch now.</Text>
      {/* Search Input */}
      <View style={styles.mainInputContainer}>
        <View style={styles.inputWrapper}>
          <Image
            source={require('../src/assets/Search.png')}
            style={styles.logo}
          />
          <TextInput style={styles.textInput} placeholder="Search Product" />
        </View>
        <View style={styles.categoryContainer}>
          <Image
            source={require('../src/assets/Category.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <Category />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    marginVertical: spacing.xxl,
    backgroundColor: colors.background,
    color: colors.black,
  },
  headline: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.Bold,
  },
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.placeholderText,
    borderRadius: 44,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,
  },
  logo: {
    width: iconSize.md,
    height: iconSize.md,
  },
});

export default HomeScreen;
