import * as React from 'react';
import { StyleSheet, FlatList, SectionList } from 'react-native';
import { Text, View } from '../components/Themed';
import { getGigs } from '../network/API'; 
import { Gig } from '../models/Gig';
import { GigListItem } from '../components/GigListItem';
import Label from '../components/Label';
import { groupBy } from '../functions/functions';
import { Colors } from '../constants/Colors';

export default function GigsScreen() {

  const [gigs, setGigs] = React.useState<Map<string, Gig[]>>()

  React.useEffect(() => {
    getGigs()
    .then( result => {
      const gigs: Gig[] = result

      // Group by year
      let group = groupBy(gigs, gig => gig.from_date.toString().split("-")[0] )
      setGigs(group);
    })
  }, []);

  return (
    <View style={styles.container}>

        
    </View>
  );
}

/*
<FlatList
          key="flatlist"
          data={gigs}
          renderItem = {({ item, separators }) => (
            <GigListItem gig={item} />
          )}
       />
       */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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