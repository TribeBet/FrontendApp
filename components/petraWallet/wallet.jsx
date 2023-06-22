
import React, { useState, useEffect } from 'react'

const Wallet = () => {
    const [petraWallet, setPetraWallet] = useState();
    const [balance, setBalance] = useState('');
    const [walletStates, setWalletStates] = useState(false)
    const [address, setAddress] = useState('');
    const [publicKey, setPublicKey] = useState('');

    const [wallet, setWallet] = useState(null);
    // const wallet = getAptosWallet();

    useEffect(() => {
        // setWallet(window.aptos);
        const isPetraInstalled = window.aptos;
        console.log("isPetraInstalled", isPetraInstalled);

        if (isPetraInstalled) {
            setWallet(getAptosWallet());
        }


        // const updateBalance = async () => {
        //     setBalance(await getBalance(wallet.address, '0x1::aptos_coin::AptosCoin'));
        // };
        // if (wallet.address !== '') {
        //     updateBalance();
        // }
    }, []);

    const getAptosWallet = () => {
        if ('aptos' in window) {
            return window.aptos;
        } else {
            window.open('https://petra.app/', `_blank`);
        }
    };



    const connect = async () => {
        // if (!walletStates.installed) {
        //     window.open(WALLET_INFOS.downloadUrl);
        //     return;
        // }
        if (wallet) {
            try {
                const response = await wallet.connect();
                console.log("response", response); // { address: string, address: string }

                setAddress(response.address);
                setPublicKey(response.publicKey);
                setWalletStates(true);
            } catch (error) {
                console.log("error", error);
                // { code: 4001, message: "User rejected the request."}
            }
        }

    };

    const disconnect = async () => {
        try {
            await wallet.disconnect();
        } catch (err) {
            console.log(err);
        }
    };

    // const isPetraInstalled = window.aptos;
    // console.log("isPetraInstalled", isPetraInstalled);




    // const wallet = getAptosWallet();

    // const connectAptosWallet = async () => {
    //     if (wallet) {
    //         try {
    //             const response = await wallet.connect();
    //             console.log(response); // { address: string, address: string }

    //             const account = await wallet.account();
    //             console.log(account); // { address: string, address: string }
    //         } catch (error) {
    //             // { code: 4001, message: "User rejected the request."}
    //         }
    //     }
    // }


    // const getCurrentNetwork = async () => {
    //     let network = await window.aptos.network();

    //     if (networkChanged) {
    //         window.aptos.onNetworkChange((newNetwork) => {
    //             network = newNetwork;
    //         });
    //     }
    // }

    // const connectWalletButton = () => {
    //     if (wallet)
    //         connectAptosWallet()
    // }

    return (
        <button onClick={connect} className="text-white">
            {walletStates ? 'Disconnect' : " Connect Wallet"}
        </button>
    )
}

export default Wallet