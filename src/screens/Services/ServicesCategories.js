import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
//import { Searchbar } from 'react-native-paper';
import SearchBar from '../SearchBar';
import SwiperImages from '../SwiperImages';

const ProductCategories = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{backgroundColor:'#322514'}}>
        <SearchBar />
        <SwiperImages />

        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 5,
            marginBottom: 5,
          }}>
          SERVICES CATEGORIES
        </Text>
        <TouchableOpacity onPress={() => Alert.alert('Developers')}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../assets/SC1.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Developers</Text>
                <Text style={styles.cardDetails}>
                  Description of the Service
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert('Builder and Contractor')}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../assets/SC2.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Builder and Contractor</Text>
                <Text style={styles.cardDetails}>
                  Description of the Service
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            Alert.alert('Consultants, Architect and Interior Designer')
          }>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../assets/SC3.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>
                  Consultants, Architect and Interior Designer
                </Text>
                <Text style={styles.cardDetails}>
                  Description of the Service
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert('General')}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../assets/SC4.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>General</Text>
                <Text style={styles.cardDetails}>
                  Description of the Service
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardsWrapper: {
    marginTop: 2,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 5,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
