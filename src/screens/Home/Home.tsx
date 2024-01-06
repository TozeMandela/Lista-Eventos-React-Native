import React, { useState } from 'react'
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './homeStyles';
import { Participant } from '../../components';

export const Home = () => {
  const [part, setPart] = useState('');
  const partcipant = ["Alice", "Bob", "Carlos", "Diana", "Bill"];

  function handleParticipantAdd () {
    console.log(part);
    
    if(partcipant.includes(part)) return;
    partcipant.push(part);
  }

  function handleRemuve (value: string) {
    Alert.alert('remover participante?', `nome do ${value}`, 
    [
      {
        text: 'sim',
        onPress: () => Alert.alert('removido')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])   
  }


  return (
    <View style={styles.container} > 
        <Text style={styles.h1}>Nome do Evento</Text>
        <Text style={styles.date}>Criado em 05 de janeiro de 2024</Text>
        
        <View style={styles.form}>
          <TextInput style={styles.input} value={part} onChangeText={(e) => setPart(e)} placeholder='digite o evento' placeholderTextColor={'#b8b8b8'}/>
          <TouchableOpacity style={styles.containerBotao} onPress={handleParticipantAdd}>
            <Text style={styles.botao}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ }}>
          <FlatList 
            data={partcipant}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Participant
              key={item}
              name={item}
              onRemuve={() => handleRemuve(item)}
              />
            )}
            />          
        </View>
    </View>
  )
}