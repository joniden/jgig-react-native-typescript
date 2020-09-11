import * as React from 'react';
import { StyleSheet, Image, Text, Dimensions } from 'react-native';
import { View } from '../components/Themed'
import { Lastgig } from '../models/LastGig'
import { baseUrl, getHome } from '../network/API';
import Labels from '../components/Labels';
import { Colors } from '../constants/Colors';

const win = Dimensions.get('window');
const ratio = win.width/541;

export default function HomeScreen() {

    const [lastGig, setLastGig] = React.useState<Lastgig>()

    React.useEffect(() => {
        getHome()
        .then( gig => {
            let lastGig: Lastgig = gig
            lastGig.images = lastGig.images.map ( g => ({ ...g, path: baseUrl + g.path }) )
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
    width: win.width
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