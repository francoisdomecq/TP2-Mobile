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

interface ClassStateType {
  tabLogin : Array<string>
}

export default class AuthForm extends Component<{},ClassStateType> {
  constructor(public props: {}){
    super(props);
    this.state={
      tabLogin:[],
    }
  }
  dispAlert = (text: string) => {
    Alert.alert('Action sélectionnée', text)
  }

  changeLoginInformations = (value:string )=>{
    let newLoginInformations = [...this.state.tabLogin,value]
    this.setState({tabLogin:newLoginInformations})
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 96, height: 96 }}
          source={require('../assets/koala.png')}
        />
        <Input placeHolder="Email" image={require('../assets/arobase.png')} handleChange ={this.changeLoginInformations}/>
        <Input
          placeHolder="Mot de passe"
          image={require('../assets/key.png')}
          handleChange ={this.changeLoginInformations}
        />
        <TouchableOpacity
          style={styles.connexionButton}
          onPress={() =>
            this.dispAlert(
              `${this.state.tabLogin[0]} && ${this.state.tabLogin[1]}`
            )
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
    height:50,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'white',
    fontSize:16,
 
  }
})
