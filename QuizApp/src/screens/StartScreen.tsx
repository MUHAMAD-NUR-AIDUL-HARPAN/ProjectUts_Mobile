import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from '../style/font_style';
import {containerStyle} from '../style/container_style';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';


const StartScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // source={require('../../../assets/profile.png')}
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        position: 'relative',
      }}>
      <Image
        source={require('../../assets/start-backround-quiz.jpg')}
        style={{
          width: '100%',
          height: 500,
          marginTop: 100,
        }}
      />
      <View
        style={{
          display: 'flex',

          position: 'absolute',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <Text style={[style.whiteLarge, {textAlign: 'center', width: 280}]}>
        Click Start to start the quiz
        </Text>
        <View style={{height: 10}} />
        <Text style={[style.whiteHint, {width: 270, textAlign: 'center'}]}>
          Remember, this quiz is your chance to show what you've learned. Stay focused and do your best.
        </Text>
        <View style={{height: 25}} />

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
        style={{
          backgroundColor: '#CCE5FF',
          paddingHorizontal: 55,
          paddingVertical: 20,
          borderRadius: 15,
          textAlign: 'center',
          fontSize: 20,
          alignItems: 'center',
          fontWeight: '900'
        }}>Start</Text>

          </TouchableOpacity>
        <View style={{height: 40}} />
      </View>
    </View>
  );
};

export default StartScreen;
