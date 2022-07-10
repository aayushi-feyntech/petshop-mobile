import React from 'react';
import { Avatar } from 'react-native-paper';

export interface CustomAvtarProps {
    size?: number;
    avtarImage: any;
    onPress?: () => void;
}


const CustomAvtar = (props: CustomAvtarProps) => {
    return <Avatar.Image size={props.size} source={props.avtarImage} style={{ marginRight: 6 }} /> 
}

export default CustomAvtar;