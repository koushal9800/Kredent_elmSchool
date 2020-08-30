import  React,  {useState}  from 'react';
import { View, Text, ScrollView, Image,TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Picker, Form } from "native-base";
import Swiper from "react-native-web-swiper";

function SavingsScreen({ navigation }) {
  const { width } = Dimensions.get("window");

    return (
      

  
  <View style={{flex:1}}>

              
              

              <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center', padding:15 }}>

                <FontAwesome name="bookmark" size={26} color="#F3B63A" />
                <Text style={{ color:'#487EB0', fontSize:20, paddingLeft:5}}>Financial Planning</Text>

              </View>

              <Text style={{  fontSize:16, color:'black', fontSize:30, textAlign:'center'}}>Savings and Investment</Text>






              <Swiper index={0}>
                    <ScrollView style={[styles.slideContainer,styles.slide]}>
                    <Image source={require('../assests/1.png')} style={styles.image}></Image>
                        <Text style={styles.TextOne}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </Text>
                    </ScrollView>

                    <ScrollView style={[styles.slideContainer,styles.slide]}>

                    <Image source={require('../assests/2.png')} style={styles.image}></Image>
                        <Text style={styles.TextOne}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </Text>
                    
                  </ScrollView>

                    <ScrollView style={[styles.slideContainer,styles.slide]}>

                    <Image source={require('../assests/3.png')} style={styles.image}></Image>
                        <Text style={styles.TextOne}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </Text>
                    
                    </ScrollView>

                    <ScrollView style={[styles.slideContainer,styles.slide]}>

                    <Image source={require('../assests/Fin.jpg')} style={styles.image}></Image>
                        <Text style={styles.TextOne}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </Text>
                    
                    </ScrollView>

                    <ScrollView style={[styles.slideContainer,styles.slide]}>

                    <Image source={require('../assests/w1.jpg')} style={styles.image}></Image>
                        <Text style={styles.TextOne}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </Text>
                    
                    </ScrollView>
                </Swiper>
  

              </View>












            

    );
  };

  export default SavingsScreen;

  const styles = StyleSheet.create({
    
    slideContainer: {
        flex: 1,
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