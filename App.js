import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Tempo from './componentes/Tempo';
import Api from './componentes/API';



export default function App() {
  const [dados, setDados] = useState("");

  async function CarregaDados(){
    const response = await Api.get(`weather?array_limit=1&fields=only_results,temp,city_name,description,forecast,max,min,date&key=281e8436&city_name=mongagua,SP`)
    setDados(Response.data.forecast[0]);
  }
  return (
    <View style={styles.container}>
      <View>
         <Text style={styles.titulo}>Previsão do Tempo </Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.label}>Cidade:</Text>
        <TextInput
        palceholder='digite o nome de uma cidade'
        style={styles.input}
        />
      </View>
    <View style={styles.bloco}>
      <TouchableOpacity style={styles.botao} onPress={CarregaDados}>
        <Text style={styles.textoBotao}>Buscar</Text>
      </TouchableOpacity >
    </View>
    <View style={styles.bloco}>
       <Tempo clima={dados}/>
    </View>
    </View>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
    
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
  }
});
