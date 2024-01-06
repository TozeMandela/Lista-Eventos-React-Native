import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './stylesParticipant'


interface IpropsParticipant {
    name: string,
    onRemuve: () => void,
}


export const Participant: React.FC<IpropsParticipant> = ({name, onRemuve}) => {
  return (
    <View style={styles.flex}> 
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
        </View>
        <TouchableOpacity style={styles.containerBotao} onPress={onRemuve}>
            <Text style={styles.botao}>
                -
            </Text>
        </TouchableOpacity>
    </View>
  )
}
