import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Doa4() {
  return (
    // Doa Masuk Kamar Mandi
    <View>
      <View style={styles.containertitle}>
        <Text style={styles.title}>Doa Masuk Kamar Mandi</Text>
      </View>
      <Text style={styles.textdoa}>
        اَللّهُمَّ اِنِّيْ أَعُوْذُبِكَ مِنَ الْخُبُثِ وَالْخَبَا إِثِ
      </Text>
      <Text style={styles.textlatin}>
        Alloohumma innii a'uudzu bika minal khubutsi wal khobaaits.
      </Text>
      <View style={styles.containerarti}>
        <Text style={styles.textarti}>Artinya:</Text>
        <Text style={styles.textarti}>
          "Ya Allah, sungguh aku berlindung kepada-Mu dari godaan setan
          laki-laki dan setan perempuan".
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
