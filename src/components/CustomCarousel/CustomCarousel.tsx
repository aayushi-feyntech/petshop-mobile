import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
    {
        "key": "3571572",
        "title": "Multi-lateral intermediate moratorium",
        "description": "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
        "image": "https://picsum.photos/id/20/200/300"
    },
    {
        "key": "3571747",
        "title": "Automated radical data-warehouse",
        "description": "Use the optical SAS system, then you can navigate the auxiliary alarm!",
        "image": "https://picsum.photos/id/24/200/300"
    },
    {
        "key": "3571680",
        "title": "Inverse attitude-oriented system engine",
        "description": "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
        "image": "https://picsum.photos/id/22/200/300"
    },
    {
        "key": "3571603",
        "title": "Monitored global data-warehouse",
        "description": "We need to program the open-source IB interface!",
        "image": "https://picsum.photos/id/13/200/300"
    }
]

export default function CustomCarousel(props: any) {
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const Indicator = ({ scrollX }) => {
        return <View style={{ flexDirection: 'row', position: 'absolute', bottom: 5 , width, justifyContent: 'center' }}>
            {DATA.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp'
                })
                return <Animated.View
                    key={`indicator-${i}`}
                    style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: '#333',
                        margin: 10,
                        transform: [{
                            scale
                        }]
                    }} />
            })
            }
        </View>
    }
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', height: "100%" }}>
                <Animated.FlatList
                    data={DATA}
                    horizontal
                    keyExtractor={item => item.key}
                    scrollEventThrottle={32}
                    pagingEnabled
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    // contentContainerStyle={{ paddingBottom: 100 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <View style={{ width: width, alignItems: 'center', }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Image source={{ uri: item.image }} style={{ width: props.width, height: props.height || "100%" }} />
                            </View>
                        </View>
                    }}
                />
                <Indicator scrollX={scrollX} />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: "100%"
    },
});