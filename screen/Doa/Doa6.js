import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Doa6() {
  return (
    //Doa Setelah Makan
    <View>
      <View style={styles.containertitle}>
        <Text style={styles.title}>Doa Setelah Makan</Text>
      </View>
      <Text style={styles.textdoa}>
        اَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا
        مُسْلِمِيْنَ{' '}
      </Text>
      <Text style={styles.textlatin}>
        Alhamdulillahilladzi ath-amanaa wa saqoonaa wa ja'alanaa minal
        muslimiin.
      </Text>
      <View style={styles.containerarti}>
        <Text style={styles.textarti}>Artinya:</Text>
        <Text style={styles.textarti}>
          "Segala puji bagi Allah yang telah memberi kami makan dan minum serta
          menjadikan kami termasuk dari kaum Muslimin."
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
