import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AuthForm from './components/AuthForm'
import ModuleList from './components/ModuleList'

export default function App() {
  const [isUserConnected, setUserConnected] = useState(false)

  function connection() {
    setUserConnected(true)
  }
  return (
    <View style={styles.container}>
      
      {isUserConnected ? (
        <ModuleList />
      ) : (
        <AuthForm onConnection={connection} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
