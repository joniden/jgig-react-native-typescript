import * as React from 'react';
import { Colors } from '../constants/Colors';
import { View, StyleSheet, Text, LayoutChangeEvent } from 'react-native';

export interface Props {
    name: string;
    key: any;
    onLayout: (event: LayoutChangeEvent) => void;
}

const Label: React.FC<Props> = (props) => {

    return (

        <View onLayout={props.onLayout} style={styles.textWrap}>
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