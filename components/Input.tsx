import React, { Component } from 'react'
import { Image } from 'react-native'
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableWithoutFeedbackBase,
} from 'react-native'

interface PropsType {
  placeHolder: String
  image : string 
}



export default class Input extends Component<PropsType> {
  constructor(public props:PropsType) {
    super(props)
    this.state = {
      name:"",
    };
  }
 
  render() {
    return (
      <View>
        <View style={styles.inputContainer}>
          <Image source={this.props.image} style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder={`${this.props.placeHolder}`}
            onSubmitEditing={(Event) =>
              this.setState({ name: Event.nativeEvent.text })
            }
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  inputContainer: {
    flexDirection: 'row',
    width: 300,
    height: 50,
    padding: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 30,
    backgroundColor: 'white',
  },
  nameOutput: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2980b9',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 10,
    borderRadius:20,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    height: 50,
  },
})
