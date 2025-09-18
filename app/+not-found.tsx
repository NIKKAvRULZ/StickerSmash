import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function NotFound() {
  return (
    <>
        <Stack.Screen options={{ title: 'Oops! Not Found' }} />
        <View style={styles.container}>
            <Link href="/" style={styles.button}>
            Go back home
            </Link>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color:'#fff',
    },
});
