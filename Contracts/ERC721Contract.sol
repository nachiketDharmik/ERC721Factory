
//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.3;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";



contract ERC721contract is ERC721 {
    

     
      constructor(address owner ,string memory tokenName , string memory symbol ) ERC721(tokenName , symbol) {
  
        _roles[OWNER_ROLE].members[owner] = true ;

    
      }
    //Setting up roles
     bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
     bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
     bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

    uint256 public tokenID = 0;

     struct RoleData {
        mapping(address => bool) members;
        
    }
    mapping(bytes32 => RoleData) private _roles;

     struct NFTMetaData {

         uint256 level ;
         string designation ;
         string weapon ;

     }

      mapping(uint256 => NFTMetaData) public nftDetails ;
      
       
       event nftMinted(address to , uint256 tokenID);
      
   
    modifier checkRole(bytes32 role){
       
       
           if(role == OWNER_ROLE){
               require(_roles[OWNER_ROLE].members[_msgSender()] ,"Only OWNER ");  
           }
          else if(role == ADMIN_ROLE){
              require(_roles[ADMIN_ROLE].members[_msgSender()] ,"Only ADMIN ");
           } else{
               
               require(_roles[MINTER_ROLE].members[_msgSender()] , "Only MINTERS "); 
           }
        _;
    }
     
     function setAdminRole(address account) public checkRole(OWNER_ROLE){
       _roles[ADMIN_ROLE].members[account] = true ;
     }
     function setMinter( address account) public checkRole(ADMIN_ROLE){
       _roles[MINTER_ROLE].members[account] = true ;
     }


    function _baseURI() internal pure override returns (string memory) {
        return "NFTbaseURI/";
    }

    function mintNFT(address to) public checkRole(MINTER_ROLE) {
       
         tokenID++ ;
         nftDetails[tokenID] = NFTMetaData(1,"soldier","stick");
        _safeMint(to, tokenID);
        emit nftMinted(to,tokenID);

    }

   function updateMetadata(uint256 _tokenID ,uint256 _level ,string memory _designation , string memory _weapon) public checkRole(ADMIN_ROLE)
 {
   nftDetails[_tokenID] =  NFTMetaData( _level ,_designation , _weapon);
 }
     
}