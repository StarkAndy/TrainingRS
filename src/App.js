/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import HelloClass from './components/HelloClass';
import HelloFunction from './components/HelloFunction';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <View>
          <HelloClass />
          <HelloFunction />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
