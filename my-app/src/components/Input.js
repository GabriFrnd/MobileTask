import { View, TextInput, StyleSheet } from 'react-native';

export default function Input() {
    return (
        <View>
            <TextInput style={styles.input} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 2,
    }
});