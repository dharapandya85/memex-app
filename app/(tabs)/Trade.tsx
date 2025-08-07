import {View,Text,TextInput,Button,Alert} from "react-native";
import {useState} from 'react';
export default function Trade(){
    const [token,setToken]=useState('');
    const [amount,setAmount]=useState('');
    const [walletConnected,setWalletConnected]=useState(false);
    const connectWallet=()=>{
        setWalletConnected(true);
        Alert.alert('Wallet Connected','Mock wallet connected successfully!');
    };
    const handleTrade=()=>{
        if(!walletConnected){
            Alert.alert('Wallet Required','Enter token and amount.');
            return;
        }
        //console.log(`Trading $(amount) of ${token}`);
        //Future: Connect to Solana, perform transaction
        //Mock trade logic
        Alert.alert('Trade Successful',`Swapped ${amount} ${token} in mock mode.`);
        setToken(' ');
        setAmount(' ');
    };
    return(
        <View style={{padding:20}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Trade Memecoins</Text>
        <Button title={walletConnected?"Wallet Connected":"Connect Wallet"} onPress={connectWallet}/>
        <Text style={{marginTop:20}}>Token Symbol</Text>
        <TextInput 
        placeholder="e.g.,WEN" 
        value={token} 
        onChageText={setToken}
        style={{borderWidth:1,padding:10,marginBottom:10}}
        />
        <TextInput 
        placeholder="Amount" 
        value={amount} 
        onChangeText={setAmount} 
        keyboardType="numeric"
        style={{borderWidth:1,padding:10,marginBottom:10}}
        />
        <Button title="Trade" onPress={handleTrade}/>
        </View>
    );
}