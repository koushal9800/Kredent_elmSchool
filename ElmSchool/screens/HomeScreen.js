
import * as React from 'react';
import { View, Text, ScrollView, Image,TouchableOpacity,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen( {navigation} ) {
    return (
        
      <ScrollView style={{flex:1}} >
      
     

      <View style={{height:1500}}>
  
        <Image style={{resizeMode:'stretch', width:'100%', height:'10%'}}
        source={require('../assests/elmschool.png')}
        />
        <View style={{ flexDirection:'row', justifyContent:'space-around', padding:10 }}>

        <TouchableOpacity style={{borderWidth:1,
        borderColor:'#000', 
        backgroundColor:'transparent',
         width:'40%', 
         borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        
        }}
        onPress={()=>navigation.navigate('FPlan')}
        >

            
            <Image style={{resizeMode:'contain',width:'70%'}}
            source={require('../assests/FPlan.png')}
            
            />

            <Text style={{
                fontSize:14,
                letterSpacing:2
            }} >Financial Planning</Text>

            <Text style={{
                fontSize:12,
                color:'#0A79DF',
                padding:10
            }} >
                1 module
            </Text>
            
            
        </TouchableOpacity>

        <TouchableOpacity style={{borderWidth:1,
        borderColor:'#000', 
        backgroundColor:'transparent',
         width:'40%', 
         borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        
        }}
        onPress={()=>navigation.navigate('FPlan')}
        >

            
            <Image style={{resizeMode:'contain',width:'70%'}}
            source={require('../assests/FMarket.jpg')}
            
            />

            <Text style={{
                fontSize:14,
                letterSpacing:2
            }} >Financial Markets</Text>

            <Text style={{
                fontSize:12,
                color:'#0A79DF',
                padding:10
            }} >
                1 module
            </Text>
            
            
        </TouchableOpacity>
        </View>



        <View style={{ flexDirection:'row', justifyContent:'space-around', padding:10 }}>

        <TouchableOpacity style={{borderWidth:1,
        borderColor:'#000', 
        backgroundColor:'transparent',
         width:'40%', 
         borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        
        }}
        onPress={()=>navigation.navigate('FPlan')}
        >

            
            <Image style={{resizeMode:'contain',width:'70%'}}
            source={require('../assests/FPlan.png')}
            
            />

            <Text style={{
                fontSize:14,
                letterSpacing:2
            }} >Financial Planning</Text>

            <Text style={{
                fontSize:12,
                color:'#0A79DF',
                padding:10
            }} >
                1 module
            </Text>
            
            
        </TouchableOpacity>

        <TouchableOpacity style={{borderWidth:1,
        borderColor:'#000', 
        backgroundColor:'transparent',
         width:'40%', 
         borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        
        }}
        onPress={()=>navigation.navigate('FPlan')}
        >

            
            <Image style={{resizeMode:'contain',width:'70%'}}
            source={require('../assests/FMarket.jpg')}
            
            />

            <Text style={{
                fontSize:14,
                letterSpacing:2
            }} >Financial Markets</Text>

            <Text style={{
                fontSize:12,
                color:'#0A79DF',
                padding:10
            }} >
                1 module
            </Text>
            
            
        </TouchableOpacity>
        </View>




        <View style={{ flexDirection:'row', justifyContent:'space-around', padding:10 }}>

        <TouchableOpacity style={{borderWidth:1,
        borderColor:'#000', 
        backgroundColor:'transparent',
         width:'40%', 
         borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        
        }}
        onPress={()=>navigation.navigate('FPlan')}
        >

            
            <Image style={{resizeMode:'contain',width:'70%'}}
            source={require('../assests/FPlan.png')}
            
            />

            <Text style={{
                fontSize:14,
                letterSpacing:2
            }} >Financial Planning</Text>

            <Text style={{
                fontSize:12,
                color:'#0A79DF',
                padding:10
            }} >
                1 module
            </Text>
            
            
        </TouchableOpacity>

        <TouchableOpacity style={{borderWidth:1,
        borderColor:'#000', 
        backgroundColor:'transparent',
         width:'40%', 
         borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        
        }}
        onPress={()=>navigation.navigate('FPlan')}
        >

            
            <Image style={{resizeMode:'contain',width:'70%'}}
            source={require('../assests/FMarket.jpg')}
            
            />

            <Text style={{
                fontSize:14,
                letterSpacing:2
            }} >Financial Markets</Text>

            <Text style={{
                fontSize:12,
                color:'#0A79DF',
                padding:10
            }} >
                1 module
            </Text>
            
            
        </TouchableOpacity>
        </View>




        <View style={{ flexDirection:'row', justifyContent:'space-around', padding:10 }}>

        <TouchableOpacity style={{borderWidth:1,
        borderColor:'#000', 
        backgroundColor:'transparent',
         width:'40%', 
         borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        
        }}
        onPress={()=>navigation.navigate('FPlan')}
        >

            
            <Image style={{resizeMode:'contain',width:'70%'}}
            source={require('../assests/FPlan.png')}
            
            />

            <Text style={{
                fontSize:14,
                letterSpacing:2
            }} >Financial Planning</Text>

            <Text style={{
                fontSize:12,
                color:'#0A79DF',
                padding:10
            }} >
                1 module
            </Text>
            
            
        </TouchableOpacity>

        <TouchableOpacity style={{borderWidth:1,
        borderColor:'#000', 
        backgroundColor:'transparent',
         width:'40%', 
         borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        
        }}
        onPress={()=>navigation.navigate('FPlan')}
        >

            
            <Image style={{resizeMode:'contain',width:'70%'}}
            source={require('../assests/FMarket.jpg')}
            
            />

            <Text style={{
                fontSize:14,
                letterSpacing:2
            }} >Financial Markets</Text>

            <Text style={{
                fontSize:12,
                color:'#0A79DF',
                padding:10
            }} >
                1 module
            </Text>
            
            
        </TouchableOpacity>
        </View>

        </View>
        </ScrollView>
        
      
    );
  }

  export default HomeScreen;