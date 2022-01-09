import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';

export function ProductsList ({navigation, route}) {

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
      
    );
  }
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(getProducts());
  });
  
  return (
    <View>
      <Text style={styles.title}>Loja do Antonio Neto</Text>
      <Text style={styles.title}>Bem vindo {route.params.input}</Text>
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
    /></View>
    
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  title:{
    marginTop: 0,
    paddingBottom: 0,
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
  },
});
