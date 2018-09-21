import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import data from './data/pledge-data';

export default class PledgePage extends React.Component {
  render() {
    console.log('data', data);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hello</Text>
        <Swiper style={styles.wrapper}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
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
