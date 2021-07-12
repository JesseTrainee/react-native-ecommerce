import React from 'react';
import { View , Text, Image } from 'react-native';
import * as S from './styles'

function Card(props){
    const imagem = props.url
    
    return(
        <View style={S.Container}>
            <Text style={S.Titulo} >{props.nome}</Text>
            <Image style={{width:100,height:100}} source={{uri:props.imagem}}/>
            <Text style={S.Info}>{props.preco}</Text>
        </View>
    )
}
export default Card;