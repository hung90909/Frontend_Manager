import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
//import { icon } from '../conten';

export default function EditScreen(props) {
    const route = useRoute();
    const navigation = props.navigation;
    const { item, setData, data } = route.params;
    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);
    const [Image, setImage] = useState(item.Image);
    const [statut, setStatut] = useState(item.statut);
    const [LoaiSP, setLoaiSP] = useState(item.LoaiSP);
    const onClear = () => {
        setName("");
        setPrice("");
        setImage("");
        setStatut("");
        setLoaiSP("");
    }
    const onEdit = (idEdit) => {
        const newList = data.map(item => {
            if (item.id === idEdit) {
                item.name = name;
                item.price = price;
                item.Image = Image;
                item.statut = statut;
                item.LoaiSP = LoaiSP;

            }
            return item;
        })
        setData(newList);
        onClear();
    }
    return (
        <View style={{ padding: 20 }}>
            <Text style={{
                fontSize: 25, fontWeight: "bold", alignSelf: "center",
                marginTop: 10
            }}>Edit Shop</Text>

            <TextInput
                value={name}
                onChangeText={(text) => {
                    setName(text);
                }}
                style={{ marginTop: 30, borderWidth: 1, padding: 7 }}
                placeholder='Name Store' />

            <TextInput
                value={price}
                onChangeText={(text) => {
                    setPrice(text);
                }}
                style={{ marginTop: 20, borderWidth: 1, padding: 7 }}
                placeholder='Phone' />
            <TextInput
                value={Image}
                onChangeText={(text) => {
                    setImage(text);
                }}
                style={{ marginTop: 20, borderWidth: 1, padding: 7 }}
                placeholder='Link image' />
                <Text>
                    0:Còn hàng
                    1:Hết hàng

                    
                </Text>
            <TextInput
                value={statut}
                onChangeText={(text) => {
                    setStatut(text);
                }}
                style={{ marginTop: 20, borderWidth: 1, padding: 7 }}
                placeholder='Status' />
                  <Text>
                    0:Điện thoại
                    1:Máy tính
                    2:Phụ kiện điện tử
                    
                </Text>
            <TextInput
                value={LoaiSP}
                onChangeText={(text) => {
                    setLoaiSP(text);
                }}
                style={{ marginTop: 20, borderWidth: 1, padding: 7 }}
                placeholder='Loại Sản Phẩm' />
            <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 30 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}
                    style={{
                        backgroundColor: "red", borderRadius: 8,
                        marginRight: 10
                    }}>
                    <Text style={{ color: "white", padding: 10, fontWeight: "bold", }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        onEdit(item.id);
                        navigation.navigate("More")

                    }}
                    style={{ backgroundColor: "red", borderRadius: 8 }}>
                    <Text style={{ color: "white", padding: 10, fontWeight: "bold" }}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}