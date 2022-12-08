import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Doa5() {
  return (
    // Doa Sebelum Makan
    <View>
      <View style={styles.containertitle}>
        <Text style={styles.title}>Doa Sebelum Makan</Text>
      </View>
      <Text style={styles.textdoa}>
        اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ
      </Text>
      <Text style={styles.textlatin}>
        Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa 'adzaa bannaar.
      </Text>
      <View style={styles.containerarti}>
        <Text style={styles.textarti}>Artinya:</Text>
        <Text style={styles.textarti}>
          "Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan
          kepada kami dan peliharalah kami dari siksa api neraka."
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containertitle: {
    marginTop: 50,
    marginBottom: 30,
    paddingHorizontal: 10,
    paddingBottom: 5,
    alignSelf: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#5172AD',
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
