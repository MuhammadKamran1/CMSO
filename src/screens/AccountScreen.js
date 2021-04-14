import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Account=({})=>{

    return(
        <View>
            <Text style={style.ProductsCart}>
                THIS IS AN ACCOUNT SCREEN
                </Text>
        </View>
    );
}


export default Account;

const style= StyleSheet.create({
    ProductsCart:{
        alignItems: 'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row',


    }



});