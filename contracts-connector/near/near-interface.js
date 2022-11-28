import 'regenerator-runtime/runtime';
import { Wallet } from './near-wallet';

const CONTRACT_ADDRESS = process.env.CONTRACT_NAME;

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign

export const wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS })

//View functions
// await wallet.callMethod({ method: 'set_greeting', args: { greeting: greeting.value }, contractId: CONTRACT_ADDRESS });

//view function
export async function nft_token({ token_id }) {
   await wallet.viewMethod({ method: 'nft_token', args: { token_id }, contractId: CONTRACT_ADDRESS });
}
//view function
//get user nfts
export async function  nft_tokens_for_owner({ account_id, from_index, limit }) {
   await wallet.viewMethod({ method: 'nft_tokens_for_owner', args: { account_id, from_index, limit }, contractId: CONTRACT_ADDRESS });
}
//get all nfts
export async function nft_tokens({ from_index, limit }){
   await wallet.viewMethod({ method: 'nft_tokens', args: { from_index, limit }, contractId: CONTRACT_ADDRESS });
}
//Call fucntion
// const currentGreeting = await wallet.viewMethod({ method: 'get_greeting', contractId: CONTRACT_ADDRESS });

//NFT Minting call function
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

export async function nft_approve({ token_id, account_id, msg }) {
   return await wallet.callMethod({ method: 'nft_approve', args: { token_id, account_id, msg }, contractId: CONTRACT_ADDRESS });

}
//view method
export async function nft_is_approved({ token_id, approved_account_id, approval_id }) {
   return await wallet.viewMethod({ method: 'nft_is_approved', args: { token_id, approved_account_id, approval_id }, contractId: CONTRACT_ADDRESS });

}
//view function
export async function nft_payout({ token_id, balance, max_len_payout }) {
   return await wallet.viewMethod({ method: 'nft_payout', args: { token_id, balance, max_len_payout }, contractId: CONTRACT_ADDRESS });

}

export async function nft_transfer_payout({ receiver_id, token_id, approval_id, memo, balance, max_len_payout }) {
   return await wallet.callMethod({ method: 'nft_transfer_payout', args: { receiver_id, token_id, approval_id, memo, balance, max_len_payout }, contractId: CONTRACT_ADDRESS });

}

export async function nft_revoke({ token_id, account_id }) {
   return await wallet.callMethod({ method: 'nft_revoke', args: { token_id, account_id }, contractId: CONTRACT_ADDRESS });

}

export async function nft_revoke_all({ token_id }) {
   return await wallet.callMethod({ method: 'nft_revoke_all', args: { token_id }, contractId: CONTRACT_ADDRESS });

}
export async function nft_total_supply() {
   return await wallet.viewMethod({ method: 'nft_total_supply', contractId: CONTRACT_ADDRESS });

}

export async function nft_tokens({ from_index, limit }) {
   return await wallet.viewMethod({ method: 'nft_tokens', args: { from_index, limit }, contractId: CONTRACT_ADDRESS });

}

export async function nft_tokens_for_owner({ account_id, from_index, limit }) {
   return await wallet.viewMethod({ method: 'nft_tokens_for_owner', args: { account_id, from_index, limit }, contractId: CONTRACT_ADDRESS });

}

export async function nft_supply_for_owner({ account_id }) {
   return await wallet.viewMethod({ method: 'nft_supply_for_owner', args: { account_id }, contractId: CONTRACT_ADDRESS });

}

export async function nft_metadata() {
   return await wallet.viewMethod({ method: 'nft_metadata', contractId: CONTRACT_ADDRESS });

}

export async function storage_deposit({ account_id }) {
   return await wallet.callMethod({ method: 'storage_deposit', args: { account_id }, contractId: CONTRACT_ADDRESS });
}

export async function storage_withdraw() {
   return await wallet.callMethod({ method: 'storage_withdraw', contractId: CONTRACT_ADDRESS });
}

export async function storage_minimum_balance() {
   return await wallet.viewMethod({ method: 'storage_minimum_balance', contractId: CONTRACT_ADDRESS });
}

export async function storage_balance_of({ account_id }) {
   return await wallet.viewMethod({ method: ' storage_balance_of', args: { account_id }, contractId: CONTRACT_ADDRESS });
}

export async function remove_sale({ nft_contract_id, token_id }) {
   return await wallet.callMethod({ method: 'remove_sale', args: { nft_contract_id, token_id }, contractId: CONTRACT_ADDRESS });
}

export async function update_price({ nft_contract_id, token_id, price }) {
   return await wallet.callMethod({ method: 'update_price', args: { nft_contract_id, token_id, price }, contractId: CONTRACT_ADDRESS });
}

export async function offer({ nft_contract_id, token_id }) {
   return await wallet.callMethod({ method: 'offer', args: { nft_contract_id, token_id }, contractId: CONTRACT_ADDRESS });
}

export async function resolve_purchase({ buyer_id, price }) {
   return await wallet.callMethod({ method: 'resolve_purchase', args: { buyer_id, price }, contractId: CONTRACT_ADDRESS });
}

export async function get_supply_sales() {
   return await wallet.viewMethod({ method: 'get_supply_sales', contractId: CONTRACT_ADDRESS });
}

export async function get_supply_by_owner_id({ account_id }) {
   return await wallet.viewMethod({ method: 'get_supply_by_owner_id', args: { account_id }, contractId: CONTRACT_ADDRESS });
}

export async function get_sales_by_owner_id({ account_id, from_index, limit }) {
   return await wallet.viewMethod({ method: 'get_sales_by_owner_id', args: { account_id, from_index, limit }, contractId: CONTRACT_ADDRESS });
}

export async function get_supply_by_nft_contract_id({ nft_contract_id }) {
   return await wallet.viewMethod({ method: 'get_supply_by_nft_contract_id', args: { nft_contract_id }, contractId: CONTRACT_ADDRESS });
}

export async function get_sales_by_nft_contract_id({ nft_contract_id, from_index, limit }) {
   return await wallet.viewMethod({ method: 'get_sales_by_nft_contract_id', args: { nft_contract_id, from_index, limit }, contractId: CONTRACT_ADDRESS });
}

export async function get_sale({ nft_contract_token }) {
   return await wallet.viewMethod({ method: 'get_sale', args: { nft_contract_token }, contractId: CONTRACT_ADDRESS });
}

export async function nft_on_approve({ token_id, owner_id, approval_id, msg }) {
   return await wallet.callMethod({ method: 'nft_on_approve', args: { token_id, owner_id, approval_id, msg }, contractId: CONTRACT_ADDRESS });
}

