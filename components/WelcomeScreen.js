import { View, Text } from 'react-native';

export default function Footer() {
  return (
    <View
    style={{
        flex:1 ,
    }}>
    <Text
      style={{
        padding:40,
        fontSize: 35,
        color: 'black',
        textAlign: 'center',
      }}>
      Welcome to the little lemon
    </Text>
    <Text
      style={{
        padding:20,
        marginVertical:8,
        fontSize: 35,
        color: 'black',
        textAlign: 'center',
      }}>
      Little Lemon is a charming neighborhood bistro that serves simple food 
      and classic cocktails in a lively but casual environment. We would love to hear more about
        your experience with us!
    </Text>
  </View>
  );
}
