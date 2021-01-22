import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import store from '../SimonStore/store';
import { connect } from 'react-redux';

const Start = (props) => {
    return (
        <Button
        onPress={props.onStartGame}
        title="Start Game"
        />
    );
}

const mapStateToProps = (state, props) => {
  return {
    ...state
  };
};
export default connect(mapStateToProps)(Start);