import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import Label from '../components/Label';
import { Colors } from '../constants/Colors';

export default function GigsScreen() {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/images/icon.png')} />
        <View>
            <Text style={styles.title}>BandName</Text>
            <Text style={styles.subTitle}>Location</Text>
            <View style={styles.labels}>
                <Label name="Label" />
                <Label name="Label" />
                <Label name="Label" />
                <Label name="Label" />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labels: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  image: {
    height: 214
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 8
  },
  subTitle: {
    fontSize: 17,
    color: Colors.gray,
    marginBottom: 8
  }
});