import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ScrollContent () {
   
        return (
       
            <Content>
          <Card style={{flex: 1, width:Dimensions.get('window').width,}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assests/1.png')} />
                <Body>
                  <Text>Koushal Barick</Text>
                  <Text note>Kredent Infoedge Pvt. Ltd.</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body style={{justifyContent:'center', alignItems:'center',}}>
                <Image source={require('../assests/1.png')} style={{height: 200, width: 300, flex: 1, resizeMode:'contain'}}/>
                <Text style={{ textAlign:'justify', fontSize:20 }}>
                Looking at data one piece at a time is more efficient when you consider people you might want to date, restaurants, streaming music, or local events you might want to check out.
NativeBase Deck Swiper helps you evaluate one option at a time, instead of selecting from a set of options.
Replacing Component: React Native View
        </Text>
        <Text style={{ textAlign:'justify', fontSize:20 }}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Ionicons name="md-albums" size={26} />
                  <Text style={{marginLeft:10}}>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
        
        );
    }


    export default ScrollContent;
