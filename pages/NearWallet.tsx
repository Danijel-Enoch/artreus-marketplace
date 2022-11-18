import { WalletSelectorContextProvider } from "../contexts/WalletSelector";
import Content from "../components/Content";

const NearWallet = () => {
    return (
        <>
            <WalletSelectorContextProvider>
                <Content />
            </WalletSelectorContextProvider>
        </>
    );
};

export default NearWallet;