import web3 = require('web3')

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
