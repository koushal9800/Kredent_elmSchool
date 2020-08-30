import  React,  {useState}  from 'react';
import { View, Text, ScrollView, Image,TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Container, Header, Content, Picker, Form } from "native-base";

function FPlanScreen({ navigation }) {
  const [selected, setSelected] = useState('key0');

  function onValueChange() {
    
    setSelected({selected});
  }

    return (
      <ScrollView style={{flex:1, }}>
  
  <View style={{justifyContent:'center', alignItems:'center'}}>
  <Image style={{resizeMode:'contain',width:'40%'}}
            source={require('../assests/FPlan.png')}/>

<Text style={{
                fontSize:32,
                letterSpacing:5
            }} >Financial Planning</Text>
  </View>

              
            

          <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: '100%', padding:10, }}
              selectedValue={selected}
             onValueChange={onValueChange}
            >
              <Picker.Item label="English" value="key0" />
              <Picker.Item label="Hindi" value="key1" />
              
            </Picker>
          </Form>


          <TouchableOpacity 
       onPress={()=>navigation.navigate('Savings')}

       style={{borderColor:'#000', borderWidth:1, borderRadius:10, margin:10,justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}
        >

            
            <Image style={{width:'90%', height:260, }}
            source={require('../assests/Sav&Invest.jpg')}
            
            />

           
            

            <Text style={{
                
                fontSize:20,
                textAlign:'center',
                padding:10,
            }} >Savings and Investment</Text>

            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

            <Feather 
                    name="eye"
                    color="grey"
                    size={20}
                    />

                    <Text style={{paddingLeft:10, color:'grey'}}>
                      84 Views
                    </Text>

            </View>
            
            
        </TouchableOpacity>

        <TouchableOpacity 
       onPress={()=>navigation.navigate('Savings')}

       style={{borderColor:'#000', borderWidth:1, borderRadius:10, margin:10,justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}
        >

            
            <Image style={{width:'90%', height:260, }}
            source={require('../assests/Sav&Invest.jpg')}
            
            />

           
            

            <Text style={{
                
                fontSize:20,
                textAlign:'center',
                padding:10,
            }} >Savings and Investment</Text>

            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

            <Feather 
                    name="eye"
                    color="grey"
                    size={20}
                    />

                    <Text style={{paddingLeft:10, color:'grey'}}>
                      84 Views
                    </Text>

            </View>
            
            
        </TouchableOpacity>
       
        
  
      </ScrollView>
    );
  }

  export default FPlanScreen;