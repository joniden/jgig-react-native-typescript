import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Gigs: {
            screens: {
              GigsScreen: 'gigs',
            },
          },
          Bands: {
            screens: {
              BandsScreen: 'bands',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
