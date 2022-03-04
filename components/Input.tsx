import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native'

interface CLassPropsType {
  textForm: string
  imagePath: ImageSourcePropType
  modify: Function
  security: boolean
}

export default class InputContainer extends Component<CLassPropsType, {}> {
  render() {
    return (
      <View style={styles.logoinput}>
        <Image style={styles.logo} source={this.props.imagePath} />
        <TextInput
          secureTextEntry={this.props.security}
          style={styles.input}
          placeholder={this.props.textForm}
          onChange={(event) => {
            this.props.modify(event.nativeEvent.text)
          }}
        ></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 70,
    width: 275,
    fontSize: 25,
    justifyContent: 'center',
  },
  logoinput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 35,
    paddingLeft: 25,
    margin: 25,
  },
  logo: { width: 50, height: 50, marginRight: 15 },
})