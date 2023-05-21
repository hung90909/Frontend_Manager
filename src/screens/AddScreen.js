
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

export default function AddScreen(props) {
    const route = useRoute();
    const {data, setData} = route.params;
    const MoveScesen = (tenMH, data = {}) => {
        navigation.navigate(tenMH, data);
    }
    const navigation = props.navigation;
    const onClear = () => {
        setName("");
        setPrice("");
        setImage("");
        setStatut("");
        setLoaiSP("");
    }
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [Image, setImage] = useState('');
    const [statut, setStatut] = useState('');
    const [LoaiSP, setLoaiSP] = useState('');

    const newList = {
        id: data.length == 0 ? 1 : data[data.length - 1].id + 1,
        name, price, Image,statut,LoaiSP
    }


    return (
        <View style={{ padding: 20 }}>
            <Text style={{
                fontSize: 25, fontWeight: "bold", alignSelf: "center",
                marginTop: 10
            }}>Add Store</Text>
            <TextInput
                onChangeText={(text) => {
                    setName(text);
                }}
                style={{ marginTop: 30, borderWidth: 1, padding: 7 }}
                placeholder='Name Store' />
            <TextInput
                onChangeText={(text) => {
                    setPrice(text);
                }}
                style={{ marginTop: 20, borderWidth: 1, padding: 7 }}
                placeholder='Price' />
            <TextInput
                onChangeText={(text) => {
                    setImage(text);
                }}
                style={{ marginTop: 20, borderWidth: 1, padding: 7 }}
                placeholder='Link image' />
                <Text>
                    0:Điện thoại
                    1:Máy tính
                    2:Phụ kiện điện tử
                    
                </Text>
              <TextInput
                onChangeText={(text) => {
                    setLoaiSP(text);
                }}
                style={{ marginTop: 20, borderWidth: 1, padding: 7 }}
                placeholder='LoaiSP' />
                 <Text>
                    0:Còn hàng
                    1:Hết hàng

                    
                </Text>
                <TextInput
                onChangeText={(text) => {
                    setStatut(text);
                }}
                style={{ marginTop: 20, borderWidth: 1, padding: 7 }}
                placeholder='Status' />
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
                      setData([...data, newList]);
                      onClear();
                      navigation.navigate('Main');
                      
                    }}
                    style={{ backgroundColor: "red", borderRadius: 8 }}>
                    <Text style={{ color: "white", padding: 10, fontWeight: "bold" }}>Save</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}