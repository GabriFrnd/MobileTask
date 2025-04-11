import { View, Text, StyleSheet } from 'react-native';

import { nome, telefone } from './Label';
import Input from './Input';
import Submit from './Submit';

export default function Form({ nomes, setNomes, telefones, setTelefones, registrarDados }) {
  return (
    <View style={styles.form}>
      <View style={styles.inputgroup}>
        <Text style={styles.label}>{nome}</Text>
        <Input value={nomes} onChangeText={setNomes} />
      </View>

      <View style={styles.inputgroup}>
        <Text style={styles.label}>{telefone}</Text>
        <Input value={telefones} onChangeText={setTelefones} />
      </View>

      <View style={styles.inputgroup}>
        <Text style={styles.label}></Text>
        <Submit onPress={registrarDados} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginRight: '5%',
    marginTop: 20,
  },

  inputgroup: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 7,
  },

  label: {
    fontFamily: 'sans-serif',
    fontSize: 13,
    width: 80,
  },
});
