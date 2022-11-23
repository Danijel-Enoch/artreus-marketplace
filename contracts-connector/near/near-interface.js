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

export async function nft_token({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_token', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });

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

 export async function nft_approve({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_approve', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });

 }

 export async function nft_is_approved({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_is_approved', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });

 }
 export async function  nft_payout({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_payout', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });

 }

 export async function nft_transfer_payout({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_transfer_payout', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });

 }

 export async function  nft_revoke({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_revoke', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });

 }

 export async function  nft_revoke_all({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_revoke_all', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });

 }
 export async function nft_total_supply({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_total_supply', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });

 }

 export async function nft_tokens({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_tokens', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });

 }

 export async function nft_tokens_for_owner({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_tokens_for_owner', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });

 }

 export async function  nft_supply_for_owner({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_supply_for_owner', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });

 }

 export async function nft_metadata ({ receiver_id, token_id, approval_id, memo }) {
    return await wallet.callMethod({ method: 'nft_metadata', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });

 }

 export async function  storage_deposit({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'storage_deposit', args: { receiver_id, token_id, approval_id, memo }, contractId: CONTRACT_ADDRESS });
 } 

 export async function storage_withdraw({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'storage_withdraw', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

 export async function storage_minimum_balance({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'storage_minimum_balance', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

 export async function  storage_balance_of({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: ' storage_balance_of', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

 export async function  remove_sale({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'remove_sale', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

 export async function  update_price({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'update_price', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

 export async function offer({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'offer', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

 export async function resolve_purchase({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'resolve_purchase', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

 export async function get_supply_sales({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'get_supply_sales', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

 export async function get_supply_by_owner_id({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'get_supply_by_owner_id', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

 export async function   get_sales_by_owner_id({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'get_sales_by_owner_id', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

 export async function  get_supply_by_nft_contract_id({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'get_supply_by_nft_contract_id', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

 export async function get_sales_by_nft_contract_id({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'get_sales_by_nft_contract_id', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

 export async function get_sale({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'get_sale', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

 export async function  nft_on_approve({ receiver_id, token_id, approval_id, memo}) {
    return await wallet.callMethod({ method: 'nft_on_approve', args: { receiver_id, token_id, approval_id, memo}, contractId: CONTRACT_ADDRESS});
 }

