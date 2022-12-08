import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import orangberdoa from '../image/orangberdoa.png';

const DaftarDoa = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerheader}>
        <Image source={orangberdoa} style={styles.imageheader} />
        <Text style={styles.titleheader}>Kumpulan Doa Sehari-hari</Text>
      </View>
      <View style={styles.containerlistdoa}>
        <ScrollView
          style={{
            marginTop: 10,
          }}>
          <View style={styles.listdoa}>
            <TouchableOpacity onPress={() => navigation.navigate('Doa1')}>
              <Text style={styles.textdoa}>Doa Sebelum Memulai Aktivitas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listdoa}>
            <TouchableOpacity onPress={() => navigation.navigate('Doa2')}>
              <Text style={styles.textdoa}>Doa Sebelum Tidur</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listdoa}>
            <TouchableOpacity onPress={() => navigation.navigate('Doa3')}>
              <Text style={styles.textdoa}>Doa Bangun Tidur</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listdoa}>
            <TouchableOpacity onPress={() => navigation.navigate('Doa4')}>
              <Text style={styles.textdoa}>Doa Masuk Kamar Mandi</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listdoa}>
            <TouchableOpacity onPress={() => navigation.navigate('Doa5')}>
              <Text style={styles.textdoa}>Doa Sebelum Makan</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listdoa}>
            <TouchableOpacity onPress={() => navigation.navigate('Doa6')}>
              <Text style={styles.textdoa}>Doa Setelah Makan</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listdoa}>
            <TouchableOpacity onPress={() => navigation.navigate('Doa7')}>
              <Text style={styles.textdoa}>Doa Keluar Rumah</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listdoa}>
            <TouchableOpacity onPress={() => navigation.navigate('Doa8')}>
              <Text style={styles.textdoa}>Doa Masuk Rumah</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  containerheader: {
    backgroundColor: '#5172AD',
    height: '27%',
  },
  imageheader: {
    height: 100,
    width: 100,
    marginTop: 10,
    marginLeft: 10,
  },
  titleheader: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
  },
  containerlistdoa: {
    backgroundColor: '#ffffff',
    height: '77%',
    marginTop: -30,
    paddingTop: 5,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  listdoa: {
    height: 60,
    backgroundColor: '#5172AD',
    borderRadius: 20 / 2,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginVertical: 15,
  },
  textdoa: {
    fontSize: 17,
    fontWeight: '500',
  },
});

export default DaftarDoa;
