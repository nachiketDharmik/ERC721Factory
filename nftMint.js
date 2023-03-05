const ethers = require('ethers');

//====================
// NFTFactory Contract address : 0xe625be5c6a0934adAcfC3bF777fA783D829CFD06 (https://goerli.etherscan.io/address/0xe625be5c6a0934adacfc3bf777fa783d829cfd06#code)
// NFTcontract address : 0xFa3CcdD011E181250541C0920114dB13a7374be5 (https://goerli.etherscan.io/address/0xfa3ccdd011e181250541c0920114db13a7374be5#code)
//=================================

//NFTcontract ABI
const contractABI = [
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "owner",
                              "type": "address"
                        },
                        {
                              "internalType": "string",
                              "name": "tokenName",
                              "type": "string"
                        },
                        {
                              "internalType": "string",
                              "name": "symbol",
                              "type": "string"
                        }
                  ],
                  "stateMutability": "nonpayable",
                  "type": "constructor"
            },
            {
                  "anonymous": false,
                  "inputs": [
                        {
                              "indexed": true,
                              "internalType": "address",
                              "name": "owner",
                              "type": "address"
                        },
                        {
                              "indexed": true,
                              "internalType": "address",
                              "name": "approved",
                              "type": "address"
                        },
                        {
                              "indexed": true,
                              "internalType": "uint256",
                              "name": "tokenId",
                              "type": "uint256"
                        }
                  ],
                  "name": "Approval",
                  "type": "event"
            },
            {
                  "anonymous": false,
                  "inputs": [
                        {
                              "indexed": true,
                              "internalType": "address",
                              "name": "owner",
                              "type": "address"
                        },
                        {
                              "indexed": true,
                              "internalType": "address",
                              "name": "operator",
                              "type": "address"
                        },
                        {
                              "indexed": false,
                              "internalType": "bool",
                              "name": "approved",
                              "type": "bool"
                        }
                  ],
                  "name": "ApprovalForAll",
                  "type": "event"
            },
            {
                  "anonymous": false,
                  "inputs": [
                        {
                              "indexed": true,
                              "internalType": "address",
                              "name": "from",
                              "type": "address"
                        },
                        {
                              "indexed": true,
                              "internalType": "address",
                              "name": "to",
                              "type": "address"
                        },
                        {
                              "indexed": true,
                              "internalType": "uint256",
                              "name": "tokenId",
                              "type": "uint256"
                        }
                  ],
                  "name": "Transfer",
                  "type": "event"
            },
            {
                  "anonymous": false,
                  "inputs": [
                        {
                              "indexed": false,
                              "internalType": "address",
                              "name": "to",
                              "type": "address"
                        },
                        {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "tokenID",
                              "type": "uint256"
                        }
                  ],
                  "name": "nftMinted",
                  "type": "event"
            },
            {
                  "inputs": [],
                  "name": "ADMIN_ROLE",
                  "outputs": [
                        {
                              "internalType": "bytes32",
                              "name": "",
                              "type": "bytes32"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "MINTER_ROLE",
                  "outputs": [
                        {
                              "internalType": "bytes32",
                              "name": "",
                              "type": "bytes32"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "OWNER_ROLE",
                  "outputs": [
                        {
                              "internalType": "bytes32",
                              "name": "",
                              "type": "bytes32"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "to",
                              "type": "address"
                        },
                        {
                              "internalType": "uint256",
                              "name": "tokenId",
                              "type": "uint256"
                        }
                  ],
                  "name": "approve",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "owner",
                              "type": "address"
                        }
                  ],
                  "name": "balanceOf",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "uint256",
                              "name": "tokenId",
                              "type": "uint256"
                        }
                  ],
                  "name": "getApproved",
                  "outputs": [
                        {
                              "internalType": "address",
                              "name": "",
                              "type": "address"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "owner",
                              "type": "address"
                        },
                        {
                              "internalType": "address",
                              "name": "operator",
                              "type": "address"
                        }
                  ],
                  "name": "isApprovedForAll",
                  "outputs": [
                        {
                              "internalType": "bool",
                              "name": "",
                              "type": "bool"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "to",
                              "type": "address"
                        }
                  ],
                  "name": "mintNFT",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "name",
                  "outputs": [
                        {
                              "internalType": "string",
                              "name": "",
                              "type": "string"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "name": "nftDetails",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "level",
                              "type": "uint256"
                        },
                        {
                              "internalType": "string",
                              "name": "designation",
                              "type": "string"
                        },
                        {
                              "internalType": "string",
                              "name": "weapon",
                              "type": "string"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "uint256",
                              "name": "tokenId",
                              "type": "uint256"
                        }
                  ],
                  "name": "ownerOf",
                  "outputs": [
                        {
                              "internalType": "address",
                              "name": "",
                              "type": "address"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "from",
                              "type": "address"
                        },
                        {
                              "internalType": "address",
                              "name": "to",
                              "type": "address"
                        },
                        {
                              "internalType": "uint256",
                              "name": "tokenId",
                              "type": "uint256"
                        }
                  ],
                  "name": "safeTransferFrom",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "from",
                              "type": "address"
                        },
                        {
                              "internalType": "address",
                              "name": "to",
                              "type": "address"
                        },
                        {
                              "internalType": "uint256",
                              "name": "tokenId",
                              "type": "uint256"
                        },
                        {
                              "internalType": "bytes",
                              "name": "data",
                              "type": "bytes"
                        }
                  ],
                  "name": "safeTransferFrom",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "account",
                              "type": "address"
                        }
                  ],
                  "name": "setAdminRole",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "operator",
                              "type": "address"
                        },
                        {
                              "internalType": "bool",
                              "name": "approved",
                              "type": "bool"
                        }
                  ],
                  "name": "setApprovalForAll",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "account",
                              "type": "address"
                        }
                  ],
                  "name": "setMinter",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "bytes4",
                              "name": "interfaceId",
                              "type": "bytes4"
                        }
                  ],
                  "name": "supportsInterface",
                  "outputs": [
                        {
                              "internalType": "bool",
                              "name": "",
                              "type": "bool"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "symbol",
                  "outputs": [
                        {
                              "internalType": "string",
                              "name": "",
                              "type": "string"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [],
                  "name": "tokenID",
                  "outputs": [
                        {
                              "internalType": "uint256",
                              "name": "",
                              "type": "uint256"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "uint256",
                              "name": "tokenId",
                              "type": "uint256"
                        }
                  ],
                  "name": "tokenURI",
                  "outputs": [
                        {
                              "internalType": "string",
                              "name": "",
                              "type": "string"
                        }
                  ],
                  "stateMutability": "view",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "address",
                              "name": "from",
                              "type": "address"
                        },
                        {
                              "internalType": "address",
                              "name": "to",
                              "type": "address"
                        },
                        {
                              "internalType": "uint256",
                              "name": "tokenId",
                              "type": "uint256"
                        }
                  ],
                  "name": "transferFrom",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
            },
            {
                  "inputs": [
                        {
                              "internalType": "uint256",
                              "name": "_tokenID",
                              "type": "uint256"
                        },
                        {
                              "internalType": "uint256",
                              "name": "_level",
                              "type": "uint256"
                        },
                        {
                              "internalType": "string",
                              "name": "_designation",
                              "type": "string"
                        },
                        {
                              "internalType": "string",
                              "name": "_weapon",
                              "type": "string"
                        }
                  ],
                  "name": "updateMetadata",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
            }
      ];
      




      const writeContract = async() => {

      
      const provider = new ethers.providers.JsonRpcProvider(Infuraprovider);

      let walletWithProvider = new ethers.Wallet(privateKey, provider);
      console.log("WalletWithProvier  ", walletWithProvider);

     
      const address =  await walletWithProvider.address ;
      console.log("AllAccounts" ,address );
      
      const nftContract =  new ethers.Contract(contractAddress,contractABI,walletWithProvider);

      //Calling mintNFT function 
      const a  = await nftContract.mintNFT(address);  
      console.log("Transaction Status ", a);
      
      //It will wait until transaction is complete
      const b = await a.wait() ;

      console.log("NFT minted successfully ", b);
      }


      let contractAddress = "0xFa3CcdD011E181250541C0920114dB13a7374be5";
      
      var keyAndProvider = process.argv ;
      //console.log(keyAndProvider);

      let privateKey = keyAndProvider[2]
      let Infuraprovider = keyAndProvider[3]

      if((keyAndProvider[2] && keyAndProvider[3]) != null ){
            writeContract() ;
            
      }
      else{
            console.error("Please enter wallet private-key and Provider");
      }

     // writeContract();
