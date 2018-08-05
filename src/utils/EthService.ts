import web3 = require('web3')
import ENS = require('ethjs-ens')

class EthService {
  private _web3: any
  private _ens: any

  constructor() {
    this._web3 = new web3()
    const provider = new this._web3.providers.HttpProvider('https://ropsten.infura.io')
    this._web3.setProvider(provider)
    this._ens = new ENS({ provider: provider, network: '3' })
  }

  /**
   * checks if address is ENS format
   * @param {string} address given address
   * @return {boolean} true if it is ENS
   */
  isENS = (address: string): boolean => {
    return (/.eth$/).test(address.trim())
  }

  /**
   * get address ethereum balance
   * @param address - ethereum address in hex
   * @return {Promise<number | undefined>} - balance if it exist
   */
  getEthBalance = async (address: string): Promise<number | undefined> => {
    try {
      const balance = this._web3.eth.getBalance(address)
      return this._web3.fromWei(balance, 'ether').toNumber()
    } catch (err) {
      throw err
      return undefined
    }
  }

  /**
   * converts ENS address to ethereum
   * @param {string} address - ENS address
   * @return {Promise<string | undefined>} ethereum address if it exist
   */
  ensToEth = async (address: string): Promise<string | undefined> => {
    try {
      const ethAddress = await this._ens.lookup(address)
      return ethAddress
    } catch(err) {
      return undefined
    }
  }

  /**
   * converts ethereum address to ENS
   * @param {string} address - ethereum address
   * @return {Promise<string | undefined>} - ENS address if it exist
   */
  ethToEns = async (address: string): Promise<string | undefined> => {
    // console.log('ethtoens: ', this._web3.toHex(address), this._ens.registry)
    try {
      const ensAddress = await this._ens.reverse(this._web3.toHex(address))
      return ensAddress
    } catch(err) {
      return undefined
    }
  }

  /**
   * check if the given address is a right format
   * @param {string} address - given address
   * @return {boolean} - true if it is
   */
  validateAddress = (address: string): boolean => {
    return this.isENS(address) || this._web3.isAddress(address)
  }
}

export const ethService = new EthService()
