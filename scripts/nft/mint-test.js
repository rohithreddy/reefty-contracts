const hre = require("hardhat");
require("dotenv").config();



async function main() {
  const signer1 = await hre.reef.getSignerByName("testnet_account");
    await signer1.claimDefaultAccount();
    const nftaddress = process.env.NFTADD;
    const nftmarketaddress = process.env.MARKETADD
    // console.log(process.env.NFTADD, process.env.MARKETADD);
    // const Nft = await hre.reef.getContractFactory("NFT", signer1);
  
    // const NftMarket = await hre.reef.getContractFactory("NFTMarket", signer1);
    
    const nft = await hre.reef.getContractAt("NFT", nftaddress, signer1);
    const nftmarket = await hre.reef.getContractAt("NFTMarket", nftmarketaddress, signer1);

    const token721 = await nft.createToken("https://gateway.pinata.cloud/ipfs/QmcbLtCE2w8J2MjBXuu9kR1Xab2wfpEubkmVsUR381B58k")
    console.log(token721)

    console.log("market address")
    console.log(await nft.getMarketPlaceaddress())


    const market_items = await nftmarket.fetchMarketItems()
    console.log("market items")
    console.log(market_items)


    const new_item = await nftmarket.createMarketItem(nftaddress, 5, ethers.utils.parseEther("10000") , {value: ethers.utils.parseEther("0.025")})
    console.log(new_item)
    const new_item1 = await nftmarket.createMarketItem(nftaddress, 7, ethers.utils.parseEther("70000"), {value: ethers.utils.parseEther("0.025")})
    console.log(new_item1)

    console.log("Transaction hash: ", token721.hash);

    const market_items1 = await nftmarket.fetchMarketItems()
    console.log("market items")
    console.log(market_items1)




    
}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });



// describe("NFT", function() {
//   it("Testing minting of NFT fucntion", async function() {

//     // const signer1 = await hre.reef.getSignerByName("");
    

//     // await nft.deployed();
//     // console.log("NFT deployed");
//     // const tokenId = await nft.createToken("tokenuri");
//     // const token2 = await nft.createToken("tokenuri2");
//     // console.log(tokenId);
//     // const t2 = tokenId.value.toString();
//     // const t1 = ethers.utils.formatEther(tokenId.value);
//     // console.log(t1);
//     // console.log("------");
//     // console.log(t2);
//     // expect(t2).to.be.a("string");
//     // console.log("------");

//     // console.log(ethers.utils.formatEther(token2.value));

//     // const owner= await nft.ownerOf(1);
//     // console.log(owner)
//     // expect(owner).to.be.a("string");


//     // const greeter = await Greeter.deploy("Hello, world!");
    
//     // await greeter.deployed();
//     // expect(await greeter.greet()).to.equal("Hello, world!");

//     // await greeter.setGreeting("Hola, mundo!");
//     // expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });
