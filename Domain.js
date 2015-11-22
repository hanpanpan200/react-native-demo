var React = require('react-native')

var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Navigator,
} = React

import Login from './Login'

class Domain extends Component{
  constructor(props) {
    super(props)

    this.state = {
      domain: '',
      password: '', 
    }
  }

  _domain(domain) {
    this.setState({
      ...this.state,
      domain: domain
    })
  }

  _password(password) {
    this.setState({
      ...this.state,
      password: password
    })
  }

  _onPress() {
    console.log("state", this.state)
    this.props.navigator.push({
      name: 'Login',
      component: Login,
    })
  }

  renderScene() {
    return (
      <View>
        <Text>User Name / Domain Name</Text>
        <TextInput style={styles.inputPassword} onChangeText={this._domain.bind(this)} />
        <Text>Password</Text>
        <TextInput 
          secureTextEntry 
          style={styles.inputPassword}
          onChangeText={this._password.bind(this)} />
        <TouchableHighlight style={styles.button} 
          onPress={this._onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <Navigator 
        renderScene={this.renderScene.bind(this)} />
    )
  }
}

var styles = StyleSheet.create({
  select: {
    flex: 1,
  },
  inputSelect: {
    width: 250,
  },
  optionList: {
    height: 10,
  },
  inputPassword: {
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})

module.exports = Domain
