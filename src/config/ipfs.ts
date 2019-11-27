require('dotenv').config();
import axios, { AxiosResponse } from 'axios';
import FormData from 'form-data';

export function pinFileToIPFS(stream) {
  return new Promise((resolve, reject) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    let data = new FormData();

    data.append('file', stream, {
      filename: `${stream.hash}.pdf`,
      filepath: `${stream.hash}.pdf`,
      contentType: 'application/pdf',
      knownLength: stream.length
    });

    axios
      .post(url, data, {
        maxContentLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
        headers: {
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          pinata_api_key: process.env.PINATA_API_KEY,
          pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY
        }
      })
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
}

export async function getFromPinata(hash: string): Promise<AxiosResponse> {
  try {
    return await axios.get('https://gateway.pinata.cloud/ipfs/' + hash, {
      headers: {
        pinata_api_key: process.env.PINATA_API_KEY,
        pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY
      }
    });
  } catch (err) {
    throw Error(err);
  }
}
