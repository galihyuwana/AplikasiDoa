import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import iconberdoa from '../image/iconberdoa.png';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#5172AD',
      }}>
      <View
        style={{
          alignItems: 'center',
          height: '75%',
        }}>
        <Image
          source={iconberdoa}
          style={{
            borderRadius: 1000,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: '#ffffff',
            marginTop: 10,
          }}>
          KUMPULAN DOA SEHARI-HARI
        </Text>

        <View
          style={{
            marginTop: 40,
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
              height: 40,
              width: 150,
              borderRadius: 5,
            }}
            onPress={() => navigation.navigate('Doa')}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: '#575D69',
              }}>
              DAFTAR DOA
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
              marginTop: 15,
              height: 40,
              width: 150,
              borderRadius: 5,
            }}
            onPress={() => navigation.navigate('About')}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: '#575D69',
              }}>
              About
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
