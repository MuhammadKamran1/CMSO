import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


const ProductCategories=({})=>{

    return(
        <View>
            <Text style={style.ProductsCart}>
                This page will show Product Categories List
            </Text>
        </View>
    )
}

export default ProductCategories;

const style= StyleSheet.create({
    ProductsCart:{
        alignItems: 'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row',


    }



});