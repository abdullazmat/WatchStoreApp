import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors} from '../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {fontSize, iconSize, spacing} from '../constants/dimensons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontFamily} from '../constants/font';

const CartButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={['#8743FF', '#4136F1', '#192f6a']}
        start={{
          x: 0,
          y: 0.5,
        }}
        end={{
          x: 1,
          y: 0,
        }}
        style={styles.linearGradient}>
        <MaterialCommunityIcons
          name={'cart-outline'}
          size={iconSize.md}
          color={colors.background}
        />
        <Text style={styles.buttonText}>Add To Cart</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  linearGradient: {
    width: '90%',
    padding: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    borderRadius: spacing.md,
  },
  buttonText: {
    color: colors.background,
    fontFamily: fontFamily.Bold,
    fontSize: fontSize.md,
  },
});

export default CartButton;
