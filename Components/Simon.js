import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import Header from './Header';
import Square from './Square';
import Start from './Start';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import colorReducer from '../SimonReducer/reducer';
import { connect } from 'react-redux';
import store from '../SimonStore/store';
import { computerUpdateColor, incrementIndex, newGame, resetColors, resetGame, resetIndex, updateColor } from '../SimonActions/actions';


const Simon = (props) => {
  state = {
    colors: ['yellow', 'red', 'blue', 'green'],
  }

  const [color1, setColor1] = useState('red');
  const [color2, setColor2] = useState('blue');
  const [color3, setColor3] = useState('yellow');
  const [color4, setColor4] = useState('gray');

  const [colors, setColors] = useState(['red', 'blue', 'yellow', 'gray']);


  const blinkColor = (index) => {
    const newColors = colors;
    newColors[index] = 'white';
    setColors(newColors);
    setTimeout(() => {
      setColors(['red', 'blue', 'yellow', 'gray']);
    }, 100)
  };

  // const play = async () => {
  //   for (let color of props.computerColors) {
  //     await new Promise((resolve, reject) => {
  //       const blinkingIndex = props.gameObjects.find(t => t.color === color).index;
  //       props.dispatch(updateColor(blinkingIndex, 'white'))
  //       setTimeout(() => {
  //         props.dispatch(updateColor(blinkingIndex, color))
  //         resolve(true);
  //       }, 1000)
  //     });
  //   }
  // };
  // // useEffect(() => {
  // //   console.log('HAGARRRRRR')
  // // })
  // const turnOver = async () => {
  //   const randomNumber = Math.floor(Math.random() * 4);
  //   const randomColor = this.props.gameObjects[randomNumber].color;
  //   props.dispatch(turnOver(randomColor));

  //   // Lock

  //   // Play
  //   await play();

  //   // Unlock
  // };

  const clickValidated = () => {
    props.dispatch(incrementIndex());
  };

  const userFailed = () => {
    const score = props.computerColors.length - 1;
    props.dispatch(resetGame());
    props.navigation.navigate('Score board', { score })
  };

  const onUserClickedOnColor = (index) => {
    
    // props.navigation.navigate('Score board', { name: 'Jane' })

    // Get color
    const color = props.gameObjects[index].color;

    // Check if click success
    if (true || color === props.computerColors[props.currentIndex]) {
      // Turn over? (is it the last click on the turn)
      if (true || props.currentIndex === props.computerColors.length - 1) {
       // turnOver();
        return;
      }

      clickValidated();
      return;
    }


    // If we are here - we failed
    userFailed();



    // // // If so log 'CLICKED OK'
    // // // alert("Correct Color");
    // // // Increment currentIndex
    // // if (props.currentIndex < props.computerColors.length - 1) {
    // //   props.dispatch(incrementIndex());
    // //   //   return;
    // // }
    // // else {
    // //   props.dispatch(resetIndex());
    // // }
      

    // // Add random color to the array
    // const ran = Math.floor(Math.random() * 4);
    // const colors = ['yellow', 'green', 'blue', 'black'];
    // const newColor = colors[ran];
    // // console.log('NEW COLOR', newColor);
      
    // if (props.currentIndex == props.computerColors.length - 1) {
    //   props.dispatch(computerUpdateColor(newColor));
    //   // setInterval(() => {
    //   //   ;
    //   // }, 1000);
    // };
    // return;
  }

  // // IF NOT - LOG 'CLICKED ERROR'
  // alert("Score : " + (props.computerColors.length - 1))
  // // currentIndex to 0
  // props.dispatch(resetIndex());
  // props.dispatch(resetColors());
  // // Alert "NEW GAME"
  // // console.log('Tamir', props);

  const onStartGame = () => {
    const ran = Math.floor(Math.random() * 4);
    const colors = ['yellow', 'green', 'blue', 'black'];
    const newColor = colors[ran];
    // console.log('NEW COLOR', newColor);
    props.dispatch(newGame(newColor));
  
  }

  return (
    <View>
      {props.gameObjects.map(t => <Square color={t.color} index={t.index} onUserClickedOnColor={onUserClickedOnColor} />)}
      <Start onStartGame={onStartGame} />
    </View>
  )
}


const mapStateToProps = (state, props) => {
  console.log('state', state);
  return {
     ...state 
  };
};
// store.dispatch(computerUpdateColor());

export default connect(mapStateToProps)(Simon);
