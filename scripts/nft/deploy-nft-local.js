const hre = require("hardhat");

// deploy the nft contract to mint nft tokens on the platform
async function main() {
  
  const signer1 = await hre.reef.getSignerByName("alice");
  await signer1.claimDefaultAccount();

  const Nft = await hre.reef.getContractFactory("NFT", signer1);
  
  const nft = await Nft.deploy();

  console.log("Deploy done");
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
