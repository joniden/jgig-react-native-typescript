import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from "./Themed";
import { Gig } from "../models/Gig";
import { Colors } from '../constants/Colors';
import Labels from './Labels';

interface Props {
    gig: Gig;
}

export const GigListItem: React.FC<Props> = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.gig.name}</Text>
            <Text style={styles.subTitle}>{props.gig.venue.name}</Text>
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
      fontSize: 28,
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