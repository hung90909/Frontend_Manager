import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';


export default function StatusScreen() {
    const [activeTab, setActiveTab] = useState(0);





    const handleTabPress = (index) => {
        setActiveTab(index);
    };

    return (
        <View>
            <View style={{ height: 70, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => handleTabPress(0)}>
                    <Text style={{ fontWeight: activeTab === 0 ? 'bold' : 'normal', color: activeTab === 0 ? '#00B761' : 'black' }}>Chờ Xử Lý</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress(1)}>
                    <Text style={{ fontWeight: activeTab === 1 ? 'bold' : 'normal', color: activeTab === 1 ? '#00B761' : 'black' }}>Đang Giao</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress(2)}>
                    <Text style={{ fontWeight: activeTab === 2 ? 'bold' : 'normal', color: activeTab === 2 ? '#00B761' : 'black' }}>Đã Giao</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTabPress(3)}>
                    <Text style={{ fontWeight: activeTab === 3 ? 'bold' : 'normal', color: activeTab === 3 ? '#00B761' : 'black' }}>Đã Hủy</Text>
                </TouchableOpacity>

            </View>
            {activeTab === 0 && (
                <View>

                </View>
            )}
            {activeTab === 1 && (
                <View>

                </View>
            )}
            {activeTab === 2 && (
                <View>

                </View>
            )}
            {activeTab === 3 && (
                <View>

                </View>
            )}

        </View>

    );
};

