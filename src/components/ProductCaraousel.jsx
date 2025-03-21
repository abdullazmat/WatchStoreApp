import React, {Component, useRef, useState} from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import {spacing} from '../constants/dimensons';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../constants/colors';
const screenWidth = Dimensions.get('window').width;

const ProductCaraousel = ({images}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const onViewRef = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveSlide(viewableItems[0].index);
    }
  }).current;

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <View style={styles.productImageWrapper}>
            <Image source={{uri: item}} style={styles.productImage} />
          </View>
        )}
        onViewableItemsChanged={onViewRef}
        viewabilityConfig={viewConfigRef}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={screenWidth}
        decelerationRate="fast"
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeSlide && {
                width: 20,
                borderRadius: 32,
                backgroundColor: colors.purple,
              },
            ]}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    paddingTop: spacing.sm,
  },
  productImage: {
    height: 350,
    width: 350,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: spacing.md,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: spacing.sm,
    backgroundColor: colors.gray,
  },
});

export default ProductCaraousel;
