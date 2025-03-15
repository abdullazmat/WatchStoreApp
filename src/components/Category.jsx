import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {fontSize, spacing} from '../constants/dimensons';
import {fontFamily} from '../constants/font';
import {colors} from '../constants/colors';
import {FlatList} from 'react-native-gesture-handler';
import {categories} from '../data/categories';

const Category = ({selectedCategory, handleUpdateCategory}) => {
  return (
    <FlatList
      data={categories}
      renderItem={({item, index}) => (
        <TouchableOpacity onPress={() => handleUpdateCategory(item.name)}>
          <Text
            style={[
              styles.categoryText,
              selectedCategory === item.name && {color: colors.purple},
            ]}>
            {item.name}
          </Text>
          <View
            style={selectedCategory === item.name ? styles.underline : null}
          />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      horizontal
      ItemSeparatorComponent={<View style={{paddingHorizontal: spacing.sm}} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};
const styles = StyleSheet.create({
  categoryText: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: colors.gray,
  },
  underline: {
    borderBottomColor: colors.purple,
    borderBottomWidth: 2,
    width: '70%',
  },
});

export default Category;
