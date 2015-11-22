var React = require('react-native')

var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
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
    super(props);

    this.state = {
      canada: '',
      usa: ''
    };
  }
  componentDidMount() {
    updatePosition(this.refs['SELECT1'])
    updatePosition(this.refs['SELECT2'])

    updatePosition(this.refs['OPTIONLIST'])
  }

  _getOptionList() {
    return this.refs['OPTIONLIST']
  }

  _usa(state) {
    this.setState({
      ...this.state,
      usa: state
    })
  }

  _canada(province) {


    this.setState({
      ...this.state,
      canada: province
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Select
            width={250}
            ref="SELECT1"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a Province in Canada ..."
            onSelect={this._canada.bind(this)}>
            <Option>Alberta</Option>
            <Option>British Columbia</Option>
            <Option>Manitoba</Option>
          </Select>

          <View style={{ height: 10 }}/>

          <Select
            width={250}
            ref="SELECT2"
            optionListRef={this._getOptionList.bind(this)}
            defaultValue="Select a State in USA ..."
            onSelect={this._usa.bind(this)}>
            <option>Alabama</option>
            <option>Alaska</option>
            <option>Arizona</option>
          </Select>

          <View style={{ height: 20 }}></View>
          <OptionList ref="OPTIONLIST"/>
      </View>
    )
  }
}

AppRegistry.registerComponent('SaldoAndroid', () => SaldoAndroid)
