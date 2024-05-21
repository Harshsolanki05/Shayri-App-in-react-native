import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground, Pressable } from "react-native";

export const OpenShayri = ({ route }) => {
    const { shayri, item } = route.params;

    const quots = [
        "The people, and the people alone, are the motive force in the making of world history.",
        "It's time to end the cruel slaughter of whales and leave these magnificent creatures alone.",
        "The soul that sees beauty may sometimes walk alone.",
        "I restore myself when I'm alone.",
        "They are all gone into the world of light, and I alone sit lingering here."    
    ];

    const bgarr = [
        require('./img/img1.jpg'), require('./img/img2.jpg'), require('./img/img3.jpg'), require('./img/img4.jpg'), require('./img/img5.jpg'),
        require('./img/img6.jpg'), require('./img/img7.jpg'), require('./img/img8.jpg'), require('./img/img9.jpg'), require('./img/img10.jpg'),
        require('./img/img11.jpg'), require('./img/img12.jpg'), require('./img/img13.jpg'), require('./img/img14.jpg'), require('./img/img15.jpg'),
        require('./img/img16.jpg'), require('./img/img17.jpg'), require('./img/img18.jpg'), require('./img/img19.jpg'), require('./img/img20.jpg'),
        require('./img/img21.jpg'), require('./img/img22.jpg'), require('./img/img23.jpg'), require('./img/img24.jpg'), require('./img/img25.jpg'),
        require('./img/img26.jpg'), require('./img/img27.jpg'), require('./img/img28.jpg'), require('./img/img29.jpg'), require('./img/img30.jpg'),
        require('./img/img31.jpg')
    ];

    const fontcolor = ["white","red","green"];

    const [now, setNow] = useState(0);
    const [plush, setPlush] = useState(0);
    const [plush2, setPlush2] = useState(0);

    const prev = () => {
        const prevIndex = (now === 0) ? quots.length - 1 : now - 1;
        setNow(prevIndex);
    };

    const next = () => {
        const nextIndex = (now === quots.length - 1) ? 0 : now + 1;
        setNow(nextIndex);
    };

    const step1 = () => {
        const nextBgIndex = (plush === bgarr.length - 1) ? 0 : plush + 1;
        setPlush(nextBgIndex);
    };

    const step2 = () => {
        const nextColorIndex = (plush2 === fontcolor.length - 1) ? 0 : plush2 + 1;
        setPlush2(nextColorIndex);
    };

    return (
        <View style={styles.main}>
            <View style={[styles.peta, { backgroundColor: "white" }]}>
                <Pressable style={styles.bgperent} onPress={step2}>
                    <ImageBackground style={styles.bg} source={bgarr[plush]} resizeMode="stretch">
                        <Text style={[styles.txt, { color: fontcolor[plush2] }]}>{quots[now]}</Text>
                    </ImageBackground>
                </Pressable>
                <View style={styles.footer}>
                    <Pressable
                        style={[styles.button, { opacity: now === 0 ? 0.5 : 1 }]} // Disable if at first shayri
                        onPress={prev}
                        disabled={now === 0} // Disable onPress if at first shayri
                    >
                        <Text style={styles.buttonText}>👈 Previous</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, { opacity: now === quots.length - 1 ? 0.5 : 1 }]} // Disable if at last shayri
                        onPress={next}
                        disabled={now === quots.length - 1} // Disable onPress if at last shayri
                    >
                        <Text style={styles.buttonText}>Next 👉</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "skyblue",
        justifyContent: "center",
        alignItems: "center"
    },
    peta: {
        width: "90%",
        height: "50%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    bgperent: {
        height: "80%",
        width: "100%"
    },
    bg: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold"
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    button: {
        backgroundColor: "red",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 10
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    }
});

export default OpenShayri;

