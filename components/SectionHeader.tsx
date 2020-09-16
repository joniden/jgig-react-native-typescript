
import * as React from 'react';
import { Colors } from '../constants/Colors';
import { Text } from '../components/Themed';
import { StyleSheet } from 'react-native';

interface Props {
    title: any
}

export const SectionHeader = (props: Props) => {

    const styles = StyleSheet.create({
        sectionHeader: {
            fontSize: 16,
            fontWeight: "bold",
            backgroundColor: Colors.darkGray,
            paddingHorizontal: 16,
            paddingTop: 21,
            paddingBottom: 8,
            color: Colors.gray
        }
    });

    return (
        <Text style={styles.sectionHeader}> {props.title} </Text>
    );
}