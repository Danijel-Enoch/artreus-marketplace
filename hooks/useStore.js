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
import { Web3Storage } from 'web3.storage'

function getAccessToken () {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  // return 'paste-your-token-here'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return process.env.KEY
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}


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


export const UploadImages = async (image,item_name,description,category,size) => {
   // console.log(image[0].name);
    cid = await storeFiles(image);
    //makeFileObjects(cid, image[0].name);
    console.log("Image Cid: "+cid)
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
     console.log(files)
   // mint(metaCid + "/" + item_name + ".json");
    return [files,cid,item_name,description,category];
  }

  export const  UploadToDb=async(name,description,jsonUrl,image_url,owner,categories,collectionAddress)=>{
    var axios = require('axios');
var data = JSON.stringify({
  "socialLinks": [
    "Fb.com"
  ],
  "name": name,
  "description": description,
  "jsonUrl": jsonUrl,
  "imageUrl": image_url,
  "listed": "false",
  "auctioned": "false",
  "owner": owner,
  "categories": categories,
  "collectionAddress": collectionAddress
});

var config = {
  method: 'post',
  url: 'https://artreuss.herokuapp.com/v1/nft/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
  }