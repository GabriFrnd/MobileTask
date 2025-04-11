import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

import Header from './src/components/Header';
import Form from './src/components/Form';

import Line from './src/components/Line';
import List from './src/components/List';

export default function App() {
  const [nomes, setNomes] = useState('');
  const [telefones, setTelefones] = useState('');
  const [lista, setLista] = useState([]);

  const registrarDados = () => {
    if (nomes.trim() === '' || telefones.trim() === '') return;
    setLista([...lista, { nomes, telefones }]);

    setNomes('');
    setTelefones('');
  };

  return (
    <View style={styles.container}>
      <Header />

      <Form
        nomes={nomes}
        setNomes={setNomes}
        telefones={telefones}
        setTelefones={setTelefones}
        registrarDados={registrarDados}
      />

      <Line />
      <List lista={lista} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
});
