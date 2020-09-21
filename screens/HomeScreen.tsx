import * as React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { View } from '../components/Themed'
import { Lastgig } from '../models/GigModels'
import { getHome } from '../network/API';
import Labels from '../components/Labels';
import { Colors } from '../constants/Colors';
import Layout from '../constants/Layout';

export default function HomeScreen() {

    const [lastGig, setLastGig] = React.useState<Lastgig>()

    React.useEffect(() => {
        getHome()
        .then( result => {
            let lastGig: Lastgig = result
            setLastGig(lastGig)
            
        })
    }, [])

    return (
    <View style={styles.container}> 
         <Image 
         resizeMode={"center"}
         style={styles.image} 
         source={{ uri: lastGig?.images[0].path ?? "1"}} 
         />
        <View>
            <Text style={styles.title}>{lastGig?.name ?? ""}</Text>
            <Text style={styles.subTitle}>{lastGig?.venue.name ?? ""}</Text>
            {lastGig?.bands && 
                <Labels bands={lastGig.bands} />
            }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: 200,
    alignSelf: "stretch",
    height: 300,
    width: Layout.window.width
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 8
  },
  subTitle: {
    fontSize: 17,
    marginBottom: 8
  }
});