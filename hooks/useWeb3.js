import { ethers } from "ethers";
import { useAppContext } from "../contexts/AppContext";


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




export async function makeOffer(id,price,nft_contract_address) {
    const address = "0xa0230C32c69e409C2815C59506202699a89954cC";
const abi = [
  "function makeOffer(uint256 _id, uint256 _price, address nft_contract_address) payable"
];
	const contract = new ethers.Contract(address, abi, signer);   
	const tx = await contract.functions.makeOffer(id,price,nft_contract_address);

	const receipt = await tx.wait();
	console.log("receipt", receipt);
}





export async function Buy() {
    const address = "0xa0230C32c69e409C2815C59506202699a89954cC";
const abi = [
  "function fillOffer(uint256 _offerId, address nft_contract_address) payable"
];
	const contract = new ethers.Contract(address, abi, signer);   
	const tx = await contract.functions.fillOffer(null,null);

	const receipt = await tx.wait();
	console.log("receipt", receipt);
}




export async function cancelOffer() {
    const address = "0xa0230C32c69e409C2815C59506202699a89954cC";
    const abi = [
      "function cancelOffer(uint256 _offerId, address nft_contract_address)"
    ];
	const contract = new ethers.Contract(address, abi, signer);   
	const tx = await contract.functions.cancelOffer(null,null);
	const receipt = await tx.wait();
	console.log("receipt", receipt);
}




async function Withdraw() {
    const address = "0xa0230C32c69e409C2815C59506202699a89954cC";
const abi = [
  "function Withdraw() payable"
];
	const contract = new ethers.Contract(address, abi, signer);   
	const tx = await contract.functions.Withdraw();

	const receipt = await tx.wait();
	console.log("receipt", receipt);
}

Withdraw();


const app=useAppContext()
const walletAddress=app.signer().getAddress();



async function getUserNft() {
    const address = "0x9Ba2fc37D6E22634852695993175Cdf5bfD105D5";
const abi = [
  "function getUserNft(address user_address) view returns (tuple(uint256 id, address creator, string uri)[])"
];
	const contract = new ethers.Contract(address, abi, signer);   
	const result = await contract.functions.getUserNft("0xd68C501158529eadA7D623974008F90758F2693D");

	console.log("result", result);
    return result;
}

getUserNft();