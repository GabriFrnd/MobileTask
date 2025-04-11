import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'; 
import { cadastrar } from './Label';

export default function Submit({ onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{cadastrar}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#DDE8FA',
        borderWidth: 1,
        borderColor: '#A6B9D9',
        flex: 1,
        marginTop: 10,
        padding: 2,
        width: '100%',
    },

    text: {
        color: '#000',
        fontFamily: 'sans-serif',
        fontSize: 13,
    }
});