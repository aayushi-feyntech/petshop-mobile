import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Divider, Badge } from 'react-native-paper';
import CustomText from '../CustomText/CustomText';
import { MaterialIcons } from '@expo/vector-icons';
import CustomButton from '../CustomButton/CustomButton';

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

    return (
        <Card mode="outlined" style={styles.card}>
            <Badge style={styles.badge} size={30}>10% off</Badge>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.card_image} />
            <Divider />
            <View style={styles.card_body}>
                <View style={styles.card_content}>
                    <CustomText text="Whiskas Chicken & Vegetables Adult Dry..." />
                </View>

                <View style={styles.card_content}>
                    <CustomText text="Wt. 250g" />
                </View>

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
                <CustomButton text="Add to cart" width={170} height={48} />
            </View>

        </Card>

    )
};

export default ProductListView;

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        width: 190,
        height: 372
    },
    card_image: {
        width: 106,
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
    }
});