import 'regenerator-runtime/runtime';
import { Wallet } from './near-wallet';

const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS })





//View functions
await wallet.callMethod({ method: 'set_greeting', args: { greeting: greeting.value }, contractId: CONTRACT_ADDRESS });

//Nft Minting
export async function nft_token({ token_id }) {
    await wallet.viewMethod({ method: 'nft_token', args: { token_id }, contractId: CONTRACT_ADDRESS });
}

//Call fucntion
const currentGreeting = await wallet.viewMethod({ method: 'get_greeting', contractId: CONTRACT_ADDRESS });

//NFT Minting
export async function nft_mint({ token_id, metadata, receiver_id, perpetual_royalties }) {
    return await wallet.callMethod({ method: 'nft_mint', args: { token_id, metadata, receiver_id, perpetual_royalties }, contractId: CONTRACT_ADDRESS });
}

export async function nft_transfer({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_transfer', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });
}

export async function nft_transfer_call({ receiver_id, token_id, approval_id, memo, msg }) {
    return await wallet.callMethod({ method: 'nft_transfer_call', args: { receiver_id, token_id, approval_id, memo, msg }, contractId: CONTRACT_ADDRESS });
}

export async function nft_resolve_transfer({ authorized_id, owner_id, receiver_id, token_id, approved_account_ids, memo }) {
    return await wallet.callMethod({ method: 'nft_resolve_transfer', args: { authorized_id, owner_id, receiver_id, token_id, approved_account_ids, memo }, contractId: CONTRACT_ADDRESS });
}

export async function nft_transfer({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_transfer', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });
}




