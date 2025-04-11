import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'; 
import { cadastrar } from './Label';

export default function Submit() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={StyleSheet.text}>{cadastrar}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderWidth: 1,
        borderColor: 'skyblue',
        flex: 1,
        marginTop: 10,
        padding: 2,
        width: '100%'
    },

    text: {
        color: '#000',
        fontFamily: 'sans-serif',
        fontSize: 15,
    }
});