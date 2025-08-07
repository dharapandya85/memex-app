// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';
//app/(tabs)/index.tsx
// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
import {View,Text,Button} from 'react-native';
export default function HomeScreen() {
  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:24,fontWeight:'bold'}}>Welcome to MemeX</Text>
      <Text>Trade Solana meme tokens and climb the leaderboard!</Text>
      <Button title="Start Trading" onPress={()=>{}}/>
      </View>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
