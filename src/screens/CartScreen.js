import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
var {width} = Dimensions.get('window');
// import icons
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Logo from '../screens/Logo';

const Cart = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Logo/>
      <Text style={styles.header}> Shopping Cart </Text>
      <View style={{flex: 1}}>
        
        
        <ScrollView>
        
        <View style={styles.container1}>
          <Image
            resizeMode={'contain'}
            style={styles.image}
            source={require('../assets/PC9.jpg')}
          />
          <View style={styles.container2}>
            <View>
              <Text style={styles.productName}>
                Hardware Product
              </Text>
              <Text style={{fontSize:17,paddingTop:4}}>Qty</Text>
            </View>
            <View
              style={styles.container3}>
              <Text
                style={styles.price}>
                Rs.6500 
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <FeatherAwesomeIcon name="trash-o" size={30} color={'black'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>


        

        
        <View style={{height:10}}/>
        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
          <Text style={styles.subTotal}>Sub Total</Text>
          <View style={styles.divider}/>
          <Text style={styles.subTotal}>12000</Text>
        </View>
        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
          <Text style={styles.subTotal}>Shipping</Text>
          <View style={styles.divider}/>
          <Text style={styles.subTotal}>0</Text>
        </View>
        <View style={styles.totalSection}>
          <Text style={styles.totalText}>Total</Text>
          <View style={styles.divider}/>
          <Text style={styles.subTotal}>12000</Text>
        </View>
      </ScrollView>

      </View>
    
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={()=>navigation.navigate('CheckoutScreen')}> 
        <Text
          style={styles.checkoutText}>
          CHECKOUT
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Cart;

const styles = StyleSheet.create({
  container1: {
    width: width - 20,
    margin: 5,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#cccccc',
    paddingBottom: 0,
  },
  container2: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 10,
    justifyContent: 'space-around',
  },
  container3:{
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 28,
    color: 'black',
    backgroundColor:'orange'
  },
  image: {
    width: width / 3,
    height: width / 3,
  },
  price:{
    fontWeight: 'bold',
    color: 'seagreen',
    fontSize: 20
  },
  productName:{
    fontWeight: 'bold',
    fontSize: 20
  },
  totalSection:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  totalText:{
    fontSize:25,
  fontWeight:'bold',
  marginHorizontal:10
 

 },
 divider:{
   height:1,
   borderColor:'#dddddd',
   borderWidth:StyleSheet.hairlineWidth,
   flex:1,
   marginHorizontal:16,
   marginTop:12
 },
 subTotal:{
   fontSize:18,
   paddingHorizontal:12
 },
 checkoutButton:{
  backgroundColor: 'orange',
  width: width - 40,
  alignItems: 'center',
  padding: 7,
  borderRadius: 20,
 },
 checkoutText:{
  fontSize: 24,
  fontWeight: 'bold',
  color: 'black',
 }
});




// const saveUserDb=()=>{
//   database()
//   .ref(`/CMSO/Users/${mobilenumber}/`)
//   .set({
//   Cart: ,
  
// })
//   .then(() => console.log('Data set.'));
// }