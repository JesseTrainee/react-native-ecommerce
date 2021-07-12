import React, { useEffect, useState } from 'react';
import { View , Text,ScrollView} from 'react-native';
import apiProduto from '../../../service/apiProduto';
import Produto from '../../../model/produto'
import Card from '../../card/index'
// import { Container } from './styles';

const Home = () => {
    const [produtos,setProdutos] = useState([])
    
    const handleProdutos = async () =>{
        const resposta = await apiProduto.buscarTodosProduto();
        setProdutos(resposta.data.map( produto => new Produto(produto)));
    }

    useEffect(()=>{
        handleProdutos();
    },[produtos])

  return (
    <View>
        <ScrollView>
      {produtos.map(produto => (
          <View key={produto.nome }>
                <Card nome={produto.nome} preco={produto.preco} imagem={produto.url}/>
          </View>
      ))}
        </ScrollView>
    </View>
  )
}

export default Home;