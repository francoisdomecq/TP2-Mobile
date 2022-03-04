import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
} from 'react-native'

import moduleService, { Module } from '../services/module.service'
import InputContainer from './Input'
import ModuleItem from './ModuleItem'

interface classState {
  year: string
  modules: Array<Module>
}

export default class ModuleList extends Component<{}, classState> {
  state: classState = { modules: [], year: '' }

  loadModules = () => {
    moduleService.getAll().then((modules) => {
      let displayedModules = modules
      if (['1A', '2A', '3A'].includes(this.state.year)) {
        displayedModules = modules.filter(
          (module) => module.year === this.state.year
        )
      }
      this.setState({ modules: displayedModules })
    })
  }

  clearModules = () => {
    this.setState({ modules: [] })
  }

  //   componentDidMount() {
  //     this.loadModules()
  //   }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Année (1A 2A ou 3A)"
          style={styles.textInput}
          onChange={(event) => {
            this.setState({ year: event.nativeEvent.text })
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.loadModules()}
        >
          <Text style={styles.textButton}>Afficher les modules</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.clearModules()}
        >
          <Text style={styles.textButton}>Effacer les modules</Text>
        </TouchableOpacity>
        <FlatList<Module>
          data={this.state.modules}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: Module }) => (
            <ModuleItem module={item} />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
  },
  button: {
    backgroundColor: 'skyblue',
    height: 50,
    width: 375,
    borderRadius: 35,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textInput: {
    height: 50,
    width: 375,
    fontSize: 25,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    alignSelf: 'center',
    paddingLeft: 20,
  },
})
