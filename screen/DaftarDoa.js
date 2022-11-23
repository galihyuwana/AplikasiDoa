import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import orangberdoa from '../image/orangberdoa.png'

const DaftarDoa = () => {
    return (
        <View style={{
            height: '100%'
        }}>
            <View style={{
                backgroundColor: '#5172AD',
                height: '27%',
            }}>
                <Image 
                source={orangberdoa} 
                style={{
                    height: 100,
                    width: 100,
                    marginTop:10,
                    marginLeft:10,
                }}
                />
                <Text style={{
                    marginLeft: 10,
                    marginTop:10,
                    fontSize: 18,
                    fontWeight:'500',
                    color:'#ffffff'
                }}>Kumpulan Doa Sehari-hari</Text>
            </View>
            <ScrollView style={{
                backgroundColor: '#ffffff',
                marginTop: -30,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }}>
                <View style={{height:200,}}><Text>HAHAHAHAHAH</Text></View>
                <View style={{height:200,}}><Text>HAHAHAHAHAH</Text></View>
                <View style={{height:200,}}><Text>HAHAHAHAHAH</Text></View>
                <View style={{height:200,}}><Text>HAHAHAHAHAH</Text></View>
                <View style={{height:200,}}><Text>HAHAHAHAHAH</Text></View>
            </ScrollView>
        </View>
    )
}

export default DaftarDoa
