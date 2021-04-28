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
import SearchBar from '../../SearchBar';

const PSC2 = ({}) => {
  return (
    <ScrollView>
      <View>
       <SearchBar/>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
            marginTop: 2,
            marginBottom: 5,
          }}>
          KITCHEN AND BATHROOM
        </Text>
        <TouchableOpacity onPress={() => Alert.alert('Hardware')}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../../assets/PSC1.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Kitchen</Text>
                <Text style={styles.cardDetails}>
                  Description of the Product
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert('Kitchen And Bthroom')}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../../assets/PSC1.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Kitchen Worktops</Text>
                <Text style={styles.cardDetails}>
                  Description of the Product
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert('Outdoor And Garden')}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../../assets/PSC1.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Bathrooms</Text>
                <Text style={styles.cardDetails}>
                  Description of the Product
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert('Tools and Construction Machinery')}>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require('../../../assets/PSC1.jpg')}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>
                  Showering
                </Text>
                <Text style={styles.cardDetails}>
                  Description of the Product
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PSC2;

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