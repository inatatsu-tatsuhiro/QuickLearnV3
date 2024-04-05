import sdk from "symbol-sdk";
import { Config } from "../utils/Config";

const alicePrivateKey = new sdk.PrivateKey(Config.PRIVATE_KEY)
const alice = new sdk.symbol.KeyPair(alicePrivateKey)

console.log({
    private: alice.privateKey.toString(),
    public: alice.publicKey.toString(),
})
