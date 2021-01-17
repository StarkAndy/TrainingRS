import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeloFunctionComponent = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Hello Functional Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
  },
});

export default HeloFunctionComponent;
