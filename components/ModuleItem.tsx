import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Module } from '../services/module.service'

interface classProps {
  module: Module
}

export default class ModuleItem extends Component<classProps, {}> {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{this.props.module.name}</Text>
            <Text style={styles.annee_text}>{this.props.module.year}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={4}>
              {this.props.module.description}
            </Text>
          </View>
          <View style={styles.respo_container}>
            <Text style={styles.respo_text}>
              Responsable {this.props.module.teacher}
            </Text>
          </View>
        </View>
        <Image
          style={styles.image}
          source={{ uri: this.props.module.imageUrl }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    margin: 10,
  },
  image: {
    width: 120,
    height: 150,
    margin: 5,
    borderRadius: 30,
    backgroundColor: 'lightgray',
  },
  content_container: {
    flex: 1,
    margin: 5,
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
  },
  annee_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666',
  },
  description_container: {
    flex: 7,
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
  },
  respo_container: {
    flex: 1,
  },
  respo_text: {
    textAlign: 'right',
    fontSize: 14,
  },
})