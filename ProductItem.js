import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export function ProductItem({ product, onPressEdit, onPressDelete }) {
  return (
    <TouchableOpacity>
      <View>
        <Image source={{ uri: product.image }} style={{ width: 50, height: 50 }} />
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
        <TouchableOpacity onPress={onPressEdit}>
          <Text>Sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressDelete}>
          <Text>Xóa</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default ProductItem;
