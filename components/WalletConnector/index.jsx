import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import WalletButton from './WalletButton';

import { useWeb3React } from '@web3-react/core';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector"
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useDispatch } from 'react-redux';
import { hideWalletConnector } from 'store/slices/utilSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const MetamaskWallet = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 2301]
});

const CoinbaseWallet = new WalletLinkConnector({
    url: `https://data-seed-prebsc-2-s2.binance.org:8545`,
    appName: "EvoBridge",
    supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 2031],
});

const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://data-seed-prebsc-2-s2.binance.org:8545`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});

export default function WalletConnector() {
    const dispatch = useDispatch();
    const { deactivate, activate, account, library, chainId, provider } = useWeb3React();
    const [ loading, setLoading] = useState(false);
    
    useEffect(() => {
        switchNetwork();
    }, [account, chainId, provider])


    const handleConnectProvider = async(provider) => {
        // Set the UI state to loading to prevent further interaction
        setLoading(true);
        switch(provider) {
            case 'WalletConnect':
                await activate(WalletConnect);
                break;
            case 'Coinbase':
                await activate(CoinbaseWallet);
                break;
            case 'MetaMask':
                await activate(MetamaskWallet);
                break;
            default:
                activate(MetamaskWallet);
        }
        setLoading(false);
        console.log(chainId);
        await switchNetwork();
    };

    // example of switching or adding network with Harmony Mainnet
    const switchNetwork = async () => {
        try {
            await library.provider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x8FD" }],
            });
        } catch (switchError) {
            // 4902 error code indicates the chain is missing on the wallet
            if (switchError.code === 4902) {
                try {
                await library.provider.request({
                    method: "wallet_addEthereumChain",
                    params: [
                    {
                        chainId: "0x8FD",
                        rpcUrls: ["https://bsc-dataseed1.binance.org"],
                        chainName: "Binance Smart Chain Mainnet",
                        nativeCurrency: { name: "BNB", decimals: 18, symbol: "BNB" },
                        blockExplorerUrls: ["https://bscscan.com"],
                        // iconUrls: ["https://harmonynews.one/wp-content/uploads/2019/11/slfdjs.png"]
                    }
                    ],
                });
                } catch (error) {
                console.error(error)
                }
            }
        }
    };

    return (
        <div className='fixed w-full  h-[100vh] top-0 left-0 flex justify-center items-center bg-[#20202050]' style={{zIndex: 1000}}>
            <div className='fixed w-full h-[100vh] top-0 left-0 hidden md:block' onClick={() => {dispatch(hideWalletConnector())}}></div>
            <div className='absolute flex items-center justify-center top-0 right-0 w-[50px] h-[50px] md:hidden block' onClick={() => {dispatch(hideWalletConnector())}}>
                <FontAwesomeIcon icon={faCircleXmark} size={32} color="white"/>
            </div>
            <div className="w-full h-full md:w-fit md:h-fit flex flex-col justify-center p-[20px] bg-white border border-[lightgray] min-w-[280px] md:rounded-[12px] shadow"
                style={{zIndex: 1001}}>
                <div className="w-full my-[20px] flex justify-center items-center text-white">
                    <Image
                        src= { account ? '/images/wallet/wallet_open.png' : '/images/wallet/wallet_closed.png'}
                        alt=''
                        width={80}
                        height={80}
                    />
                </div>
                <p className='mb-[20px] text-[24px] text-black text-center'>{account ? account.substring(0, 6) + "..." + account.substring(account.length - 4) : loading ? 'Connecting...' : 'Connect your wallet'} </p>
                { !account &&
                    <div className='flex flex-col'>
                        <WalletButton label={'Coinbase'} icon={'/images/svg/coinbaseicon.svg'} handleConnect={handleConnectProvider}/>
                        <WalletButton label={'MetaMask'} icon={'/images/svg/metamaskicon.svg'} handleConnect={handleConnectProvider}/>
                        <WalletButton label={'WalletConnect'} icon={'/images/svg/WalletConnecticon.svg'} handleConnect={handleConnectProvider}/>
                    </div>
                }
                { account &&
                    <div className='flex flex-col'>
                        <WalletButton label={'Disconnect'} icon={'/images/svg/lock.svg'} handleConnect={deactivate}/>
                    </div>
                }
            </div>
        </div>
    );
}