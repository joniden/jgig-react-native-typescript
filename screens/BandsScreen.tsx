import * as React from 'react';
import { Band } from '../models/GigModels';
import { View, Text } from '../components/Themed';
import { Colors } from '../constants/Colors';
import { StyleSheet, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import { Section } from '../models/Section';
import { useNavigation } from '@react-navigation/native';
import { SectionHeader } from '../components/SectionHeader';
import { groupToSection } from '../functions';
import { getBands } from '../network/API';
import { Ionicons } from '@expo/vector-icons';

const BandsScreen = () => {

    const [sections, setSections] = React.useState<Section[]>([])

    const navigation = useNavigation();

    const pushToBand = (band: Band) => {
        navigation.navigate('BandScreen', {band: band})
    }

    React.useEffect(() => {
        getBands()
        .then(result => {
            const bands: Band[] = result
            // Group by letter
            let dict = groupToSection(bands, band => band.name.charAt(0))
            setSections(dict);
        })
    }, [])

    interface BandProps {
        band: Band
    }

    const BandListItem = (props: BandProps): JSX.Element => {
        return (
            <>
                <View style={styles.bandListItem}>
                    <Text style={styles.itemText}>{props.band.name}</Text>
                    <Text style={styles.counter}>{props.band.gigs.length}</Text>
                    <Ionicons name="ios-arrow-forward" size={15} style={styles.icon} />
                </View>
            </>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
           <SectionList style={styles.list}
            sections={ sections } 
            keyExtractor={(item, index) => index.toString()}
            renderItem={ ({item}) => (
                <TouchableOpacity onPress={() => pushToBand(item)}>
                    <BandListItem band={item} />
                </TouchableOpacity>
            )}
            renderSectionHeader={({ section: {title} }) => (
              <SectionHeader title={title} />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
            />
            
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    list: {
      flex: 1,
      width: "100%"
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginVertical: 8
    },
    separator: {        
        borderBottomColor: Colors.darkGray,
        borderBottomWidth: 1,
        flex: 1
    },
    bandListItem: {
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center"
    },
    itemText: {
        marginTop: 18,
        marginBottom: 21,
        marginLeft: 21,
        fontWeight: "600",
        fontSize: 17,
        flexGrow: 4
    },
    counter: {
       marginRight: 21,
       color: Colors.orange,
    },
    icon: {
        color: Colors.orange,
        marginRight: 21
    }
  });

  export default BandsScreen;
