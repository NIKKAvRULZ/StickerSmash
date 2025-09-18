import { Image } from "expo-image";
import { StyleSheet } from "react-native";

type Props ={
    imgSourse: string;
};

export default function ImageViewer({imgSourse}: Props) {
    return (
        <Image source={imgSourse} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});