import InputContainer from './Input'
import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native'
import UserService from '../services/authentification.service'
import { User } from '../services/authentification.service'

interface classState {
  login: string
  password: string
}

interface classProps {
  onConnection: Function
}

export default class AuthForm extends Component<classProps, classState> {
  constructor(public props:classProps){
    super(props)
    this.state={
      login:'',
      password:''
    }
  }
  state: classState = { login: '', password: '' }
  displayAlert = (text: string) => {
    Alert.alert('Action Sélectionnée', text)
  }
  sendForm = (info: string) => {
    const user = UserService.authenticate(this.state.login, this.state.password)
    if (user !== null) this.props.onConnection()
    else this.displayAlert('Connexion avec le mail: ' + info)
  }
  changeLogin = (value: string) => {
    this.setState({ login: value })
  }

  changePassword = (value: string) => {
    this.setState({ password: value })
  }

  render() {
    return (
      <View style={styles.form}>
        <InputContainer
          security={false}
          textForm="email"
          imagePath={require('../assets/at.png')}
          modify={this.changeLogin}
        />
        <InputContainer
          security={true}
          textForm="mot de passe"
          imagePath={require('../assets/key.png')}
          modify={this.changePassword}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            UserService.authenticate(this.state.login, this.state.password)
              ? this.sendForm(this.state.login + '\n' + this.state.password)
              : this.displayAlert('Identification erronée')
          }
        >
          <Text style={styles.textButton}>Se connecter</Text>
        </TouchableOpacity>
        <View style={styles.alertContainer}>
          <Text
            style={styles.alert}
            onPress={() => this.displayAlert('Mise à jour du mot de passe')}
          >
            Mot de passe oublié ?
          </Text>
          <Text
            style={styles.alert}
            onPress={() => this.displayAlert('Inscription')}
          >
            S'inscrire
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: 'skyblue',
    height: 60,
    width: 300,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  alertContainer: {
    alignItems: 'center',
    margin: 20,
  },
  alert: {
    padding: 10,
    fontSize: 18,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
  },
})