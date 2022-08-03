import { Box, Center, ScrollView, View, Image, HStack, VStack } from 'native-base';
import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import CustomAvtar from '../../CustomAvtar/CustomAvtar';
import CustomText from '../../shared/CustomText/CustomText';
const { width, height } = Dimensions.get('screen');


const CommonHeader = (blogDetails: any) => {
    console.log("+++++", blogDetails);
    return (
        <View style={styles.topContent}>
            <CustomAvtar size={width * 0.15} avtarImage={require('../../../../assets/explore/dog3.png')} />
            <View style={styles.authorDetails}>
                <CustomText text='Dr Jenny Willson' style={{ fontSize: 16, fontWeight: 'bold' }} />
                <HStack style={styles.timingDetails}>
                    <CustomText text='Timing:' style={{ color: '#898D8F', fontWeight: 'normal' }} />
                    <CustomText text='9:00 am - 12:00 pm' style={{ color: "#F15F24", fontWeight: 'normal', marginLeft: 5 }} />
                </HStack>
            </View>
            <Image source={require('../../../../assets/explore/verified.png')} style={styles.verifiedImage} />
        </View>

    );
}
export default CommonHeader;

const styles = StyleSheet.create({
    topContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.85,
        height: height * 0.08,
        alignItems: 'center',
    },

    authorDetails: {
        display: 'flex',
        flexDirection: 'column',
    },

    timingDetails: {
        marginTop: 10,
        alignItems: 'center'
    },

    verifiedImage: {
        height: 40,
        width: 40
    },
});