import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';

export default class PledgePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.setState({
      data: [
        { sentence: 'Stop using plastic straws', css: styles.slide1 },
        { sentence: 'Hello', css: styles.slide1 }
      ]
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hello</Text>
        <Swiper style={styles.wrapper}>
          {this.state.data.map((pledge, key) => {
            return (
              <View key={key} style={pledge.css}>
                <Text style={styles.text}>{pledge.sentence}</Text>
              </View>
            );
          })}
          ;
        </Swiper>
        <View style={styles.button}>
          <Button title="click me" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 50
  },
  wrapper: {},
  slide1: {
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  slide2: {
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BB'
  },
  text: {
    color: '#fff',
    fontSize: 100,
    fontWeight: 'bold'
  },
  button: {
    paddingTop: 20,
    flex: 1
  }
});
