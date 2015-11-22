var React = require('react-native')

var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} = React

import Domain from './Domain'

class SaldoAndroid extends Component{
  render() {
    return (
        <Navigator renderScene={this.renderScene.bind(this)} />
      )
  }

  renderScene(root, navigator) {
    return(
      <Domain
          navigator={navigator} />
      )
  }
}

AppRegistry.registerComponent('SaldoAndroid', () => SaldoAndroid)
