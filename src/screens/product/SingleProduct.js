import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


const ProductCategoryView=({})=>{

    return(
        <View>
            <Text style={style.ProductsCart}>
                THIS SCREEN WILL SHOW SINGLE PRODUCT WITH DESCRIPTION AND REVIEW SECTION
                </Text>
        </View>
    );
}


export default ProductCategoryView;

const style= StyleSheet.create({
    ProductsCart:{
        alignItems: 'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row',


    }



});