/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import TextFieldWithButtonView from "./components/TextFieldWithButtonView";
import ListView from "./components/ListView"
import TextView from "./components/TextView"

const App: () => React$Node = () => {

  const [texts, setTexts] = useState([]);


  return (
      <SafeAreaView>
        <TextFieldWithButtonView
            placeholder="Enter Text Here"
            value=""
            onPress={(text) => setTexts(input => [...input, text])}
        />

        <ListView
            data={texts}
            view={(item)=> (
                <TextView
                    key={item.key}
                    text={item.value}
                />
            )}
        />

      </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: "row"
  }
});

export default App;
