import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import orangberdoa from '../image/orangberdoa.png';

const DaftarDoa = ({navigation}) => {
  return (
    <View
      style={{
        height: '100%',
      }}>
      <View
        style={{
          backgroundColor: '#5172AD',
          height: '27%',
        }}>
        <Image
          source={orangberdoa}
          style={{
            height: 100,
            width: 100,
            marginTop: 10,
            marginLeft: 10,
          }}
        />
        <Text
          style={{
            marginLeft: 10,
            marginTop: 10,
            fontSize: 18,
            fontWeight: '500',
            color: '#ffffff',
          }}>
          Kumpulan Doa Sehari-hari
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#ffffff',
          height: '77%',
          marginTop: -30,
          paddingTop: 5,
          paddingHorizontal: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <ScrollView
          style={{
            marginTop: 10,
          }}>
          <View
            style={{
              height: 60,
              backgroundColor: '#5172AD',
              borderRadius: 20 / 2,
              paddingHorizontal: 20,
              justifyContent: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',
              }}>
              Doa Sebelum Memulai Aktivitas
            </Text>
          </View>
          <View
            style={{
              height: 60,
              backgroundColor: '#5172AD',
              borderRadius: 20 / 2,
              paddingHorizontal: 20,
              justifyContent: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',
              }}>
              Doa Sebelum Tidur
            </Text>
          </View>
          <View
            style={{
              height: 60,
              backgroundColor: '#5172AD',
              borderRadius: 20 / 2,
              paddingHorizontal: 20,
              justifyContent: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',
              }}>
              Doa Bangun Tidur
            </Text>
          </View>
          <View
            style={{
              height: 60,
              backgroundColor: '#5172AD',
              borderRadius: 20 / 2,
              paddingHorizontal: 20,
              justifyContent: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',
              }}>
              Doa Masuk Kamar Mandi
            </Text>
          </View>
          <View
            style={{
              height: 60,
              backgroundColor: '#5172AD',
              borderRadius: 20 / 2,
              paddingHorizontal: 20,
              justifyContent: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',
              }}>
              Doa Sebelum Makan
            </Text>
          </View>
          <View
            style={{
              height: 60,
              backgroundColor: '#5172AD',
              borderRadius: 20 / 2,
              paddingHorizontal: 20,
              justifyContent: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',
              }}>
              Doa Setelah Makan
            </Text>
          </View>
          <View
            style={{
              height: 60,
              backgroundColor: '#5172AD',
              borderRadius: 20 / 2,
              paddingHorizontal: 20,
              justifyContent: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',
              }}>
              Doa Keluar Rumah
            </Text>
          </View>
          <View
            style={{
              height: 60,
              backgroundColor: '#5172AD',
              borderRadius: 20 / 2,
              paddingHorizontal: 20,
              justifyContent: 'center',
              marginVertical: 15,
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',
              }}>
              Doa Masuk Rumah
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DaftarDoa;
