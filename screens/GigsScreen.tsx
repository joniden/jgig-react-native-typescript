import * as React from 'react';
import { StyleSheet, SafeAreaView, SectionList } from 'react-native';
import { Text, View } from '../components/Themed';
import { getGigs } from '../network/API'; 
import { Gig } from '../models/Gig';
import { Section } from '../models/Section';
import { GigListItem } from '../components/GigListItem';
import { groupBy, mapToSection } from '../functions/functions';
import { Colors } from '../constants/Colors';

export default function GigsScreen() {

  const [sections, setSections] = React.useState<Section[]>([])

  React.useEffect(() => {
    getGigs()
    .then( result => {
      const gigs: Gig[] = result

      // Group by year
      let group = groupBy(gigs, gig => gig.from_date.toString().split("-")[0] )
      let dict = mapToSection(group)
      setSections(dict);
    })
  }, []);

  return (
    <SafeAreaView style={styles.container}>
       <SectionList style={styles.list}
        sections={ sections } 
        keyExtractor={(item, index) => index.toString()}
        renderItem={ ({item}) => <GigListItem gig={item} /> }
        renderSectionHeader={({ section: {title} }) => (
          <Text style={styles.sectionheader}>{title}</Text>
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
  },
  sectionheader: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: Colors.darkGray,
    paddingHorizontal: 16,
    paddingTop: 21,
    paddingBottom: 8,
    color: Colors.gray
  }
});