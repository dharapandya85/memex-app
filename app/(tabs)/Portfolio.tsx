import {View,Text,FlatList} from 'react-native';
const mockPortfolio=[
    {token:'WEN',amount:1200},
    {token:'BONK',amount:9500},
];
export default function Portfolio(){
    return(
        <View style={{padding:20}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Your Portfolio</Text>
            <FlatList
            data={mockPortfolio}
            keyExtractor={(item)=>item.token}
            renderItem={({item})=>(
                    <Text style={{fontSize:18}}>{item.token}:{item.amount}</Text>
                )}
            />
            {/* <Text>No assets yet. Start trading to build your meme empire!</Text> */}
        </View>
    );
}