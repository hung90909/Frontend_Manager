
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
// import AsyncStorage from '@react-native-community/async-storage';
export default function HomeScreen(props) {
    const navigation = props.navigation;
    const route = useRoute();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [statut, setStatut] = useState(0);
    const [LoaiSP, setLoaiSP] = useState(0);
    const onClear = () => {
        setName("");
        setPrice("");
        setImage("");
        setStatut("");
        setLoaiSP("");

    }
    const [data, setData] = useState([
        {
            id: 1,
            name: "Nokia",
            price: "99999",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMqEf2dpscLE7CPE2JmkFF_7bHTFQQ36_fw&usqp=CAU",
            statut: 0,
            LoaiSP:0,
        },
        {
            id: 2,
            name: "May tinh",
            price: "88888",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_pMr_1_NX1ugSiHtX5zujjn7ASnpDonyTQ&usqp=CAU",
            statut: 0,
            LoaiSP:1
        },
        {
            id: 3,
            name: "Tai nghe",
            price: "777777",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcL6zSX-6xoYU3v11LoeXzd8yQLOYCa3uWA&usqp=CAU",
            statut: 0,
            LoaiSP:2
        },
        {
            id: 4,
            name: "Nokia",
            price: "99999",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMqEf2dpscLE7CPE2JmkFF_7bHTFQQ36_fw&usqp=CAU",
            statut: 0,
            LoaiSP:0,
        },
        {
            id: 5,
            name: "May tinh",
            price: "88888",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_pMr_1_NX1ugSiHtX5zujjn7ASnpDonyTQ&usqp=CAU",
            statut: 0,
            LoaiSP:1
        },
        {
            id: 6,
            name: "Tai nghe",
            price: "777777",
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcL6zSX-6xoYU3v11LoeXzd8yQLOYCa3uWA&usqp=CAU",
            statut: 0,
            LoaiSP:2
        },
    ]);
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
    const [columns, setColumns] = useState(2);
    return (
        <View >
            <View>

                <Image style={{
                    height: 100, width: '100%'
                }}

                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgO3KNcuuOotmzngrkIq1immROIvJdI4tKrw&usqp=CAU' }} />
            </View>
            <View>
                <Text style={{ fontSize: 25, padding: 10, color: "#FF6600" }}>
                    DANH MỤC
                </Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                    <Image style={{ height: 60, width: 60, borderRadius: 10, backgroundColor: "red" }}   source={require("../../assets/lan.png")} />
                    <Image style={{ height: 60, width: 60, borderRadius: 10, backgroundColor: "blue" }}  source={require("../../assets/desktop.png")} />
                    <Image style={{ height: 60, width: 60, borderRadius: 10, backgroundColor: "green" }} source={require("../../assets/smartphone.png")} />
                    <Image style={{ height: 60, width: 60, borderRadius: 10, backgroundColor: "#ff66" }} source={require("../../assets/processor.png")}/>
                </View>

            </View>
            <Text style={{ fontSize: 25, padding: 10, color: "#FF6600" }}>
                TẤT CẢ SẢN PHẨM
            </Text>
            <View style={{ height: 444, alignItems:'center',backgroundColor:'#DCDCDC' }}>

    <FlatList
        key={columns}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Detail', { item, setData, data })
                }}>
                    <View style={{
                        borderRadius:30,
                        backgroundColor:'#ffffff',
                        alignItems:'center',
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginVertical: 10,
                        width:190,
                        margin:1,
                        height: 300,
                        overflow: "hidden"
                    }}>
                        <Image style={{
                            height: 100,
                            width: 100,
                            borderTopLeftRadius: 25,
                            borderTopRightRadius: 25,
                            resizeMode: 'cover',
                            marginTop:10
                        }}
                            source={{ uri: item.Image }} />
                        <View style={{ marginLeft: 10, flex: 1, }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
                            <Text style={{ fontSize: 20, color: 'red' }}> {item.price} đ</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text>Status: </Text>
                                <Text style={{ color: ColorStatut(item.statut) }}>{Statut(item.statut)}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }}
        extraData={columns}
        />
</View>


            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Add", { data, setData });
                }}
                style={{
                    width: 50, height: 50, borderRadius: 25,
                    backgroundColor: "red", position: "absolute", bottom: 100, right: 10,
                    alignItems: "center", justifyContent: "center"
                }}>
                <Image style={{ width: 20, height: 20 }} source={require("../../assets/plus.png")} />
            </TouchableOpacity>

        </View>

    )

}