import { View, StyleSheet } from 'react-native';

export default function Line() {
    return (
        <View style={styles.line}></View>
    );
}

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 10,
        marginTop: 10,
        width: '100%'
    }
});