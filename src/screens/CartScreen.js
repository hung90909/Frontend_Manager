import React, { useState } from 'react';
import { FlatList, TextInput, Image, StyleSheet, TouchableWithoutFeedback, Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function CartScreen({ propps }) {
    const navigation = useNavigation();
    const route = useRoute();
    const { cartItems  } = route.params ;
    const [columns, setColumns] = useState(2);

    const Statut = (status) => {
        if (status === 0) {
            return "Còn hàng";
        } else if (status === 1) {
            return "Hết hàng";
        }
    };

    const ColorStatut = (status) => {
        if (status === 0) {
            return "green";
        } else if (status === 1) {
            return "red";
        }
    };
    return (
        <View>
            <FlatList
                key={columns}
                data={cartItems}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity

                        // onPress={() => {
                        //     navigation.navigate('Detail', { item, setData, data })
                        // }}
                        >

                            <View style={{
                                borderRadius: 10,
                                backgroundColor: '#F1F1F1',

                                flexDirection: "column",
                                justifyContent: "space-between",
                                marginVertical: 5,
                                width: 190,
                                margin: 5,
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

                                    <Text style={{ fontSize: 20, color: 'red', top: 10 }}> {item.price} đ</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ color: ColorStatut(item.statut), top: 10 }}>{Statut(item.statut)}</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#00B761',
                                    width: 30,
                                    height: 30,
                                    borderRadius: 69,
                                    position: 'absolute',
                                    bottom: 20,
                                    right: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Image style={{ width: 15, height: 15, tintColor: '#fff' }} source={require("../../assets/add.png")} />
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

