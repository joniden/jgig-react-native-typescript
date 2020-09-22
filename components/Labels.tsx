import * as React from 'react';
import { Band } from '../models/GigModels'
import { View, LayoutChangeEvent, Text } from 'react-native';
import Label from './Label';
import layout  from '../constants/Layout';

interface Props {
    bands: Band[];
}

interface LabelContent {
    id: number;
    name: string;
}

const Labels: React.FC<Props> = props => {

    const [totalWidth, setTotalWidth] = React.useState(0);
    const [labelsContent, setLabelsContent] = React.useState<LabelContent[]>([]);
    const bands = props.bands
    const windowWidth = layout.window.width
    const padding = 20

    let labelContent = bands.slice(0,2).map((band, index) => {
        const obj: LabelContent = {"id": index, "name": band.name}
        return obj;
    })

    React.useEffect(() => {
       
        if (bands.length > 2) {
            const extraBands = bands.length - 2          
            const moreBands: LabelContent = {"id": 2, "name": `${extraBands} more bands`} 
            labelContent.push(moreBands)
        }    

        if (windowWidth < totalWidth + padding) {
            labelContent.splice(1,1);
        }

        setLabelsContent(labelContent);

    }, [])

    function measureView(event: LayoutChangeEvent) {
        setTotalWidth(event.nativeEvent.layout.width + totalWidth)
    } 

    return (
       <View
        style={{ 
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap"
        }}>
           { labelsContent.map( b => (
               <Label
               onLayout={event => measureView(event)} 
               key={b.id}
               name={b.name} />
           ))}
       </View>
    );
};

export default Labels;