import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Doa3() {
  return (
    // Doa Bangun Tidur
    <View>
      <View style={styles.containertitle}>
        <Text style={styles.title}>Doa Bangun Tidur</Text>
      </View>
      <Text style={styles.textdoa}>
        الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ
        النُّشُورُ
      </Text>
      <Text style={styles.textlatin}>
        Alhamdulillahi al-ladhi ahyana ba'da ma amatana wa ilaihi-nnushur.
      </Text>
      <View style={styles.containerarti}>
        <Text style={styles.textarti}>Artinya:</Text>
        <Text style={styles.textarti}>
          "Segala puji bagi Allah yang telah mengembalikan kehidupan, mematikan
          kami, dan hanya kepada-Nya kami kembali."
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
