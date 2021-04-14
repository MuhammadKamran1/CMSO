import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Cart=({})=>{

    return(
        <View>
            <Text style={style.ProductsCart}>
                THIS IS A CART PAGE
                </Text>
        </View>
    );
}


export default Cart;

const style= StyleSheet.create({
    ProductsCart:{
        alignItems: 'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row',


    }



});