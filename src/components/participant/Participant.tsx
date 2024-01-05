import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './stylesParticipant'


interface IpropsParticipant {
    name: string,
}


export const Participant: React.FC<IpropsParticipant> = ({name}) => {
  return (
    <View style={styles.flex}> 
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
        </View>
        <TouchableOpacity style={styles.containerBotao}>
            <Text style={styles.botao}>
                -
            </Text>
        </TouchableOpacity>
    </View>
  )
}
