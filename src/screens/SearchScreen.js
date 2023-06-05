import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen({ route }) {
  const { searchResults } = route.params;
  const navigation = useNavigation();

  const Statut = (stus) => {
    if (stus == 0) {
      return "Còn hàng";
    } else if (stus == 1) {
      return "Hết hàng";
    }
  };

  const ColorStatut = (stus) => {
    if (stus == 0) {
      return "green";
    } else if (stus == 1) {
      return "red";
    }
  };

  const [columns, setColumns] = useState(2);

  const handleItemPress = (item) => {
    navigation.navigate('Detail', { item });
  };

  return (
    <View style={{backgroundColor:'#fff',height:'100%'}}>
      <FlatList
        key={columns}
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity

              onPress={() => {
               {handleItemPress(item)}
              }}>

              <View style={{
                borderRadius: 10,
                backgroundColor: '#F1F1F1',

                flexDirection: "column",
                justifyContent: "space-between",
                marginVertical: 5,
                width: 190,
                margin: 1,
                height: 230,
                overflow: "hidden"
              }}>
                <TouchableOpacity
                  onPress={() => handleFavoritePress(item.id)}
                  style={{
                    position: 'absolute',
                    top: 20,
                    right: 10,
                  }}
                >

                  {item.isFavorite ? (
                    <Image source={require("../../assets/heart_red.png")} style={styles.favoriteIcon} />
                  ) : (
                    <Image source={require("../../assets/heart.png")} style={styles.favoriteIcon} />
                  )}
                </TouchableOpacity>


                <View style={{ alignItems: 'center', width: '100%' }}>
                  <Image style={{
                    height: 100,
                    width: 100,
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    resizeMode: 'cover',
                    marginTop: 10,

                  }}
                    source={{ uri: item.Image }} />
                </View>
                <Text style={{ fontSize: 22, top: 10, left: 20, fontWeight: "bold" }}>{item.name}</Text>
                <View style={{ marginLeft: 10, flex: 1, }}>

                  <Text style={{ fontSize: 20, color: 'red' }}> {item.price} đ</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: ColorStatut(item.statut) }}>{Statut(item.statut)}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#00B761',
                  width: 40,
                  height: 40,
                  borderRadius: 69,
                  position: 'absolute',
                  bottom: 40,
                  right: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image style={{ width: 30, height: 30 }} source={require("../../assets/add.png")} />
              </TouchableOpacity>

            </TouchableOpacity>
          )
        }}
        extraData={columns}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  favoriteIcon: {
    width: 20,
    height: 20,
  },
});
