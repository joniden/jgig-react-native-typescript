import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { View, Text } from "./Themed";
import { Gig } from "../models/GigModels";
import { Colors } from '../constants/Colors';
import Labels from './Labels';

interface Props {
    gig: Gig;
}

export function GigListItem(props: Props): JSX.Element {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.gig.name}</Text>
            <Text style={styles.subTitle}>{props.gig.venue.name ?? ""}</Text>
            <Labels bands={props.gig.bands} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginVertical: 0,
      padding: 16,
      backgroundColor: Colors.darkGray
    },
    labels: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",

    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      marginVertical: 8,
      color: "#fff"
    },
    subTitle: {
      fontSize: 17,
      color: Colors.gray,
      marginBottom: 8
    }
  });