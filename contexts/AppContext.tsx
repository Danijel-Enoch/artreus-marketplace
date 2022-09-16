import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ethers } from "ethers"
import Web3Modal from "web3modal"
import { toast } from 'react-toastify'

type VALUES = {
    provider: any | null,
    signer: any | null,
    account: string,
    connected: boolean,
    logOut: () => void,
    logIn: () => void,
}

const defaultValues: VALUES = {
    provider: null,
    signer: null,
    account: "",
    connected: false,
    logOut: () => { },
    logIn: () => { },
}

const AppContext = React.createContext(defaultValues);

const snackbar = () => toast.success("Wallet Connected")

export const AppContextProvider = ({ children }) => {
    const [account, setAccount] = useState(defaultValues.account);
    const [provider, setProvider] = useState(defaultValues.provider);
    const [signer, setSigner] = useState(defaultValues.signer);
    const [connected, setConnected] = useState(defaultValues.connected);
    const [web3Modal, setWeb3Modal] = useState<any>(null);

    const logOut = useCallback(async () => {
        web3Modal.clearCachedProvider();
        setConnected(false);
        setAccount("");
    }, [web3Modal]);

    const logIn = useCallback(async () => {
        const instance = await web3Modal.connect();
        snackbar()

        // Subscribe to accounts change
        instance.on("accountsChanged", (accounts: string[]) => {
            console.log(accounts);
            if (accounts.length > 0) {
                setAccount(accounts[0]);
                return;
            }
            logOut();
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
    }, [logOut, web3Modal]);

    useEffect(() => {
        const _web3Modal = new Web3Modal({
            cacheProvider: true, // optional
            providerOptions: {},
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
                logOut,
                logIn
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => React.useContext(AppContext);