var React = require('react-native')

var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} = React

const DropDown = require('react-native-dropdown')

const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown


class SaldoAndroid extends Component{
  constructor(props) {
    super(props)

    this.state = {
      domain: '',
      password: '',
    }
  }

  componentDidMount() {
    updatePosition(this.refs['selectDomain'])
    updatePosition(this.refs['OPTIONLIST'])
  }

  _getOptionList() {
    return this.refs['OPTIONLIST']
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
  }

  render() {
    return (
      <View>
        <Text>Password</Text>
        <TextInput 
          secureTextEntry 
          style={styles.inputPassword}
          onChangeText={this._password.bind(this)} />
        <TouchableHighlight style={styles.button} 
          onPress={this._onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
        <View style={styles.select}>
          <Text>User Name / Domain Name</Text>
          <Select 
            name="domain"
            style={styles.inputSelect}
            ref="selectDomain" 
            optionListRef={this._getOptionList.bind(this)} 
            defaultValue="Select a domain ..." 
            onSelect={this._domain.bind(this)} >
            <Option>Uganda Police</Option>
            <Option>K.C..C.A</Option>
            <Option>ID Validation Protocal</Option>
          </Select>

          <View style={styles.optionList}/>
          <OptionList ref="OPTIONLIST"/>
        </View>
      </View>
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

AppRegistry.registerComponent('SaldoAndroid', () => SaldoAndroid)
