// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
// import Openzeppelin ERC721 token contract
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;
    address marketAddress;
    address payable owner;


    constructor(address _marketAddress) ERC721("ReeFTY Platform NFT Tokens", "REEFTYNFT") {
        owner = payable(msg.sender);
        marketAddress = _marketAddress;
    }
  
    function createToken(string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();
        uint256 newId = _tokenIds.current();
        _mint(msg.sender, newId);
        _setTokenURI(newId, tokenURI);
        setApprovalForAll(marketAddress, true);
        return newId;
        
    }

    function setMarketPlaceaddress(address marketPlaceAddress) public {
        require(msg.sender == owner);
        marketAddress = marketPlaceAddress;
    }

    function getMarketPlaceaddress() external view returns (address) {
        return marketAddress;
    }

    
}