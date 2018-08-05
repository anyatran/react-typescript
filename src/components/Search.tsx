import * as React from 'react'
import { ethService } from '../utils/EthService'
import Form from './Form'
import Result from './Result'
export interface SearchProps { }
export interface SearchState {
  balance: number | undefined;
  ensAddress: string | undefined;
  error: string | undefined;
  ethAddress: string | undefined;
}

/**
 * @class
 * @classdesc Search Component
 */
class Search extends React.Component<SearchProps, SearchState> {
  readonly state: SearchState = {
    balance: undefined,
    ensAddress: undefined,
    error: undefined,
    ethAddress: undefined
  }

  constructor(props: SearchProps) {
    super(props)
  }

  /**
   * get ethereum balance
   * @private
   * @param {string} takerAddress - a given address
   * @return {Promise<void>} sets the state
   */
  private getEthBalance = async (takerAddress: string): Promise<void> => {
    let ethAddress, ensAddress
    if (ethService.isENS(takerAddress)) {
      ethAddress = await ethService.ensToEth(takerAddress)
      ensAddress = takerAddress
    } else {
      ethAddress = takerAddress
      ensAddress = await ethService.ethToEns(takerAddress)
    }
    if (ethAddress) {
      try {
        const balance = await ethService.getEthBalance(ethAddress)
        this.setState({
          balance,
          ethAddress,
          ensAddress,
          error: undefined
        })
      } catch (err) {
        this.setState({
          balance: undefined,
          ensAddress: undefined,
          ethAddress: undefined,
          error: err.toString()
        })
      }
    } else {
      this.setState({
        balance: undefined,
        ensAddress: undefined,
        ethAddress: undefined,
        error: 'Invalid address'
      })
    }
  }

  /**
   * renders result or error
   * @private
   * @return {JSX.Element | null}
   */
  private renderResult = (): JSX.Element | null => {
    const { ensAddress, ethAddress, balance, error } = this.state
    if (error) {
      return <p>{error}</p>
    } else if (ethAddress) {
      return <Result ensAddress={ensAddress} ethAddress={ethAddress} balance={balance} />
    }
    return null
  }

  render() {
    return (
      <div className="Search">
        <Form onSubmit={this.getEthBalance} />
        { this.renderResult() }
      </div>
    )
  }
}

export default Search
