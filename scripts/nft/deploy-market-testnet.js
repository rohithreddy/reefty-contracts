const hre = require("hardhat");

// deploy the nft contract to mint nft tokens on the platform
async function main() {
  
  // const signer1 = await hre.reef.getSignerByName("alice");
  const signer1 = await hre.reef.getSignerByName("testnet_account");
  await signer1.claimDefaultAccount();


  const Nft = await hre.reef.getContractFactory("NFT", signer1);

  const NftMarket = await hre.reef.getContractFactory("NFTMarket", signer1);

  const nftMarket = await NftMarket.deploy();

  console.log("Deployed marketplace contract at :"+nftMarket.address);

  console.log("Deploying NFT contract");

  const nft = await Nft.deploy(nftMarket.address);

  console.log("Deployed NFT contract done");
  console.log({
    nft: nft.address,
  });
  console.log({
    name: await nft.name(),
    initialBalance: await nft.totalSupply().toString(),
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
