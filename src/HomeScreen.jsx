import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {fontSize, spacing} from './constants/dimensons';
import {colors} from './colors/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find your suitable watch now.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    paddingTop: spacing.xxl,
    backgroundColor: colors.background,
    color: colors.black,
  },
  headline: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
