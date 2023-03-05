//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.3;

import "./ERC721Contract.sol";


contract BasicNftFactory {

  ERC721contract[] public contractList;

    function createERC721(string calldata tokenName , string calldata symbol) public {
            ERC721contract erc721 = new ERC721contract(msg.sender ,tokenName , symbol);
            contractList.push(erc721) ;
    }
}