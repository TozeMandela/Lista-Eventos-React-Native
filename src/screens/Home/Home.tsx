import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './homeStyles';
import { Participant } from '../../components';

export const Home = () => {

  function handleParticipantAdd () {
    console.log('voce clicou no botão');    
  }

  return (
    <View style={styles.container} > 
        <Text style={styles.h1}>Nome do Evento</Text>
        <Text style={styles.date}>Criado em 05 de janeiro de 2024</Text>
        
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder='digite o evento' placeholderTextColor={'#b8b8b8'}/>
          <TouchableOpacity style={styles.containerBotao} onPress={handleParticipantAdd}>
            <Text style={styles.botao}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <Participant name='Mandela'/>
        <Participant name='José'/>
    </View>
  )
}