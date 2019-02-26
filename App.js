import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import ProfilePhoto from './components/ProfilePhoto';
import StateExample from './components/StateExample';
import AppStackNavigator from './navigation/AppStackNavigator';
import { Root } from 'native-base';

// export default class App extends React.Component {
//   render() {
//     // let platform = "Unknow";
//     // platform = Platform.OS == 'ios' ? "iOS" : "Android";
//     return (
//       <View style={styles.container}>
//         <Text>Coucou Baptiste Cheunet</Text>
//         <Text>You are using an {platform} device.</Text>
//         {/* <ProfilePhoto size={300} imageProfile={"https://parismatch.be/app/uploads/2018/04/Macaca_nigra_self-portrait_large-e1524567086123-1100x715.jpg"} /> */}
//         <StateExample />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    }
    this.loadFonts();
  }

  async loadFonts() {
    try {
      await Expo.Font.loadAsync({
        'Roboto': require('./node_modules/native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
      });

      this.setState({ fontsLoaded: true });
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {
    const AppContainer = createAppContainer(AppStackNavigator);
    const fontsLoaded = this.state.fontsLoaded;

    if (fontsLoaded)
      return (
        <Root>
          <AppContainer />
        </Root>
      );
    else 
        return <View><Text>Loading....</Text></View>
  }
}