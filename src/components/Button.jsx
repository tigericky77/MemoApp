import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';

// eslint-disable-next-line react/function-component-definition
export default function Button(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
};

Button.defaultProps = {
  onPress: null,
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
