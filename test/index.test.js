const {
  default: sign
} = require('../lib')

const tx1 = {
  "privateKey": "0x7cc34429d268cdf33e1595d9aa3c56bfcb785c24b7f6dd031fe059d93d8e92d9",
  "data": "6060604052341561000f57600080fd5b60d38061001d6000396000f3006060604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c14606e575b600080fd5b3415605857600080fd5b606c60048080359060200190919050506094565b005b3415607857600080fd5b607e609e565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a723058202d9a0979adf6bf48461f24200e635bc19cd1786efbcfc0608eb1d76114d405860029",
  "nonce": "47",
  "quota": 999999,
  "validUntilBlock": 114930,
  "version": 0,
  "chainId": 1,
  "value": '0',
}
const output1 = '0x0a81021202343718bf843d20f281072af0016060604052341561000f57600080fd5b60d38061001d6000396000f3006060604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c14606e575b600080fd5b3415605857600080fd5b606c60048080359060200190919050506094565b005b3415607857600080fd5b607e609e565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a723058202d9a0979adf6bf48461f24200e635bc19cd1786efbcfc0608eb1d76114d405860029380112410c423fe1ae85b06bfe5e0d7756c2550441077abdb94663fa92408409869fef0d6401a714b3364f7c641c96a5df92b375e1c20d982edc1de3c44ba1f7e589e9fa01'



test("sign tx 1", () => {
  const signedTx = sign(tx1)
  expect(signedTx).toBe(output1)
})