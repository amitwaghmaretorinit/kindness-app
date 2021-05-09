

import React from "react";

import { View, StyleSheet, ScrollView, Text, Dimensions } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Navigator from "./Navigators";
import PushNotification from './PushNotification';

const App = () => {
  return (
    <View style={styles.container}>
      <PushNotification />
      <View
        elevation={5}
        style={[
          styles.square,
        ]}
      >
        <AppHeader />
      </View>

      {/* <View style={styles.mainContainer}> */}
      <ScrollView style={{

      }}>
        <View style={styles.mainContainer}>
          <Navigator />
        </View>

        <AppFooter />

      </ScrollView>
      {/* </View> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  mainContainer: {
    flex: 1,
    minHeight: Dimensions.get('window').height
  },

  square: {
    backgroundColor: "#f8f9f8",
    height: 120,
    shadowColor: "black",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'

  },

});

export default App;