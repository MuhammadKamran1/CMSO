import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


const SpecificProductCategory=({})=>{

    return(
        <View>
            <Text style={style.ProductsCart}>
                This page will show Products with Images and Prices.
                </Text>
        </View>
    );
}


export default SpecificProductCategory;

const style= StyleSheet.create({
    ProductsCart:{
        alignItems: 'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row',


    }



});