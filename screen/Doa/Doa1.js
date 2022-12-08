import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Doa1() {
  return (
    // Doa Sebelum Memulai Aktivitas
    <View>
      <View style={styles.containertitle}>
        <Text style={styles.title}>Doa Sebelum Memulai Aktivitas</Text>
      </View>
      <Text style={styles.textdoa}>
        اَللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ
        نَمُوْتُ، وَإِلَيْكَ النُّشُوْرُ
      </Text>
      <Text style={styles.textlatin}>
        Allāhumma bika ashbahnā, wa bika amsainā, wa bika nahyā, wa bika namūtu,
        wa ilaika nusyūru
      </Text>
      <View style={styles.containerarti}>
        <Text style={styles.textarti}>Artinya:</Text>
        <Text style={styles.textarti}>
          “Ya Allah, dengan-Mu kami berpagi hari, dengan-Mu kami bersore hari,
          dengan-Mu kami hidup, dengan-Mu kami mati. Hanya kepada-Mu (kami)
          kembali.”
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
