import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import SearchBar from '../SearchBar';

const ProductCategoryView=()=>{

  const[people, setPeople]=useState([

 {name:"Kamran", key:'1'  },
 {name:"ali", key:'2'  },
 {name:"umer", key:'3'  },
  ]);


    return(
      
      <View>
          <SearchBar/>
         <View style={styles.container}>
           
           <FlatList
             data={people}
             renderItem={({item})=>(
              <View style={styles.box}>
              <View style={styles.inner}>
                <Text>{item.name}</Text>
              </View>
              </View>
             )}
          
            />

      </View>
      </View>
    );
  }

  export default ProductCategoryView;

  const styles = StyleSheet.create({

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
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"grey"
  },

  })