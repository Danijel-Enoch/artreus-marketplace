import { ethers } from "ethers";


export async function mint(signer,uri) {
    const address = "0x9Ba2fc37D6E22634852695993175Cdf5bfD105D5";
const abi = [
  "function mint(string uri) payable returns (uint256)"
];
    try{
        const contract = new ethers.Contract(address, abi, signer);   
	const tx = await contract.functions.mint(uri);
	const receipt = await tx.wait();
	console.log("receipt", receipt);
        return receipt
    }catch(e){
        return e
    }
	
}

