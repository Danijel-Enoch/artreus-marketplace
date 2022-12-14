import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ethers } from "ethers"
import Web3Modal from "web3modal"
import Authereum from "authereum";
import { toast } from 'react-toastify'


export type VALUES = {
    provider: any | null,
    signer: any | null,
    account: string,
    connected: boolean,
    signOut: () => void,
    signIn: () => void,
}

const defaultValues: VALUES = {
    provider: null,
    signer: null,
    account: "",
    connected: false,
    signOut: () => { },
    signIn: () => { },
}

const AppContext = React.createContext(defaultValues);

const snackbar = () => toast.success("Wallet Connected", {
    toastId: 'walletconnect'
})

export const AppContextProvider = ({ children }: any) => {
    const [account, setAccount] = useState(defaultValues.account);
    const [provider, setProvider] = useState(defaultValues.provider);
    const [signer, setSigner] = useState(defaultValues.signer);
    const [connected, setConnected] = useState(defaultValues.connected);
    const [web3Modal, setWeb3Modal] = useState<any>(null);

    const signOut = useCallback(async () => {
        web3Modal.clearCachedProvider();
        setConnected(false);
        setAccount("");
    }, [web3Modal]);

    const signIn = useCallback(async () => {
        const instance = await web3Modal.connect();
        snackbar()

        // Subscribe to accounts change
        instance.on("accountsChanged", (accounts: string[]) => {
            console.log(accounts);
            if (accounts.length > 0) {
                setAccount(accounts[0]);
                return;
            }
            signOut();
        });

        // Subscribe to chainId change
        instance.on("chainChanged", (chainId: number) => {
            console.log(chainId);
        });

        // Subscribe to instance connection
        instance.on("connect", (info: { chainId: number }) => {
            console.log(info);
            setConnected(true);
        });

        // Subscribe to instance disconnection
        instance.on("disconnect", (error: { code: number; message: string }) => {
            console.log(error);
            setConnected(false);
        });

        const provid = new ethers.providers.Web3Provider(instance)
        const _signer = provid.getSigner();

        const accs = await provid.listAccounts();
        setAccount(accs[0]);
        setConnected(true);
        setProvider(provid);
        setSigner(_signer);

        // localStorage.setItem('metamask', JSON.stringify({
        //     provider: JSON.stringify(provider),
        //     signer: JSON.stringify(signer)
        // }))

    }, [signOut, web3Modal]);

    // localStorage.getItem('')

    useEffect(() => {
        const _web3Modal = new Web3Modal({
            cacheProvider: true, // optional
            // providerOptions: {
            //     authereum: {
            //         package: Authereum // required
            //     }, clvwallet: {
            //         package: true
            //     }
            // },
        });

        setWeb3Modal(_web3Modal);
    }, [])

    return (
        <AppContext.Provider
            value={{
                ...defaultValues,
                account,
                connected,
                provider,
                signer,
                signOut,
                signIn
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => React.useContext(AppContext);