import React from 'react';
import { Avatar } from 'react-native-paper';

export interface CustomAvtarProps {
    size?: number;
    avtarImage?: string;
    onPress?: () => void;
}


const CustomAvtar = (props: CustomAvtarProps) => {
    return <Avatar.Image size={props.size} source={require('../../../assets/pincode.png')} style={{ marginRight: 6 }} />
}

export default CustomAvtar;