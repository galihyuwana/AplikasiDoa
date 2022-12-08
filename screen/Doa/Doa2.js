import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Doa2() {
  return (
    // Doa Sebelum Tidur
    <View>
      <View style={styles.containertitle}>
        <Text style={styles.title}>Doa Sebelum Tidur</Text>
      </View>
      <Text style={styles.textdoa}>
        بِاسْمِكَا للَّهُمَ أَحْيَا وَ ِاسْمِكَا أَمُوتُ
      </Text>
      <Text style={styles.textlatin}>
        Bismika allahumma ahya wa bismika amut.
      </Text>
      <View style={styles.containerarti}>
        <Text style={styles.textarti}>Artinya:</Text>
        <Text style={styles.textarti}>
          "Dengan nama-Mu Ya Allah aku hidup dan dengan nama-Mu aku mati."
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
