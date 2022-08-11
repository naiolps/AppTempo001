import React from 'react';
import {Text, StyleSheet} from 'reac-native';

export default function Tempo(props){
   return(
   <>
       <Text style={styles.texto}>min: {props.clima.min} </Text>
       <Text style={styles.texto}>max: </Text>
       <Text style={styles.texto}>Descrição: </Text>
    </>
   );
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
        marginTop:10
    },
});