import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { nome, telefone } from './Label';

export default function List({ lista }) {
    return (
        <>
            <View style={styles.list}>
                <View style={styles.listheader}>
                    <Text style={[styles.label, styles.column]}>{nome}</Text>
                    <Text style={[styles.label, styles.column]}>{telefone}</Text>
                </View>
            </View>

            <ScrollView>
                {lista.map((item, index) => (
                    <View style={styles.listitem} key={index}>
                        <Text style={styles.column}>{item.nomes}</Text>
                        <Text style={styles.column}>{item.telefones}</Text>
                    </View>
                ))}
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    list: {
        margin: '1%',
    },

    listheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },

    listitem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },

    column: {
        flex: 1,
        textAlign: 'left',
    },
});
