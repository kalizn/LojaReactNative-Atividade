import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { CartContext } from '../CartContext';

export function Cart ({navigation}) {

  const {items, getItemsCount, getTotalPrice, removeAll} = useContext(CartContext);
  
  function back() {
    navigation.navigate('Home');

  }

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
      <View>
        <View style={styles.cartLineTotal}>
            <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
            <Text style={styles.lineRight}>R$ {total}</Text>

            
        </View>
        <View>
          <TouchableOpacity onPress={back} style={styles.head}>Finalizar Compra</TouchableOpacity>
        </View>
       </View>
    );
  }

  function renderItem({item}) {
    return (
       <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
          <Text style={styles.lineRight}>R$ {item.totalPrice}</Text>
       </View>
    );
  }
  
  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}

const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#993399',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#000' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#000', 
    textAlign:'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  head:{
    marginLeft:10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000',
    alignSelf: 'center',
  },
});
