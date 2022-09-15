/**
 * Store Data to Ipfs
 * Images name
 * Description
 * 
 * Store Data to backend
//     0	"Fb.com"
// name	"Crypto Punk"
// description	"Seller"
// jsonUrl	"over.ipfs.com"
// imageUrl	"image.ipfs.com"
// listed	"true"
// auctioned	"maker"
// owner	"0xd68C501158529eadA7D623974008F90758F2693D"
// categories	"ajkshdkaj"
// collectionAddress	"0xd68C501158529eadA7D623974008F90758F2693D"
// id	"632111205ead161b7844bde8"
 */

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


export const UploadImages = async (image,item_name,description,category,size,signer) => {
   // console.log(image[0].name);
    cid = await storeFiles(image);
   // makeFileObjects(cid, image[0].name);
    const obj = {
      image_url: cid + "/" + image[0].name,
      name: item_name,
      description: description,
      size: size,
      category: category,
    };
    const blob = new Blob([JSON.stringify(obj)], { type: "application/json" });
    let files = [new File([blob], item_name + ".json")];
    let metaCid = await storeFiles(files);
    console.log("metadata URI:" + metaCid + "/" + item_name + ".json");
    // console.log(files)
   // mint(metaCid + "/" + item_name + ".json");
    return files;
  }