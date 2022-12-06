import { Web3Storage } from 'web3.storage'
import axios from 'axios'
function getAccessToken() {
    // If you're just testing, you can paste in a token
    // and uncomment the following line:
    // return 'paste-your-token-here'

    // In a real app, it's better to read an access token from an
    // environement variable or other configuration that's kept outside of
    // your code base. For this to work, you need to set the
    // WEB3STORAGE_TOKEN environment variable before you run your code.
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGNBZTE3Qjk0NzE4Q0I3MDIwOTcwZjg0NTlGQTQ5ZTk2NDNlRDg2OTYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI4MTU5NDIyNjgsIm5hbWUiOiJhcnRlcmV1cyJ9.3yGxFeIZ8v0lsPwXsiuuRdECC76d8kly3u8D2yBsum4"
}

export function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}

export async function retrieve(cid) {
    const client = makeStorageClient()
    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    console.log(res)
    if (!res.ok) {
        throw new Error(`failed to get ${cid}`)
    }

}

export async function retrieveFiles(cid) {
    const client = makeStorageClient()
    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
        throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
    }

    // unpack File objects from the response
    const files = await res.files()
    for (const file of files) {
        console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
    }
}

export const deconstructCid = async (cid) => {
    var config = {
        method: 'get',
        url: 'https://ipfs.io/ipfs/' + cid,
        headers: {},
    };

    axios(config)
        .then(function (response) {
            //console.log(response.data);
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });

}
export const deconstructToken = async () => {

}

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

// return fetch("https://ipfs.io/ipfs/bafybeibaso2ocxeorz2q5fciy5xkpn4gkzmg54rpqpedxoge6cdlvn4soy/Daniels NFt.json", requestOptions)
//     .then(response => response.json())
//     .catch(error => console.log('error', error));