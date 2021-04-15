import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../SearchbarPlusImages'
import Icon from 'react-native-vector-icons/Feather'


const ProductCategories=({})=>{

    return(
        <View>
            <Text style={style.ProductsCart}>
                This page will show Product Categories List
            </Text>
            <Icon name="car" size={40}/>
            {/* <SearchBar /> */}
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