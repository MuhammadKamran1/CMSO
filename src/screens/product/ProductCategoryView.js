import React, {Component} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';


const ProductCategoryView=()=>{

    return(
       // <ScrollView>
          
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>
                           Box1
                        </Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>
                           Box1
                        </Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>
                           Box1
                        </Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>
                           Box1
                        </Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>
                           Box1
                        </Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>
                           Box1
                        </Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>
                           Box1
                        </Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>
                           Box1
                        </Text>
                    </View>
                </View>
            </View>
       
        //</ScrollView>

        

        
    );
}


export default ProductCategoryView;

const styles= StyleSheet.create({

    container:{
        width:'100%',
        height:'85%',
        padding:5,
        flexDirection:'row',
        flexWrap:'wrap'
       
    },
    box:{
        width:'50%',
        height:'50%',
        padding:5


    },
     
    inner:{
     flex:1,
     backgroundColor:'grey',
     alignItems:'center',
     justifyContent:'center',
    }





});