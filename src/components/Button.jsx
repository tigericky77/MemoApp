import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

// eslint-disable-next-line react/function-component-definition
export default function Button(props) {
  const { label } = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
}

Button.propTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    marginBottom: 24,
    alignSelf: 'flex-start',
  },
  buttonLabel: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    fontSize: 16,
    lineHeight: 32,
    color: '#FFFFFF',
  },
});
