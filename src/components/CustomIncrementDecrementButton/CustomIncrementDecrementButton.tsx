import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, View } from 'native-base';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import CustomText from '../CustomText/CustomText';

const CustomIncrementDecrementButton = () => {
    const AddItemHandler = async () => {

    };
    const checkDesQuantity = async () => { }
    return <View style={styles.box}>
        <TouchableOpacity onPress={checkDesQuantity} style={styles.boxMin}>
            <MaterialCommunityIcons name='minus' size={16} />
        </TouchableOpacity>
        <View>
            <CustomText text={"2"} style={styles.boxText} />
        </View>
        <TouchableOpacity onPress={AddItemHandler} style={styles.boxMin}>
            <MaterialCommunityIcons name='plus' size={16} />
        </TouchableOpacity>
    </View>
}

export default CustomIncrementDecrementButton;


const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 30,
        width: 90,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
    },
    boxMin: {
        width: "30%",
        alignItems: "center",
    },
    boxText: {
        fontSize: 12,
    },
});
