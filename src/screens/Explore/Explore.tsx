import * as React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { Box, Center, Text } from 'native-base';
import CustomText from '../../components/CustomText/CustomText';
import { flexbox } from 'native-base/lib/typescript/theme/styled-system';
import CustomButton from '../../components/CustomButton/CustomButton';
import NewProductsView from '../../components/NewProductsView/NewProductsView';
import { useNavigation } from '@react-navigation/native';
import BlogScrollView from '../../components/BlogScrollView/BlogScrollView';


const ExploreScreen = () => {
    const navigation = useNavigation();

    return (
        <ScrollView horizontal={false}>
            <View style={styles.container}>
                <Box style={styles.newProductCard}>
                    <View style={styles.similarProducts}>
                        <CustomText text="Blogs" style={{ fontSize: 20 }} />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ProductScreen')}
                        >
                            <Text underline>View more</Text>
                        </TouchableOpacity>
                        {/* <CustomText text="View more" style={{ textDecoration: "underline", fontWeight: 'normal', }} /> */}
                    </View>
                    <BlogScrollView />
                </Box>
                <Box style={styles.exploreContainer}>
                    <View style={styles.expertCard}>
                        <View style={styles.expertTextContainer}>
                            <CustomText text="What experts say?" style={{ fontSize: 20 }} />
                            <CustomText text="Lorem ipsum dolor sit amet. Et velit." style={{ fontWeight: 'normal' }} />
                        </View>
                        <Image source={require('../../../assets/graphics.png')} />
                    </View>

                    <Image source={require('../../../assets/exploreGrp.png')} />
                </Box>
            </View >
        </ScrollView>
    );
}
export default ExploreScreen;


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'pink',
    },
    exploreContainer: {
        backgroundColor: 'white',
    },
    newProductCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: 340,
        backgroundColor: 'white',
        resizeMode: 'contain',
        padding: 10
    },
    similarProducts: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    expertCard: {
        backgroundColor: "#FBEECA",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
        borderRadius: 16,
        padding: 25
    },
    expertTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: width * 0.42,
        margin: 'auto',
        // alignItems: 'center'
        // textAlign: 'center'
        // alignItems: 'center',
        // margin: 'auto'
    }
});