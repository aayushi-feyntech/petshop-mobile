import { Box, Center, ScrollView, View, Image, HStack, VStack } from 'native-base';
import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import CustomAvtar from '../../components/CustomAvtar/CustomAvtar';
import BlogsOptionArray from '../../components/explore/ServicesAroundScrollView/BlogsOptionArray';
import CustomTextInput from '../../components/shared/CustomInput/CustomInput';
import CustomText from '../../components/shared/CustomText/CustomText';
const { width, height } = Dimensions.get('screen');


const ExpertSayScreen = () => {

    const blogData = [
        {
            imgSrc: require('../../../assets/explore/dog3.png'),
            authorSrc: require('../../../assets/explore/dog3.png'),
            publishedDay: '12 hour ago',
            heading: 'Motivate your dog',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate  motivate your dog...',
            readTime: '1 min read'
        },
        {
            imgSrc: require('../../../assets/explore/dog3.png'),
            authorSrc: require('../../../assets/explore/dog3.png'),
            publishedDay: '12 hour ago',
            heading: 'Motivate your dog',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate  motivate your dog...',
            readTime: '1 min read'
        },
        {
            imgSrc: require('../../../assets/explore/dog3.png'),
            authorSrc: require('../../../assets/explore/dog3.png'),
            publishedDay: '12 hour ago',
            heading: 'Motivate your dog',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate  motivate your dog...',
            readTime: '1 min read'
        },
        {
            imgSrc: require('../../../assets/explore/dog3.png'),
            authorSrc: require('../../../assets/explore/dog3.png'),
            publishedDay: '12 hour ago',
            heading: 'Motivate your dog',
            subHeading: 'Jenny Willson',
            description: 'Activities that can motivate  motivate your dog...',
            readTime: '1 min read'
        },
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
                                <Image source={blog.imgSrc} style={styles.blogCardImage} />

                                <View style={styles.blogCardContent}>
                                    <View style={styles.topContent}>
                                        <View style={styles.author}>
                                            <CustomAvtar size={width * 0.05} avtarImage={blog.authorSrc} />
                                            <CustomText text={blog.subHeading} style={{ color: "#F15F24", fontWeight: 'normal' }} />
                                        </View>

                                        <CustomText text={blog.publishedDay} style={styles.publishedDay} />
                                    </View>
                                    <VStack>
                                        <CustomText text={blog.heading} style={{ fontSize: 16, fontWeight: 'bold' }} />
                                        <View style={styles.para}>
                                            <CustomText text={blog.description} style={styles.paraText} />
                                        </View>
                                    </VStack>

                                </View>
                                <CustomText text={blog.readTime} style={styles.readTime} />

                            </HStack>
                        })
                    }
                </View>
            </ScrollView>
        </View>

    );
}
export default ExpertSayScreen;

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
    topContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.6,
        marginBottom: height * 0.015
    },
    blogCard: {
        margin: width * 0.03,
        height: 140,
        backgroundColor: 'white',
        borderRadius: 17,
        padding: height * 0.02,
        position: 'relative'
    },
    blogCardImage: {
        borderRadius: 10,
    },
    blogCardContent: {
        paddingLeft: 10,
        width: width * 0.45,
    },
    para: {
        height: height * 0.06,
        position: 'relative',
        // backgroundColor: 'pink'
    },
    paraText: {
        fontSize: 12,
        color: "#898D8F",
        fontWeight: 'normal',
        position: 'absolute',
        bottom: 0,
    },
    publishedDay: {
        fontWeight: 'normal',
        color: '#898D8F'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    readTime: {
        position: 'absolute',
        right: width * 0.04,
        bottom: height * 0.015,
        color: '#00C14E',
        fontWeight: 'normal'
    },
    author: {
        display: 'flex',
        flexDirection: 'row'
    }
});