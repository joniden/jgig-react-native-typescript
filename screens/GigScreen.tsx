import * as React from 'react';
import { View, Text } from '../components/Themed';
import { Colors } from '../constants/Colors';
import { Gig, Band } from '../models/GigModels';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { ListRenderItem, StyleSheet, ScrollView } from 'react-native';
import { SectionHeader } from '../components/SectionHeader';
import Layout from '../constants/Layout';

export default function GigScreen({...props}) {

    const navigation = useNavigation();

    const renderItem: ListRenderItem<Band> = ({...props}) => (
        <Text style={styles.bandItem}>{props.item.name}</Text>
    );

    let gig: Gig = props.route.params.gig

    const numberOfBands = gig.bands.length.toString()

    return(

        <ScrollView style={styles.container}>
            <Image 
                resizeMode={"center"}
                style={styles.image} 
                source={{ uri: gig.images[0].path ?? "1"}} 
                />
            <View style={styles.locationDate}>        
                <Text style={styles.venue}>{gig.venue.name}</Text>
                <Text style={styles.dateRow}>{gig.from_date.toLocaleDateString()}</Text>
            </View>
            <View>
                <SectionHeader title={ `${numberOfBands} bands` } />
            </View>
            <FlatList
                data={gig.bands}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </ScrollView>
    );
}

GigScreen.navigationOptions = ({...screenProps}) => ({
    headerTitle: screenProps.route.params.gig.name, 
})

const styles = StyleSheet.create({
    container: {
       // backgroundColor: Colors.darkGray
    },
    locationDate: {
        paddingVertical: 16,
        paddingLeft: 16 
    },
    venue: {
        fontSize: 17,
        fontWeight: "600"
    },
    dateRow: {
        fontSize: 15
    },
    bandItem: {
        height: 61,
        fontSize: 17,
        fontWeight: "600",
        paddingTop: 18,
        paddingBottom: 21,
        paddingLeft: 16
    },
    image: {
        alignSelf: "stretch",
        height: 300,
        width: Layout.window.width
      }
});