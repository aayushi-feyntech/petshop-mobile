import { Box, Center, ScrollView, View, Image, HStack, VStack } from 'native-base';
import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import BlogsOptionArray from '../../components/explore/ServicesAroundScrollView/BlogsOptionArray';
import CustomTextInput from '../../components/shared/CustomInput/CustomInput';
import CustomText from '../../components/shared/CustomText/CustomText';
const { width, height } = Dimensions.get('screen');


const VetsScreen = () => {

    const blogData = [
        {
            imgSrc: require('../../../assets/explore/dog1.png'),
            publishedDay: 'Today',
            heading: 'Motivate your dog',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate your dog.Activities that can motivate your dog.ext'
        },
        {
            imgSrc: require('../../../assets/explore/dog2.png'),
            publishedDay: 'Today',
            heading: 'Motivate your dog',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate your dog.Activities that can motivate your dog.ext'
        },
        {
            imgSrc: require('../../../assets/explore/dog1.png'),
            publishedDay: 'Today',
            heading: 'Motivate your dog',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate your dog.Activities that can motivate your dog.ext'
        }
    ]

    return (
        <View style={styles.container}>

            <ScrollView horizontal={false}>
                <View style={styles.topContainer}>
                    <BlogsOptionArray />
                    <Center>
                        <CustomTextInput placeholder='What’s on your mind?' height={56} width={width * 0.9} borderRadius={28} />
                    </Center>
                </View>

                <View style={styles.blogContainer}>
                    {
                        blogData.map((blog) => {
                            return <HStack style={[styles.blogCard, styles.shadowProp]}>
                                <CustomText text={blog.publishedDay} style={styles.publishedDay} />

                                <Image source={blog.imgSrc} style={styles.blogCardImage} />
                                <View style={styles.blogCardContent}>
                                    <VStack>
                                        <CustomText text={blog.heading} style={{ fontSize: 16, fontWeight: 'bold' }} />
                                        <CustomText text={blog.subHeading} style={{ color: "#F15F24", fontWeight: 'normal' }} />
                                        <View style={styles.para}>
                                            <CustomText text={blog.description} style={styles.paraText} />
                                        </View>
                                    </VStack>
                                </View>
                            </HStack>
                        })
                    }
                </View>

            </ScrollView>

        </View>

    );
}
export default VetsScreen;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white'
    },
    topContainer: {
        height: 160,
        backgroundColor: 'white'
    },
    blogContainer: {
        marginTop: 10,
        backgroundColor: 'white'
    },
    blogCard: {
        margin: width * 0.03,
        height: 220,
        backgroundColor: 'white',
        borderRadius: 17,
        padding: height * 0.02,
        position: 'relative'
    },
    blogCardImage: {
        borderRadius: 10
    },
    blogCardContent: {
        padding: 10,
        width: width * 0.45,
        marginTop: height * 0.05
    },
    para: {
        height: height * 0.1,
        position: 'relative'
    },
    paraText: {
        fontSize: 12,
        color: "#898D8F",
        fontWeight: 'normal',
        position: 'absolute',
        bottom: 0
    },
    publishedDay: {
        position: 'absolute',
        right: height * 0.02,
        top: height * 0.02,
        color: '#00C14E',
        fontWeight: 'normal'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },

});