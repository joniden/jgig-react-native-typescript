import * as React from 'react';
import { Band, Gig } from '../models/GigModels';
import { View, Text } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, FlatList, FlatListProps} from 'react-native';
import { GigListItem } from '../components/GigListItem';

const BandScreen = ({...props}) => {

    const gigs: Gig[] = props.route.params.band.gigs

    return (
        <SafeAreaView>
            <FlatList
                data={gigs}
                renderItem={(item) => <GigListItem gig={item.item} />}
            />
        </SafeAreaView>
    )
}

BandScreen.navigationOptions = ({...screenProps}) => ({
    headerTitle: screenProps.route.params.band.name, 
})


export default BandScreen