import * as React from 'react';
import { Band } from '../models/GigModels';
import { View, Text } from '../components/Themed';
import { Colors } from '../constants/Colors';
import { StyleSheet, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import { Section } from '../models/Section';
import { SectionHeader } from '../components/SectionHeader';
import { groupBy, mapToSection} from '../functions';
import { getBands } from '../network/API';
import Icon from 'react-native-vector-icons/FontAwesome';

const BandsScreen = () => {

    const [sections, setSections] = React.useState<Section[]>([])

    React.useEffect(() => {
        getBands()
        .then(result => {
            const bands: Band[] = result
            // Group by letter
            let group = groupBy(bands, band => band.name.charAt(0))
            let dict = mapToSection(group)
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
                    <Icon name="chevron-right" size={15} style={styles.icon} />
                </View>
                <View style={styles.separator}/>
            </>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
           <SectionList style={styles.list}
            sections={ sections } 
            keyExtractor={(item, index) => index.toString()}
            renderItem={ ({item}) => (
                <BandListItem band={item} />
            )}
            renderSectionHeader={({ section: {title} }) => (
              <SectionHeader title={title} />
            )}
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
