import React, {Component, useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {fontSize, iconSize, spacing} from './constants/dimensons';
import {colors} from './constants/colors';
import {fontFamily} from './constants/font';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import Category from './components/Category';
import ProductCard from './components/ProductCard';
import {smartWatches} from './data/smartwatches';
import {headphones} from './data/headphones';
import {smartPhones} from './data/smartphones';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Smart Watch');
  const [data, setData] = useState(smartWatches);
  const [filteredData, setFilteredData] = useState([data]);
  const [query, setQuery] = useState('');
  console.log(query);

  const handleUpdateCategory = newCategory => {
    if (newCategory === 'Smart Watch') {
      setSelectedCategory('Smart Watch');
      setData(smartWatches);
    } else if (newCategory === 'Headphone') {
      setSelectedCategory('Headphone');
      setData(headphones);
    } else if (newCategory === 'Smart Phones') {
      setSelectedCategory('Smart Phones');
      setData(smartPhones);
    }
  };

  useEffect(() => {
    const filteredData = data.filter(product =>
      query ? product.name.toLowerCase().includes(query.toLowerCase()) : true,
    );
    setFilteredData(filteredData);
  }, [query, data]);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            {/* Title */}
            <Text style={styles.headline}>Find your suitable watch now.</Text>
            {/* Search Input */}
            <View style={styles.mainInputContainer}>
              <View style={styles.inputWrapper}>
                <Image
                  source={require('../src/assets/Search.png')}
                  style={styles.logo}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Search Product"
                  onChangeText={text => setQuery(text)}
                />
              </View>
              <View style={styles.categoryContainer}>
                <Image
                  source={require('../src/assets/Category.png')}
                  style={styles.logo}
                />
              </View>
            </View>
            <Category
              selectedCategory={selectedCategory}
              handleUpdateCategory={handleUpdateCategory}
            />
          </>
        }
        data={filteredData}
        renderItem={({item, index}) => <ProductCard item={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.xl,
    marginVertical: spacing.xxl,
    backgroundColor: colors.background,
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
