import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Doa8() {
  return (
    //Doa Masuk Rumah
    <View>
      <View style={styles.containertitle}>
        <Text style={styles.title}>Doa Masuk Rumah</Text>
      </View>
      <Text style={styles.textdoa}>
        بِسْمِ اللهِ وَلَجْنَا وَبِسْمِ اللهِ خَرَجْنَا ، وَعَلَى اللهِ رَبَّنَا
        تَوَكَّلْنَا{' '}
      </Text>
      <Text style={styles.textlatin}>
        Bismillahi walajnaa wa bismillahi kharajnaa wa-alallaahi rabbina
        tawak-kalnaa.{' '}
      </Text>
      <View style={styles.containerarti}>
        <Text style={styles.textarti}>Artinya:</Text>
        <Text style={styles.textarti}>
          "Dengan nama Allah, kami masuk (ke rumah), dengan nama Allah, kami
          keluar (darinya) dan kepada Allah, kami berserah diri."
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containertitle: {
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  textdoa: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: '500',
    paddingHorizontal: 10,
  },
  textlatin: {
    fontSize: 17,
    paddingHorizontal: 10,
    marginTop: 30,
  },
  containerarti: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  textarti: {
    fontSize: 17,
    marginTop: 5,
  },
});
