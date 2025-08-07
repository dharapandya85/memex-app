//import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';
import {Tabs} from 'expo-router';
export default function Layout() {
  // const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // if (!loaded) {
  //   // Async font loading only occurs in development.
  //   return null;
  // }

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title:'Home'}}/>
      <Tabs.Screen name="dashboard" options={{title:'Dashboard'}}/>
      <Tabs.Screen name="leaderboard" options={{title:'Leaderboard'}}/>
      <Tabs.Screen name="portfolio" options={{title:'Portfolio'}}/>
      <Tabs.Screen name="trade" options={{title:'Trade'}}/>

    </Tabs>
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   <Stack>
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     <Stack.Screen name="+not-found" />
    //   </Stack>
    //   <StatusBar style="auto" />
    // </ThemeProvider>
  );
}
