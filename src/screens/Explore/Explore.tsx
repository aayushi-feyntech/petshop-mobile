import * as React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { Box, Center, Stack, Text, Image } from 'native-base';
import CustomText from '../../components/shared/CustomText/CustomText';
import { flexbox } from 'native-base/lib/typescript/theme/styled-system';
import CustomButton from '../../components/shared/CustomButton/CustomButton';
import NewProductsView from '../../components/NewProductsView/NewProductsView';
import { useNavigation } from '@react-navigation/native';
import BlogScrollView from '../../components/BlogScrollView/BlogScrollView';
import ServicesAroundScrollView from '../../components/explore/ServicesAroundScrollView/ServicesAroundScrollView';


const ExploreScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <ScrollView horizontal={false}>
                <Box style={styles.newProductCard}>
                    <View style={styles.similarProducts}>
                        <CustomText text="Blogs" style={{ fontSize: 20 }} />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('VetsScreen')}
                        >
                            <Text underline>View more</Text>
                        </TouchableOpacity>
                        {/* <CustomText text="View more" style={{ textDecoration: "underline", fontWeight: 'normal', }} /> */}
                    </View>
                    <BlogScrollView />
                </Box>
                <View style={styles.container}>

                    <Box style={styles.exploreContainer}>
                        <View style={styles.expertCard}>
                            <View style={styles.expertTextContainer}>
                                <CustomText text="What experts say?" style={{ fontSize: 20 }} />
                                <CustomText text="Lorem ipsum dolor sit amet. Et velit." style={{ fontWeight: 'normal' }} />
                            </View>
                            <Image source={require('../../../assets/graphics.png')} />
                        </View>
                    </Box>

                    <Box style={styles.newProductCard}>
                        <CustomText text="Best Verified services around you" style={{ fontSize: 16 }} />
                        <ServicesAroundScrollView />
                    </Box>

                    <Center>
                        <View style={[styles.card, styles.shadowProp]}>
                            <View style={styles.imgBox}>
                                <Image source={require('../../../assets/explore/greenBack.png')} style={styles.img1} />

                                <Image source={require('../../../assets/explore/communityGraphics.png')} style={styles.img2} />

                                <Image source={require('../../../assets/explore/line.png')} style={styles.img3} />
                                <Image source={require('../../../assets/explore/line.png')} style={styles.img4} />
                            </View>

                            <Center style={styles.textBox}>
                                <CustomText text="Meet, find help, share ideas & discuss pets with 8k+ pet parents from all over India. " style={{ fontSize: 14, color: '#898D8F', textAlign: 'center' }} />
                                <CustomButton text="Join Community" variant="solid" width={width * 0.47} height={54} handlePress={() => { }} />
                            </Center>
                        </View>
                    </Center>
                </View>
            </ScrollView>
        </View>

    );
}
export default ExploreScreen;


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
    },
    exploreContainer: {
        backgroundColor: 'white',
    },
    joinCommunity: {
        borderRadius: 16,
    },
    newProductCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 340,
        backgroundColor: 'white',
        resizeMode: 'contain',
        padding: 15,
        marginBottom: 10
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
    },
    card: {
        borderRadius: 16,
        width: width * 0.93,
        backgroundColor: 'white',
        marginTop: 20,

    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    imgBox: {
        position: 'relative',
        height: 200

    },
    img1: {
        position: 'absolute',
        left: 10,
        top: 15,
    },
    img2: {
        position: 'absolute',
        left: width * 0.2,
        top: height * 0.05,
        zIndex: 5
    },
    img3: {
        position: 'absolute',
        left: width * 0.03,
        top: height * 0.12,
        zIndex: 3
    },
    img4: {
        position: 'absolute',
        right: width * 0.03,
        top: height * 0.12,
        zIndex: 3
    },
    textBox: {
        padding: width * 0.05,
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
});