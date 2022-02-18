import React, { Component } from 'react'
import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Text,
} from 'react-native'
import Input from './Input'
import UserService from "../services/authentification.service"


interface ClassStateType {
  email:string,
  password:string
}

const tabRightLogin = ['Petit.comkoala@ensc.fr', 'Mdpnoala']

export default class AuthForm extends Component<{}, ClassStateType> {
  constructor(public props: {}) {
    super(props)
    this.state = {
      email:'',
      password:''
    }
  }

  dispAlert = (text: string) => {
    Alert.alert('Action sélectionnée', text)
  }


  changeEmail = (value:string)=>{
    this.setState({email:value})
  }
  changePassword = (value:string)=>{
    this.setState({password:value})
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 96, height: 96 }}
          source={require('../assets/koala.png')}
        />
        <Input
          placeHolder="Email"
          image={require('../assets/arobase.png')}
          handleChange={this.changeEmail}
        />
        <Input
          placeHolder="Mot de passe"
          image={require('../assets/key.png')}
          handleChange={this.changePassword}
        />
        <TouchableOpacity
          style={styles.connexionButton}
          onPress={() => UserService.authenticate(this.state.email,this.state.password) ? 
            this.dispAlert(
              "Connexion réussie"
            ):this.dispAlert("Identifiants erronés")
          }
        >
          <Text style={styles.text}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.dispAlert('Mise à jour du mot de passe')}
        >
          <Text>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.dispAlert('Inscription')}>
          <Text>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  connexionButton: {
    backgroundColor: 'skyblue',
    borderRadius: 30,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
})
