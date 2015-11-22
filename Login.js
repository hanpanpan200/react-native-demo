'use strict';

var React = require('react-native');
var {
  Component,
  View,
  Text,
  Navigator,
} = React

class Login extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)} />
    )
  }
  renderScene(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableHighlight
            onPress={this.gotoNext.bind(this)}>
          <Text style={{color: 'red'}}>gotoNext</Text>
        </TouchableHighlight>
      </View>
    )
  }
  gotoNext() {
    // this.props.navigator.push({
    //   id: 'Main',
    //   name: 'main',
    // })
  }
}

module.exports = Login;
