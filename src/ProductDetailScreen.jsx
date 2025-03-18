import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {fontSize, iconSize, spacing} from './constants/dimensons';
import {colors} from './constants/colors';
import {useRoute} from '@react-navigation/native';
import Header from './components/Header';
import ProductCaraousel from './components/ProductCaraousel';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontFamily} from './constants/font';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import CartButton from './components/cartButton';

const ProductDetailScreen = () => {
  const item = useRoute().params.item;
  const [selectColor, setSelectColor] = useState('Silver');
  const [selectedTab, setSelectedTab] = useState('Details');
  const colorsData = [
    {
      colorName: 'Silver',
      colorValue: '#F0F2F2',
    },
    {
      colorName: 'Orange',
      colorValue: '#F25745',
    },
    {
      colorName: 'Green',
      colorValue: '#5a662a',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.ScrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <Header />
        <ProductCaraousel images={item.images} />
        <View style={styles.titleContainer}>
          <View style={styles.titleWrapper}>
            <Text style={styles.productTitle}>{item.name}</Text>
          </View>
        </View>
        <View style={styles.ratingWrapper}>
          <Text style={styles.productBrand}>{item.brand}</Text>
          <View style={styles.rating}>
            <AntDesign name={'star'} size={iconSize.md} color={colors.yellow} />
            <Text style={styles.ratingValue}>4.9</Text>
          </View>
        </View>
        <View style={styles.colorContainer}>
          <Text style={styles.colorHeading}>Colors</Text>
          <FlatList
            data={colorsData}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[
                  styles.selectColorContainer,
                  selectColor === item.colorName && {
                    borderColor: colors.purple,
                    borderWidth: 2,
                  },
                ]}
                onPress={() => setSelectColor(item.colorName)}>
                <View
                  style={[
                    styles.circleColor,
                    {
                      backgroundColor: item.colorValue,
                    },
                  ]}
                />
                <Text style={styles.colorText}>{item.colorName}</Text>
              </TouchableOpacity>
            )}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: spacing.lg}} />}
          />
        </View>
        <View style={styles.tabs}>
          <View>
            <TouchableOpacity onPress={() => setSelectedTab('Details')}>
              <Text
                style={[
                  styles.detailHeading,
                  selectedTab === 'Details' && {
                    color: colors.purple,
                  },
                ]}>
                Details
              </Text>
              <View style={selectedTab === 'Details' && styles.underline} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => setSelectedTab('Reviews')}>
              <Text
                style={[
                  styles.reviewsHeading,
                  selectedTab === 'Reviews' && {color: colors.purple},
                ]}>
                Reviews
              </Text>
              <View style={selectedTab === 'Reviews' && styles.underline} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tabsInfo}>
          <Text style={styles.tabsText}>
            {selectedTab === 'Details' ? item.details : item.review}
          </Text>
        </View>
      </ScrollView>
      <CartButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  ScrollViewContainer: {
    padding: spacing.xl,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  titleWrapper: {
    flex: 1,
  },
  productTitle: {
    fontFamily: fontFamily.Bold,
    textTransform: 'capitalize',
    color: colors.black,
    fontSize: fontSize.lg,
  },
  productBrand: {
    fontFamily: fontFamily.Medium,
    fontSize: fontSize.md,
    color: colors.gray,
    paddingVertical: spacing.sm,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderRadius: spacing.md,
    height: 50,
  },
  rating: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  ratingValue: {
    color: colors.gray,
    fontSize: fontSize.md,
  },
  colorContainer: {
    paddingTop: spacing.sm,
  },
  colorHeading: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.SemiBold,
    color: colors.black,
    paddingBottom: spacing.md,
  },
  selectColorContainer: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 4,
    padding: spacing.sm,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleColor: {
    height: spacing.md,
    width: spacing.md,
    backgroundColor: colors.purple,
    borderRadius: spacing.md / 2,
  },
  colorText: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.Medium,
    color: colors.black,
  },
  tabs: {
    paddingTop: spacing.lg,
    flexDirection: 'row',
    gap: spacing.md,
  },
  detailHeading: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
  reviewsHeading: {
    fontSize: fontSize.md,
    fontFamily: fontFamily.Medium,
  },
  underline: {
    borderBottomWidth: 2,
    borderBottomColor: colors.purple,
    width: '80%',
  },
  tabsInfo: {
    paddingTop: spacing.sm,
    paddingBottom: spacing.xxl,
  },
  tabsText: {
    color: colors.gray,
    fontSize: fontSize.md,
    fontFamily: fontFamily.Regular,
  },
});

export default ProductDetailScreen;
