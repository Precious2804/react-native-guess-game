import { StyleSheet, Text } from 'react-native'
import Colors from '../constants/colors';

export default function InstructionText({ children }) {
    return (
        <Text style={styles.instructText}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructText: {
        fontSize: 18,
        fontFamily: 'open-sans',
        color: Colors.secondary100,
        marginBottom: 20
    },
});