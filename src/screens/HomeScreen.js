import React, { useState , useEffect} from 'react';
import { FlatList, TextInput, Image, StyleSheet, TouchableWithoutFeedback, Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function HomeScreen(props) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigation = useNavigation();
    const nav = props.navigation;
    // const route = useRoute();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [statut, setStatut] = useState('');
    const [LoaiSP, setLoaiSP] = useState('');
    const [isFavorite, setIsFavorite] = useState('');
    const [TrangThaiHang, setTrangThaiHang] = useState('');
    const [sortByPrice, setSortByPrice] = useState('none');
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [addedProduct, setAddedProduct] = useState(null);
    const [activeTab, setActiveTab] = useState(0);


    const handleAddProduct = (productId) => {
        setCartItems([...cartItems, productId]);
        setAddedProduct(productId);
      };

      useEffect(() => {
        if (addedProduct) {
          console.log(cartItems.length);
          navigation.navigate("Cart", { cartItems });
        }
      }, [addedProduct, cartItems]);

    const onClear = () => {
        setName("");
        setPrice("");
        setImage("");
        setStatut("");
        setLoaiSP("");
        setIsFavorite("");
        setTrangThaiHang("");
    };

    const [data, setData] = useState([
        {
            id: 1,
            name: "Nokia",
            price: 999999,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMqEf2dpscLE7CPE2JmkFF_7bHTFQQ36_fw&usqp=CAU",
            statut: 0,
            LoaiSP: 1,
            isFavorite: false,
            TrangThaiHang: 0
        },
        {
            id: 2,
            name: "May tinh",
            price: 7777,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_pMr_1_NX1ugSiHtX5zujjn7ASnpDonyTQ&usqp=CAU",
            statut: 0,
            LoaiSP: 2,
            isFavorite: false,
            TrangThaiHang: 0
        },
        {
            id: 3,
            name: "Tai nghe",
            price: 111111111,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcL6zSX-6xoYU3v11LoeXzd8yQLOYCa3uWA&usqp=CAU",
            statut: 0,
            LoaiSP: 3,
            isFavorite: false,
            TrangThaiHang: 1
        },
        {
            id: 4,
            name: "Nokia",
            price: 545343,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMqEf2dpscLE7CPE2JmkFF_7bHTFQQ36_fw&usqp=CAU",
            statut: 0,
            LoaiSP: 1,
            isFavorite: false,
            TrangThaiHang: 0
        },
        {
            id: 5,
            name: "May tinh",
            price: 2312,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_pMr_1_NX1ugSiHtX5zujjn7ASnpDonyTQ&usqp=CAU",
            statut: 0,
            LoaiSP: 2,
            isFavorite: false,
            TrangThaiHang: 0
        },
        {
            id: 6,
            name: "Tai nghe",
            price: 1111,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcL6zSX-6xoYU3v11LoeXzd8yQLOYCa3uWA&usqp=CAU",
            statut: 0,
            LoaiSP: 3,
            isFavorite: false,
            TrangThaiHang: 0
        },
        {
            id: 7,
            name: "Nokia",
            price: 33434,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMqEf2dpscLE7CPE2JmkFF_7bHTFQQ36_fw&usqp=CAU",
            statut: 0,
            LoaiSP: 1,
            isFavorite: false,
            TrangThaiHang: 0
        },
        {
            id: 8,
            name: "May tinh",
            price: 12121,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_pMr_1_NX1ugSiHtX5zujjn7ASnpDonyTQ&usqp=CAU",
            statut: 0,
            LoaiSP: 2,
            isFavorite: false,
            TrangThaiHang: 0
        },
        {
            id: 9,
            name: "Tai nghe",
            price: 5541,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcL6zSX-6xoYU3v11LoeXzd8yQLOYCa3uWA&usqp=CAU",
            statut: 0,
            LoaiSP: 3,
            isFavorite: false,
            TrangThaiHang: 0
        },
        {
            id: 10,
            name: "Nokia",
            price: 2212,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMqEf2dpscLE7CPE2JmkFF_7bHTFQQ36_fw&usqp=CAU",
            statut: 0,
            LoaiSP: 1,
            isFavorite: false,
            TrangThaiHang: 0
        },
        {
            id: 11,
            name: "May tinh",
            price: 55555,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_pMr_1_NX1ugSiHtX5zujjn7ASnpDonyTQ&usqp=CAU",
            statut: 0,
            LoaiSP: 2,
            isFavorite: false,
            TrangThaiHang: 0
        },
        {
            id: 12,
            name: "Tai nghe",
            price: 1212,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcL6zSX-6xoYU3v11LoeXzd8yQLOYCa3uWA&usqp=CAU",
            statut: 0,
            LoaiSP: 3,
            isFavorite: false,
            TrangThaiHang: 0
        },

    ]);

    const handleSearch = () => {
        // Lọc mảng data dựa trên từ khóa tìm kiếm
        const results = data.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Chuyển sang màn hình SearchScreen và truyền kết quả tìm kiếm như một tham số
        navigation.navigate('Search', { searchResults: results });
    };
    const handleSortByPrice = () => {
        let sortedData = [];

        if (sortByPrice === 'asc') {
            sortedData = [...data].sort((a, b) => parseInt(a.price) - parseInt(b.price));
            setSortByPrice('desc');
        } else {
            sortedData = [...data].sort((a, b) => parseInt(b.price) - parseInt(a.price));
            setSortByPrice('asc');
        }

        setData(sortedData);
    };
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


    const filteredData = data.filter((item) => {
        if (activeTab === 1) {
            return item.LoaiSP === 1;
        } else if (activeTab === 2) {
            return item.LoaiSP === 2;
        } else if (activeTab === 3) {
            return item.LoaiSP === 3;
        } else if (activeTab === 4) {
            return item.isFavorite === true;
        }
    });

    const handleTabPress = (index) => {
        setActiveTab(index);
    };
    const handleFavoritePress = (id) => {
        const updatedData = data.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    isFavorite: !item.isFavorite
                };
            }
            return item;
        });

        setData(updatedData);

        const updatedFavoriteItems = updatedData.filter((item) => item.isFavorite);
        setFavoriteItems(updatedFavoriteItems);
    };


    const addToCart =(productId) => {
        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa

        const isProductInCart = cartItems.find(item => item.id === productId.id);
      
        if (isProductInCart) {
            // Nếu sản phẩm đã tồn tại trong giỏ hàng, bạn có thể thực hiện các xử lý tương ứng, ví dụ: tăng số lượng sản phẩm lên 1
            const updatedCartItems = cartItems.map(item => {
                if (item.id === productId.id) {
                    return {
                        ...item,
                        TrangThaiHang: item.TrangThaiHang + 1
                    };
                }
                return item;
            });
            setCartItems(updatedCartItems);
            navigation.navigate("Cart",{cartItems})
            console.log("Don hang da ton tai")
        } else {
            // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới vào
            handleAddProduct(productId)
            
        }
       
    };


    const [columns, setColumns] = useState(2);
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginLeft: 30 }}>
                <View style={{ marginTop: 50 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Welcome to
                    </Text>
                    <Text style={{ color: '#00B761', fontSize: 27, fontWeight: 'bold' }}> ISTORE</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {

                            const filteredItems = data.filter((item) => item.TrangThaiHang === 1);
                            navigation.navigate('Cart', { cartItems: filteredItems });
                        }}
                    >
                        <View style={{ height: 40, width: 40, right: -230, position: 'absolute', borderColor: 'black', borderRadius: 5, marginLeft: 10 }}>
                            <Image source={require("../../assets/cart.png")} style={{ width: 30, height: 30, alignContent: 'center', alignItems: 'center' }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                <TextInput
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        borderColor: '#f1f1f1',
                        backgroundColor: '#F1F1F1',
                        margin: 10,
                        padding: 5,
                        borderRadius: 10
                    }}
                    placeholder="Tìm kiếm theo tên sản phẩm"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    onSubmitEditing={handleSearch}
                />

                <TouchableOpacity onPress={handleSortByPrice}>
                    <View style={{ height: 40, width: 40, borderWidth: 1, borderColor: '#f1f1f1', borderRadius: 5, backgroundColor: '#00B761', marginRight: 10, justifyContent: 'center' }}>
                        <Image source={require("../../assets/order.png")} style={{ width: 30, height: 30, alignContent: 'center', alignItems: 'center', tintColor: '#fff' }} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ height: 50, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => handleTabPress(0)}>
                    <Text style={{ fontWeight: activeTab === 0 ? 'bold' : 'normal', color: activeTab === 0 ? '#00B761' : 'black' }}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress(1)}>
                    <Text style={{ fontWeight: activeTab === 1 ? 'bold' : 'normal', color: activeTab === 1 ? '#00B761' : 'black' }}>Điện thoại</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress(2)}>
                    <Text style={{ fontWeight: activeTab === 2 ? 'bold' : 'normal', color: activeTab === 2 ? '#00B761' : 'black' }}>Máy Tính</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress(3)}>
                    <Text style={{ fontWeight: activeTab === 3 ? 'bold' : 'normal', color: activeTab === 3 ? '#00B761' : 'black' }}>Phụ Kiện</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress(4)}>
                    <Text style={{ fontWeight: activeTab === 4 ? 'bold' : 'normal', color: activeTab === 4 ? '#00B761' : 'black' }}>Yêu thích</Text>
                </TouchableOpacity>
            </View>


            {activeTab === 0 && (
                <View>
                    <View style={{ height: 555, alignItems: 'center', backgroundColor: '#fff' }}>

                        <FlatList
                            key={columns}
                            data={data}
                            keyExtractor={(item) => item.id.toString()}
                            numColumns={2}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity

                                        onPress={() => {
                                            navigation.navigate('Detail', { item, setData, data })
                                        }}>

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
                                            onPress={() => addToCart(item)}
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
                </View>
            )}

            {activeTab === 1 && (
                <View style={{ height: 555, alignItems: 'center', backgroundColor: '#fff' }}>

                    <FlatList
                        key={columns}
                        data={filteredData}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Detail', { item, setData, data })
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

                                            }} Khach
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
                                    {/* <TouchableOpacity
                                        onPress={() => {
                                            alert("click me")
                                        }}
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
                                    </TouchableOpacity> */}
                                    <TouchableOpacity
                                    onPress={()=>{
                                        alert("click me")
                                    }}
                                    >
                                        <Text>Them</Text>
                                    </TouchableOpacity>

                                </TouchableOpacity>
                            )
                        }}
                        extraData={columns}
                    />
                </View>
            )}

            {activeTab === 2 && (
                <View style={{ height: 555, alignItems: 'center', backgroundColor: '#fff' }}>

                    <FlatList
                        key={columns}
                        data={filteredData}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Detail', { item, setData, data })
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
            )}

            {activeTab === 3 && (
                <View style={{ height: 555, alignItems: 'center', backgroundColor: '#fff' }}>

                    <FlatList
                        key={columns}
                        data={filteredData}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Detail', { item, setData, data })
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
            )}

            {activeTab === 4 && (
                <View style={{ height: 555, alignItems: 'center', backgroundColor: '#fff' }}>

                    <FlatList
                        key={columns}
                        data={filteredData}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Detail', { item, setData, data })
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
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    favoriteIcon: {
        width: 20,
        height: 20,
    },
});
