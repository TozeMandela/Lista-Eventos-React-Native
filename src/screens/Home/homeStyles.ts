import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        height: 1000,
        backgroundColor: '#161616',
        padding: 12,
    },

    h1: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
        letterSpacing: 4,
        marginBottom: 3,
    },
    date: {
        color: 'white',
        letterSpacing: 4,
        marginBottom: 3,
    },

    input: {
        flex: 1,
        backgroundColor: '#5a5a5a',
        borderRadius: 6,
        padding: 5,
        maxWidth: '80%'
    },    

    containerBotao: {
        marginLeft:5,
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        backgroundColor: '#31cf67',
        borderRadius: 6,
    },

    botao: {
        color: 'white',
        fontSize: 24,
    },

    form: {
        flexDirection: 'row',
        marginTop: 30,
        marginVertical: 30
    }

})