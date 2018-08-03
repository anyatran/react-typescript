import web3 = require('web3')

class Web3Instance {

  init = () : any => {
    const web3Instance = new web3()
    const provider = new web3Instance.providers.HttpProvider('http://localhost:8545')
    web3Instance.setProvider(provider)
    return web3Instance
  }
}

export default Web3Instance.init()
