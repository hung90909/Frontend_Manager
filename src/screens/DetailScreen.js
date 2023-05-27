import { FlatList, Image,Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';

export default function DetailScreen(props) {
    const route = useRoute();
    const navigation = props.navigation;

    const { item, data, setData } = route.params;
    const onDelete = (idItem) => {
        const newList = data.filter((item) => item.id !== idItem);
        setData(newList);

    }
    const LoaiSP = (sp) => {
        if (sp == 0) {
            return "Điện thoại"
        } else if (sp == 1) {
            return "Máy tính"
        }else if (sp == 2) {
            return "Phụ kiện điện tử"
        }
    }
    const Statut = (stus) => {
        if (stus == 0) {
            return "Còn hàng"
        } else if (stus == 1) {
            return "Hết hàng"
        }
    }
    const ColorStatut = (stus) => {
        if (stus == 0) {
            return "green"
        } else if (stus == 1) {
            return "red"
        }
    }
    const handlePress = () => {
        const message = item.statut === 0 ? 'Đã mua hàng' : 'Hết hàng';
        Alert.alert(message);
     
      };
    return (
        <View style={{backgroundColor:'#DCDCDC',height:'100%'}}>
            <View style={{
                height: 300,marginTop:50,
            }}>
                
                <Text style={{fontSize:20,marginLeft:30,marginBottom:30}}>{LoaiSP(item.LoaiSP)}</Text>

                <Image
                    style={{
                        height: 200, width: 200, borderRadius: 30, alignSelf: 'center',
                        marginLeft: 15
                    }}

                    source={{ uri: item.Image }} />
                <View style={{backgroundColor:'#DCDCDC',}}>


                    <Text style={{
                         fontSize: 20, fontWeight: "bold", marginLeft: 30, marginTop: 70,
                        color: "black"
                    }}>{item.name}</Text>

                </View>
                <View style={{ flexDirection: "row",marginTop:10,marginLeft:30 }}>

                    <Text style={{ color: ColorStatut(item.statut) }}>{Statut(item.statut)}</Text>
                </View>
                <Text style={{ marginLeft: 8 ,fontSize:20,color:'red' }}> {item.price} đ</Text>

                
            </View>
            {/* <View style={{ paddingHorizontal: 20 }}>
                <View style={{ flexDirection: "row", marginVertical: 10, marginTop: 18 }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Edit", {item, setData , data })

                        }}
                        style={{
                            height:40,
                            width: "50%",
                            backgroundColor: "gray",
                            alignItems: "center",
                            borderRadius: 10,
                            marginRight: 10,
                            justifyContent: "center",
                            flexDirection: "row",
                        }}>
                        <Image style={{
                            width: 15, height: 15, tintColor: "white",
                            marginRight: 10
                        }} />
                        
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            onDelete(item.id);
                            navigation.navigate("Main");

                        }}
                        style={{
                            flex: 1,
                            backgroundColor: "red",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 10,
                        }}>
                        <Image style={{ width: 15, height: 15, tintColor: "white" }} />
                    </TouchableOpacity>
                </View>
            </View> */}
            <TouchableOpacity
      style={{
        width: 60,
        height: 60,
        borderRadius: 25,
        position: 'absolute',
        bottom:300,
        right:0,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={handlePress}>
    <Image style={{ width: 30, height: 30 }} source={require("../../assets/cart.png")} />
    </TouchableOpacity>
        </View>
            
    )

}