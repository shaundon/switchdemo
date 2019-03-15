/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Switch} from 'react-native';

type Props = {};
type State = {
  value: boolean
};
export default class App extends Component<Props, State> {
  constructor() {
    super();
    this.state = { 
      value: false,
    };
  }
  onValueChange = (value) => {
    this.setState({value});
  };
  render() {
    return (
      <View style={styles.container}>
        <Switch 
          value={this.state.value}
          onValueChange={this.onValueChange}
          thumbColor="red" 
          trackColor={{
            true: "yellow",
            false: "purple",
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
