import React from 'react';
import {
  TouchableOpacity,
  Alert,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/Feather';
import FeatherAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Ripple from 'react-native-material-ripple';

//import Share from 'react-native-share';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/profileBG.jpg')}
        style={{width: 360, height: 650, flex: 1, opacity: 0.2}}
      />
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image source={require('../assets/H.jpg')} size={90} />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              HUZAIFA{' '}
            </Title>
            <Caption style={styles.caption}>@HUZAIFA</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-pin" color="black" size={20} />
          <Text style={{color: 'black', marginLeft: 20, fontSize: 16}}>
            Lahore, PAKISTAN
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="black" size={20} />
          <Text style={{color: 'black', marginLeft: 20, fontSize: 16}}>
            03044256928
          </Text>
        </View>
        <View style={styles.row}>
          <EntypoIcons name="email" color="black" size={20} />
          <Text style={{color: 'black', marginLeft: 20, fontSize: 16}}>
            hfarrukh.bscs17seecs@gmail.com
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Title>20000</Title>
          <Caption>Wallet</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <View style={styles.menuItem}>
          <EntypoIcons name="open-book" color="black" size={25} />
          <TouchableOpacity onPress={() => Alert.alert('Log 0ut')}>
            <Text style={styles.menuItemText}>About us</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItem}>
          <FeatherAwesomeIcon name="share" color="black" size={25} />
          <TouchableOpacity onPress={() => Alert.alert('Tell Your Friends')}>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuItem}>
          <MaterialIcons name="support-agent" color="black" size={25} />
          <TouchableOpacity onPress={() => Alert.alert('Support')}>
            <Text style={styles.menuItemText}>Support</Text>
          </TouchableOpacity>
        </View>

        <View style={{paddingHorizontal: 80, size: 200}}>
          <Button
            title="Log Out"
            color="black"
            onPress={() => Alert.alert('Log 0ut')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    //  flex: 1,
    //backgroundColor:"#f08080"
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: 'black',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 26,
  },
});
