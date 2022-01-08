import React, { useState, useContext} from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ProductsList } from './ProductsList';

export function Home({navigation}){
  const [input, setInput] = useState('');

  function verify(){
    if (input === '') {alert('Insira um nome válido!'); return;};
    
    return navigation.navigate('ProductsList');
  }

  
  return(

    <SafeAreaView style={styles.container}>
      <TextInput 
        placeholder='Usuário'
        placeholderTextColor='#747474'
        value={input}
        style={styles.input}
        onChangeText={ (texto) => setInput(texto) }
        />

      <TouchableOpacity onPress={verify} style={styles.head}>
        <Text style={{color: "#000"}}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input:{
    fontSize:15,
    marginLeft:10,
    marginRight:10,
    marginTop:30,
    backgroundColor:'#FFF',
    padding:9,
    height: 45,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  head:{
    marginLeft:10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#FFF',
    alignSelf: 'center',
  },
  container:{
    flex:1,
    backgroundColor: '#eeeeee',
  },
})