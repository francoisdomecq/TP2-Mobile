
import { StyleSheet, Text, View } from 'react-native';
import AuthForm from './components/AuthForm'

export default function App() {
  return (
    <View style={styles.container}>
      <AuthForm/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
