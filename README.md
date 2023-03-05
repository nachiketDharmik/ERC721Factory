//=============Contract deployed on Goerli testnet=======
// NFTFactory Contract address : 
//0xe625be5c6a0934adAcfC3bF777fA783D829CFD06 (https://goerli.etherscan.io/address/0xe625be5c6a0934adacfc3bf777fa783d829cfd06#code)
// NFTcontract address : 
//0xFa3CcdD011E181250541C0920114dB13a7374be5 (https://goerli.etherscan.io/address/0xfa3ccdd011e181250541c0920114db13a7374be5#code)
//=================================

STEPS :

1. Download dependencies
    cmd: npm install

2. Provide wallet private-key and Provider details
    
    cmd: node nftMint.js "YOUR_PRIVATE_KEY" "PROVIDER_API"

    Example: 
    cmd: node nftMint.js "abcdefghijklm0987654321"  "https://goerli.infura.io/v3/YOUR_PROJECT_ID"

    Above command will call mintNFT function of NFTcontract and mint new NFT.

    
  