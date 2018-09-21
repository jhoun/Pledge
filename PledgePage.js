import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Swiper from 'react-native-swiper';

export default class PledgePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    this.setState({
      items: [
        { title: 'Stop using plastic straws', css: styles.slide1 },
        {
          title:
            'At home and in restuarants, I will switch from bottled water to tap water',
          css: styles.slide2
        },
        { title: 'I will no longer buy bottled water', css: styles.slide3 }
      ]
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hello</Text>
        <Swiper
          dot={
            <View
              style={{
                display: 'none'
              }}
            />
          }
          activeDot={
            <View
              style={{
                display: 'none'
              }}
            />
          }
        >
          {this.state.items.map((item, key) => {
            return (
              <View key={key} style={item.css}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            );
          })}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  slide2: {
    flex: 1,
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
    fontSize: 60,
    fontWeight: 'bold'
  },
  button: {
    paddingTop: 20,
    flex: 1
  }
});
