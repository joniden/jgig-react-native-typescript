import * as React from 'react';
import { Colors } from '../constants/Colors';
import { View, StyleSheet, Text } from 'react-native';

export interface Props {
    name: string;
    key: any;
}

const Label: React.FC<Props> = (props) => {
    return (
        <View style={styles.textWrap}>
            <Text key={props.key} style={styles.text}>{props.name ?? ""}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textWrap: {
        minWidth: "auto",
        minHeight: "auto",
        marginHorizontal: 4,
        marginVertical: 0,
        paddingHorizontal: 8,
        paddingVertical: 1,
        backgroundColor: Colors.purple,
        borderRadius: 6
        
    },
    text: {
        fontSize: 13,
        color: "#fff",
        fontWeight: "600"
    }
});

export default Label;