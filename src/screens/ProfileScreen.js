
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
export default function ProfileScreen() {
    const [data, setData] = useState({})
    const [image , setImage] = useState('')
    const navigation = useNavigation();
    const route = useRoute();

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#DCDCDC" }}>
            <View style={{
                backgroundColor: "red", width: "100%", height: 150,
                justifyContent: "flex-start", flexDirection: "row", alignItems: "center",

            }}>
                {data.image ? <Image style={{
                    width: 70, height: 70, marginLeft: 15,  borderWidth: 1, borderWidth: 1,
                    borderColor: "gray", borderRadius: 45
                }} source={{uri:'https://kynguyenlamdep.com/wp-content/uploads/2022/08/gai-xinh-che-mat-chup-anh-voi-bien-600x800.jpg'}}/> :
                    <Image style={{
                        width: 70, height: 70, marginLeft: 15,  borderWidth: 1,
                        borderColor: "gray", borderRadius: 45
                    }}  source={{uri:'https://kynguyenlamdep.com/wp-content/uploads/2022/08/gai-xinh-che-mat-chup-anh-voi-bien-600x800.jpg'}}  />}

                <Text style={{ fontSize: 20, color: "white", marginLeft: 10 }}>Nguyễn Thị Che Mặt</Text>
                <TouchableOpacity 
                onPress={()=>{
                    pickImage()
                }}
                style={{
                   position: "absolute", left: 50, top: 45
                }}>
                    <Image style={{
                        width: 20, height: 20, tintColor: "gray",
                    }} />
                </TouchableOpacity>

            </View>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginStart: 20, marginTop: 20 }}>Thông tin người dùng</Text>
            <View style={{
                minWidth: 100, margin: 10, backgroundColor: "white", borderRadius: 10,
                paddingBottom: 10
            }}>
                <TouchableOpacity style={{
flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                    marginTop: 15, paddingHorizontal: 10
                }}>
                    <View style={{
                        flexDirection: "row", alignItems: "center"
                    }}>
                        <Image style={{
                            width: 20, height: 20, tintColor: "gray"
                        }}  />
                        <Text style={{
                            fontSize: 17, marginLeft: 10
                        }}>Số điện thoại</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginRight: 10, color: "gray" }}>{data.phone}</Text>
                        <Image style={{
                            width: 20, height: 20, tintColor: "gray",
                        }}  />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                    marginTop: 20, paddingHorizontal: 10,
                }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{
                            width: 20, height: 20, tintColor: 'gray'
                        }} />
                        <Text style={{
                            fontSize: 17, marginStart: 10
                        }}>Email</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginRight: 10, color: "gray" }}>{data.email}</Text>
                        <Image style={{
                            width: 20, height: 20, tintColor: "gray",
                        }}  />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                    marginTop: 20, paddingHorizontal: 10,
                }}>
                    <View style={{
                        flexDirection: "row", alignItems: "center"
                    }}>
                        <Image style={{
                            width: 20, height: 20, tintColor: "gray"
                        }}  />
                        <Text style={{
                            fontSize: 17, marginStart: 10
                        }}>Họ tên</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginRight: 10, color: "gray" }}>{data.name}</Text>
                        <Image style={{
                            width: 20, height: 20, tintColor: "gray",
                        }}  />
</View>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginStart: 20, marginTop: 10 }}>Bảo mật</Text>
            <View style={{
                minWidth: 100, margin: 10, backgroundColor: "white", borderRadius: 10,
            }}>
                <TouchableOpacity style={{
                    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                    marginVertical: 15, paddingHorizontal: 10,
                }}>
                    <View style={{
                        flexDirection: "row", alignItems: "center"
                    }}>
                        <Image style={{
                            width: 20, height: 20, tintColor: "gray"
                        }}  />
                        <Text style={{
                            fontSize: 17, marginStart: 10
                        }}>Đổi mật khẩu</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Image style={{
                            width: 20, height: 20, tintColor: "gray",
                        }} />
                    </View>
                </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 15, fontWeight: "bold", marginStart: 20, marginTop: 10 }}>Đăng nhập</Text>
            <View style={{
                minWidth: 100, margin: 10, backgroundColor: "white", borderRadius: 10,
            }}>
                <TouchableOpacity 
                  
                onPress={() =>{
                navigation.navigate('Login');
                }}

                style={{
                    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                    marginVertical: 15, paddingHorizontal: 10,
                }}>
                    <View style={{
                        flexDirection: "row", alignItems: "center",
                    }}>
                        <Image style={{
                            width: 20, height: 20, tintColor: "gray"
                        }} />
                        <Text style={{
                            fontSize: 17, marginStart: 10
                        }}>Đăng xuất</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <Image style={{
                            width: 20, height: 20, tintColor: "gray",
                        }}  />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}