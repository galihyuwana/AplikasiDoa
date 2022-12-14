import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import profile from '../image/galih.jpg';

const About = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor="#212121" />
      <View
        style={{
          backgroundColor: '#5172AD',
          height: 250,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 30,
          }}>
          <Image
            source={profile}
            style={{
              width: 140,
              height: 140,
              borderRadius: 200 / 2,
            }}
          />
          <View
            style={{
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 25,
                color: '#ffffff',
              }}>
              Galih Eka Yuwana
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '400',
              }}>
              XII RPL-A | SMKN 2 SURAKARTA
            </Text>
          </View>
        </View>
      </View>
      {/* nama end */}

      {/* data diri start */}
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          paddingHorizontal: 20,
          paddingTop: 40,
        }}>
        {/* phone start */}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#5172AD',
            height: 100,
            paddingLeft: 20,
            alignItems: 'center',
            borderRadius: 5,
            borderBottomWidth: 3,
            borderBottomColor: '#5a5c53',
          }}>
          <Icon
            style={{
              paddingTop: 10,
            }}
            name="phone-alt"
            size={30}
            color="#212121"
          />
          <View
            style={{
              flex: 1,
              marginLeft: 25,
              marginRight: 25,
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 25,
              }}>
              No. Hp
            </Text>
            <Text
              style={{
                fontSize: 22,
                marginTop: 5,
              }}>
              +62812 3355 9837
            </Text>
          </View>
        </View>
        {/* phone end */}

        {/* alamat start */}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#5172AD',
            height: 100,
            marginTop: 20,
            paddingLeft: 20,
            borderRadius: 5,
            alignItems: 'center',
            borderBottomWidth: 3,
            borderBottomColor: '#5a5c53',
          }}>
          <Icon
            style={{
              paddingTop: 10,
            }}
            name="map-marker-alt"
            size={30}
            color="#212121"
          />
          <View
            style={{
              flex: 1,
              marginLeft: 25,
              marginRight: 25,
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 25,
              }}>
              Alamat
            </Text>
            <Text
              style={{
                fontSize: 22,
                marginTop: 5,
              }}>
              Sukoharjo, Jawa Tengah, Indonesia
            </Text>
          </View>
        </View>
        {/* alamat end */}

        {/* email start */}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#5172AD',
            marginTop: 20,
            height: 100,
            paddingLeft: 20,
            borderRadius: 5,
            alignItems: 'center',
            borderBottomWidth: 3,
            borderBottomColor: '#5a5c53',
          }}>
          <Icon
            style={{
              paddingTop: 10,
            }}
            name="envelope"
            size={30}
            color="#212121"
          />
          <View
            style={{
              flex: 1,
              marginLeft: 25,
              marginRight: 25,
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '600',
              }}>
              Email
            </Text>
            <Text
              style={{
                fontSize: 22,
                marginTop: 5,
              }}>
              galiheka@smkn2-solo.net
            </Text>
          </View>
        </View>
        {/* email end */}
        {/* <View
          style={{
            alignItems: 'flex-end',
            marginTop: 25,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Skill Coding')}>
            <Text
              style={{
                fontSize: 19,
                color: '#43A3FF',
                fontWeight: '500',
              }}>
              Skill Coding...{' '}
            </Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
      {/* sosmed */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          paddingBottom: 15,
        }}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="facebook" size={30} color="#bdbdbd" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="instagram" size={30} color="#bdbdbd" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="github" size={30} color="#bdbdbd" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="twitter" size={30} color="#bdbdbd" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="linkedin" size={30} color="#bdbdbd" />
        </TouchableOpacity>
      </View>
      {/* data diri end */}
    </View>
  );
};

export default About;
