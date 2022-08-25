import React, { useState } from 'react';
import { StyleSheet,ImageBackground, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Tempo from './componentes/Tempo';
import Api from './componentes/API';



export default function App() {
  const [dados, setDados] = useState("");
  const [cidade, setCidade] = useState("");


  
  async function carregaDados(){
    const response = await Api.get(`weather?array_limit=2&fields=only_results,temp,city_name,time,description,forecast,max,min,date&key=c03b5090&city_name=${cidade}`)
    setDados(response.data);
  }
  return (
    <View style={styles.container}>
      <View>
         <Text style={styles.titulo}>Previsão do Tempo </Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.label}>Cidade:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite aqui sua cidade'
          keyboardType='text'
          onChangeText={(value)=>setCidade(value)}
        />
        <TouchableOpacity
         style={styles.botao}
         onPress={carregaDados}
        >
        <Text style={styles.textoBotao}> Buscar </Text>
        </TouchableOpacity>
    </View>
    <View style={styles.bloco}>
       <Tempo clima={dados}/>
    </View>
    </View>
       

      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    
  },
  titulo:{
    fontSize:30,
    textAlign:'center',
    marginTop:50
  },
  label:{
     fontSIZE:30
  },
  bloco:{
    marginTop:30,
    marginLeft:'20%'
  },
  input:{
    borderBottomWidth:2,
    width:"80%",
    fontSize:20
  },
  botao:{
    width:'80%',
    backgroundColor:'#000',
    alignItems:'center'
  },
  textoBotao:{
    fontSize:20,
    color: '#fff'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});



