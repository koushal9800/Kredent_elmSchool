import  React,  {useState}  from 'react';
import { View, Text, ScrollView, Image,TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Picker, Form } from "native-base";
import Swiper from "react-native-web-swiper";

import ScrollContent from './ScrollContent';

function SavingsScreen({ navigation }) {
  const { width } = Dimensions.get("window");

    return (
      

  
  <View style={{flex:1}}>

              
                      

              <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center', padding:15 }}>

                <FontAwesome name="bookmark" size={26} color="#F3B63A" />
                <Text style={{ color:'#487EB0', fontSize:20, paddingLeft:5}}>Financial Planning</Text>

              </View>

              <Text style={{  fontSize:16, color:'black', fontSize:30, textAlign:'center'}}>Savings and Investment</Text>



              <ScrollView style={{flex:1,   
            }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                >
                <ScrollContent style={{width:Dimensions.get('window').width,
            height:Dimensions.get('window').height,  }} />
                <ScrollContent  style={{width:Dimensions.get('window').width,
            height:Dimensions.get('window').height,  }}/>
                <ScrollContent  style={{width:Dimensions.get('window').width,
            height:Dimensions.get('window').height,  }}/>
                </ScrollView>

                 

              </View>












            

    );
  };

  export default SavingsScreen;

  const styles = StyleSheet.create({
    
    slideContainer: {
        flex: 1,
        width:Dimensions.get('window').width
      },
    
    slide:{
        backgroundColor: "#fff",
        
    },
    TextOne:{
      fontSize:18,
      padding:10,
      textAlign:'justify'
    },
    image:{
      resizeMode:'contain',
      borderWidth:1,
      borderColor:'black',
      height:300,
      width:300,
      margin:100,
      //shadowOpacity:0.8,
      //shadowColor:'black'
      
  },
  })