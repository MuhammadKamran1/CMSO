import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../SearchbarPlusImages'
import Icon from 'react-native-vector-icons/Feather'


const ProductCategories=({})=>{

    return(
        <View>
            <SearchBar/>
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