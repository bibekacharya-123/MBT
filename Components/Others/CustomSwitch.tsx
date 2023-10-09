import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <View style={[styles.container, isEnabled ? styles.active : styles.inactive]}>
        <Text style={styles.label}>{isEnabled ? 'ON' : 'OFF'}</Text>
        <View style={[styles.switch, isEnabled ? styles.switchOn : styles.switchOff]} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    width: 60,
    height: 20,
  },
  active: {
    backgroundColor: '#690c23',
  },
  inactive: {
    backgroundColor: 'gray',
  },
  label: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  switch: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#eeee1',
    position: 'absolute',
  },
  switchOn: {
    left: 40,
  },
  switchOff: {
    left: 0,
  },
});

export default CustomSwitch;