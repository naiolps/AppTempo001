import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Tempo(props){
   return(
   <>
       <Text style={styles.texto}> Tempo agora: {"\n"}</Text>
       <Text style={styles.texto}> Hora da consulta: {props.clima.time}{"\n"}</Text>
       <Text style={styles.texto}> Data: {props.clima.date}{"\n"}</Text>
       <Text style={styles.texto}> Descrição: {props.clima.forecast[0].description}{"\n"}</Text>
       <Text style={styles.texto}> Min: {props.clima.forecast[0].min}{"\n"}</Text>
       <Text style={styles.texto}> Max: {props.clima.forecast[0].max}{"\n"}</Text>
       <Text style={styles.texto}> temperatura: {props.clima.temp}{"\n"}</Text>
       <Text style={styles.texto}> Tempo amanhã: {"\n"}</Text>
       <Text style={styles.texto}> Descrição: {props.clima.forecast[1].description}{"\n"}</Text>
       <Text style={styles.texto}> Min: {props.clima.forecast[1].min}{"\n"}</Text>
       <Text style={styles.texto}> Max: {props.clima.forecast[1].max}{"\n"}</Text>
    </>
   );
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 15
    },
    container: {
        flex: 1,
        backgroundImage: "url('https://wallpapersmug.com/download/2048x1152/db1982/vegeta-artwork.jpg')"
        
      },
});