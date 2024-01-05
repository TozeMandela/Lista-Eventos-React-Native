import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container: {
        backgroundColor: '#003157',
        borderRadius: 6,
        flex: 1,
        justifyContent: 'center',
        padding: 4
    },
    name: {
        color: '#ddccee'
    },

    containerBotao: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        backgroundColor: '#e23c44',
        borderTopEndRadius: 6,
        borderBottomRightRadius: 6,
    },

    botao: {
        color: 'white',
        fontSize: 24,
    },

    flex: {
        flexDirection: 'row',
        margin: 4
    }



})