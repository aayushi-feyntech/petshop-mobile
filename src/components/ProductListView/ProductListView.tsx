import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { MaterialIcons } from '@expo/vector-icons';
import CustomButton from '../CustomButton/CustomButton';
const { width, height } = Dimensions.get('screen');
import { AntDesign } from '@expo/vector-icons';
import { Badge, Box, Card, Divider } from 'native-base';
import CustomActionSheet from '../CustomActionSheet/CustomActionSheet';

export interface ProductListViewProps {
    width?: number;
    height?: number;
    icon?: string;
    mode?: 'elevated' | 'outlined' | 'contained';
    color?: string;
    disabled?: boolean;
    onPress?: () => void;
    elevation?: number;
}

const ProductListView = (props: ProductListViewProps) => {
    const onFavorite = () => {
    };

    const [showOption, setShowOption] = useState(false);
    console.log("showOption", showOption);
    return (
        <Box style={styles.card} >
            <Badge style={styles.badge} size={30}>10% off</Badge>
            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.card_image} /> */}
            <Divider />
            <View style={styles.card_body}>
                <View style={styles.card_content}>
                    <CustomText text="Whiskas Chicken & Vegetables Adult Dry..." />
                </View>

                <View style={styles.card_content}>
                    <CustomText text="Wt. 250g" />
                    <TouchableOpacity
                        onPress={() => {
                            setShowOption(true);
                        }}
                    >
                        <AntDesign name="right" size={15} color="black" />
                    </TouchableOpacity>

                </View>
                <CustomActionSheet isOpen={showOption} onClose={() => setShowOption(false)} />
                <View style={styles.card_content}>
                    <CustomText text="₹ 2000" />
                    <CustomText text="₹ 2500" style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} />
                    <TouchableOpacity
                        onPress={() => onFavorite()}
                    >
                        <MaterialIcons
                            name={'favorite-outline'} //favorite
                            size={32}
                            color={'red'}
                        />
                    </TouchableOpacity>
                </View>
                <CustomButton text="Add to cart" width={width * 0.37} height={40} handlePress={() => { }} />
            </View>
        </Box>
    )
};

export default ProductListView;

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        width: width * 0.42,
        height: 372
    },
    card_image: {
        width: width * 0.22,
        height: 140,
        justifyContent: 'center',
        marginRight: 42,
        marginLeft: 42,
        marginTop: 36,
        marginBottom: 36
    },
    card_body: {
        padding: 10,
    },
    card_content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    badge: {
        backgroundColor: '#FFE01B',
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: 10
    },
});