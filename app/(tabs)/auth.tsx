import {View,Text,Button} from 'react-native';
import {useState} from 'react';
export default function Auth(){
    const [walletConnected,setWalletConnected]=useState(false);
    const connectWallet=()=>{
        //Mock function
        setWalletConnected(true);
        alert('Wallet connected!')
    };
    return(
        <View style={{padding:20}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}> Wallet Connected</Text>
            <Button title={walletConnected?"Wallet Connected":"Connect Wallet"} onPress={connectWallet}/>
        </View>
    );
}