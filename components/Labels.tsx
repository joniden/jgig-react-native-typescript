import * as React from 'react';
import { Band } from '../models/LastGig'
import { View } from 'react-native';
import Label from './Label';

interface Props {
    bands: Band[];
}

const Labels: React.FC<Props> = (props) => {

    const filterbands = props.bands.slice(0,2)

    if (filterbands.length > 2) {

    }

    return (
       <View style={{ 
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap"
        }}>
           { filterbands.map( b => (
               <Label 
               key={b.id}
               name={b.name} />
           ))}
       </View>
    );
};

export default Labels;