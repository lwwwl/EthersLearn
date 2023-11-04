import { ethers } from "ethers";

const provider = ethers.getDefaultProvider();
const main = async () => {
    const balance = await provider.getBalance(`0xed0C7c579D464aC422515D3443Dd7051647067B5`);
    console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
}
main()