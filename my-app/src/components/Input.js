import { View, TextInput, StyleSheet } from 'react-native';

export default function Input({ value, onChangeText }) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={value} onChangeText={onChangeText} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },

    input: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 2,
    }
});