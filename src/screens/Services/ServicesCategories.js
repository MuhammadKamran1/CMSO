import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const ServicesCategories=({})=>{

    return(
        <View>
            <Text style={style.ProductsCart}>
                This page will show Services Categories List
            </Text>
        </View>
    )
}

export default ServicesCategories;

const style= StyleSheet.create({
    ProductsCart:{
        alignItems: 'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row',

    }



});