import 'react-native-gesture-handler';
import React from 'react';
import Header from './Header';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const ScoreBoard = (props) => {
  return (
    <View>
       <Text>Tamir | 7</Text>
    </View>
  )
}


const mapStateToProps = (state, props) => {
  return {
     ...state 
  };
};
// store.dispatch(computerUpdateColor());

export default connect(mapStateToProps)(ScoreBoard);
