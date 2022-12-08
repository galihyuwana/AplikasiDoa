import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Doa7() {
  return (
    //Doa Keluar Rumah
    <View>
      <View style={styles.containertitle}>
        <Text style={styles.title}>Doa Keluar Rumah</Text>
      </View>
      <Text style={styles.textdoa}>
        بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا
        بِاللهِ
      </Text>
      <Text style={styles.textlatin}>
        Bismillahhi tawakkaltu 'alallah, laa haula wa laa quwwata illa billaah.
      </Text>
      <View style={styles.containerarti}>
        <Text style={styles.textarti}>Artinya:</Text>
        <Text style={styles.textarti}>
          "Dengan menyebut nama Allah, aku bertawakal kepada Allah. Tiada daya
          dan kekuatan kecuali dengan Allah."
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
