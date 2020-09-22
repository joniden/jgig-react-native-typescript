import * as React from 'react';
import { StyleSheet, SafeAreaView, SectionList, TouchableOpacity } from 'react-native';
import { getGigs } from '../network/API'; 
import { Gig } from '../models/GigModels';
import { Section } from '../models/Section';
import { GigListItem } from '../components/GigListItem';
import { groupBy, mapToSection } from '../functions';
import { Colors } from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { SectionHeader } from '../components/SectionHeader';


export default function GigsScreen() {

  const navigation = useNavigation();

  const pushToGig = (gig: Gig) => {
    navigation.navigate('GigScreen', {gig: gig})
  }

  const [sections, setSections] = React.useState<Section[]>([])

  React.useEffect(() => {
    getGigs()
    .then( result => {
      const gigs: Gig[] = result
      // Group by year
      let group = groupBy(gigs, gig => gig.from_date.getFullYear().toString())
      let dict = mapToSection(group)
      setSections(dict);
    })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
       <SectionList style={styles.list}
        sections={ sections } 
        keyExtractor={(item, index) => index.toString()}
        renderItem={ ({item}) => (
          <TouchableOpacity onPress={() => pushToGig(item)}>
            <GigListItem gig={item} /> 
          </TouchableOpacity>
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
  labels: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 8
  },
  subTitle: {
    fontSize: 17,
    color: Colors.gray,
    marginBottom: 8
  }
});