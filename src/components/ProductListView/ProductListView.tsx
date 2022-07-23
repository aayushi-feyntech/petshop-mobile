import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { MaterialIcons } from '@expo/vector-icons';
import CustomButton from '../CustomButton/CustomButton';
const { width, height } = Dimensions.get('screen');
import { AntDesign } from '@expo/vector-icons';
import { Badge, Box, Card, Divider, Image } from 'native-base';
import CustomActionSheet from '../CustomActionSheet/CustomActionSheet';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation();

    const onFavorite = () => {
    };

    const [showOption, setShowOption] = useState(false);
    console.log("showOption", showOption);
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetailScreen')}
        >
            <Box style={[styles.card, styles.shadowProp]} shadow={10}>
                <View>
                    <Badge style={styles.badge} size={30}>10% off</Badge>
                    <Image source={{
                        uri: 'https://picsum.photos/700'
                    }} alt="image" style={styles.card_image} />
                    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.card_image} /> */}
                    <Divider />
                    <View style={styles.card_body}>
                        <View style={styles.card_content}>
                            <CustomText text="Whiskas Chicken & Vegetables Adult Dry..." style={{ fontWeight: 'normal' }} />
                        </View>

                        <View style={styles.card_content}>
                            <CustomText text="Wt. 250g" style={{ fontWeight: 'normal' }} />
                            <TouchableOpacity
                                onPress={() => {
                                    setShowOption(true);
                                }}
                            >
                                <AntDesign name="right" size={15} color="black" />
                            </TouchableOpacity>

                        </View>
                        <CustomActionSheet
                            isOpen={showOption}
                            onClose={() => setShowOption(false)}
                            type="weight"
                        // heading={"Sort By"}
                        />
                        <View style={styles.card_content}>
                            <CustomText text="₹ 2000" />
                            <CustomText text="₹ 2500" style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontWeight: 'normal' }} />
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
                </View>
            </Box>
        </TouchableOpacity>
    )
};

export default ProductListView;

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        width: width * 0.433,
        height: 372,
        backgroundColor: "#d6d1d1f",
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    card_image: {
        width: width * 0.22,
        height: 125,
        justifyContent: 'center',
        marginRight: 42,
        marginLeft: 42,
        marginTop: 36,
        marginBottom: 26
    },
    card_body: {
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        height: 185,
        justifyContent: 'space-between',
        resizeMode: 'contain'
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