import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: 'Scan, Pay & Enjoy',
    text: 'scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friendly Shopping!',
    image: require('./assets/3.png'),
    backgroundColor: '#FFF7F6',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./assets/2.png'),
    backgroundColor: '#FFF7F6',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./assets/3.png'),
    backgroundColor: '#FFF7F6',
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }

  _renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _onDone = () => {
    this.setState({ showRealApp: true });
  };

  render() {
    if (this.state.showRealApp) {
      return (
        <View style={styles.container}>
          <Text>Welcome to the Real App!</Text>
        </View>
      );
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} />;
    }
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: 320,
    height: 320,
    borderRadius: 160,
    overflow: 'hidden',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    color: '#333', 
    marginBottom: 10, 
  },
  text: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});