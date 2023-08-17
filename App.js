import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, ScrollView} from 'react-native';

const TEXT_INPUT_COUNT = 20;

const TextInputExample = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      {Array.from(Array(TEXT_INPUT_COUNT)).map((_,index) => {
        return (
          <TextInput
            style={styles.input}
            placeholder={`Text Input #${index + 1}`}
          />
        )
      })}
      </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;