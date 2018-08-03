import web3 = require('web3')

// export namespace Web3Instance {
//   // ... any one time initialization goes here ..
//   const web3Instance: any = new web3()
//   const provider = new web3Instance.providers.HttpProvider('http://localhost:8545')
//   web3Instance.setProvider(provider)
//   export function getEthBalance(takerAddress: string): number {
//     const balance = web3Instance.eth.getBalance(takerAddress)
//     return web3Instance.toDecimal(balance)
//   }
// }
// }

class Web3Instance {
  private static _web3Instance: any

  constructor() {
    Web3Instance._web3Instance = new web3()
    const provider = new Web3Instance._web3Instance.providers.HttpProvider('http://localhost:8545')
    Web3Instance._web3Instance.setProvider(provider)
  }

  /**
  * get web3 instance
  */
  getInstance = (): any => {
    return Web3Instance._web3Instance
  }
}

export const web3Instance = new Web3Instance().getInstance()
