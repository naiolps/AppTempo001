import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';


export default function App() {
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
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Buscar</Text>
      </TouchableOpacity>
    </View>
    <View>

    </View>
    </View>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'gray'
  },
  titulo:{
    fontSize:30,
    textAlign:'center'
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
