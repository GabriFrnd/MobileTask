import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View>
            <Text style={styles.title}>Cadastro de Usuário</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'sans-serif',
        fontSize: 15,
        fontWeight: 'bold'
    }
});