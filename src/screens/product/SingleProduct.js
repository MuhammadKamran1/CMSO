import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import Logo from '../Logo';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Ionicons';


const SingleProduct = ({route,navigation}) => {
  const [data, setData] = useState({});

  useEffect(async () => {
    console.log('HERE I AM');
    console.log('This is the value of the route ', route?.params?.subCategory);
    database()
      .ref(`CMSO/Product Categories/${route?.params?.subCategory}`)
      .on('value', snapshot => {
        setData(snapshot.val());
        console.log('This is my snapshot value ', snapshot.val());
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{height: 50, backgroundColor: 'white'}}>
        <Logo />
      </View>
      <View style={{backgroundColor: 'lightskyblue', flex: 1}}>
        <ScrollView>
          <View>
            <View style={styles.box}>
              <Image style={styles.image} source={{uri: data.Image}} />
            </View>

            <Text style={styles.text}>Name: {data.Name}</Text>
            <Text style={styles.text}>Price: {data.Price}</Text>

            <View style={styles.container}>
              <Text style={styles.text}>Description</Text>
              <Text style={styles.description}>{data.Description}</Text>
            </View>
            <View style={styles.review}>
              <Text style={styles.text}>Customer's Review</Text>
              <TextInput placeholder="  Add Review here" />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal:20,height:50, justifyContent:'center'}}>
                
                <Text style={{fontSize:16,paddingHorizontal:4}}>Quantity</Text>
                <TouchableOpacity>
                  <Icon name="ios-remove-circle" size={30} color={'black'} />
                </TouchableOpacity>
                <Text style={{paddingHorizontal: 8, fontWeight: 'bold'}}>
                  5
                </Text>
                <TouchableOpacity>
                  <Icon name="ios-add-circle" size={30} color={'black'} />
                </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.cartButton}
        onPress={()=>navigation.navigate('Cart')}> 
        <Text
          style={styles.cartText}>
          ADD TO CART
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    borderColor: 'black',
    borderWidth: 3,
    resizeMode:'stretch'

  },
  box: {
    alignItems: 'center',
    paddingTop: 8,
    width: 360,
    height: 210,
    backgroundColor: 'lightskyblue',
  },

  logo: {
    width: '10%',
    height: '10%',
  },
  text: {
    fontWeight: '700',
    fontSize: 18,
    color: '#483d8b',
    paddingHorizontal: 10,
    height: 30,
  },
  description: {
    paddingHorizontal: 15,
    fontSize: 15,
    //height: 50,
  },
  container: {
    paddingTop: 5,
    backgroundColor: 'lightcyan',
    borderColor: 'black',
  },

  review: {
    paddingTop: 5,
    backgroundColor: 'lightcyan',
    height: 200,
    paddingTop: 20,
  },
  button: {
    backgroundColor: '#1c313a',
    borderRadius: 25,
    width: 300,
    marginVertical: 13,
  },
  cartButton:{
    backgroundColor: 'orange',
    //width:30,
    //alignItems: 'center',
    padding: 12,
    borderRadius: 20,
    marginHorizontal:15
   },
   cartText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
   }
});
