import { View, Text, StyleSheet } from 'react-native';

import Header from './src/components/Header';
import { nome, telefone } from './src/components/Label';

import Input from './src/components/Input';
import Submit from './src/components/Submit';

import Line from './src/components/Line';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>{nome}</Text>

          <View style={styles.input}>
            <Input />
          </View>
        </View>

        <View style={styles.inputgroup}>
          <Text style={styles.label}>{telefone}</Text>

          <View style={styles.input}>
            <Input />
          </View>
        </View>

        <View style={styles.inputgroup}>
          <Text style={styles.label}></Text>

          <View style={styles.input}>
            <Submit />
          </View>
        </View>
      </View>

      <View>
        <Line />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20
  }, 

  form: {
    marginRight: '5%',
    marginTop: 20
  },

  inputgroup: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 7,
  },

  label: {
    fontFamily: 'sans-serif',
    fontSize: 13,
    fontWeight: 'bold',
    width: 80
  },

  input: {
    flex: 1,
    width: '100%'
  },  
});
