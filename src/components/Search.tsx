import * as React from 'react'
import { web3Instance } from './Web3Instance'
import Form from './Form'
import Result from './Result'
export interface SearchProps { }
export interface SearchState {
  balance: number | undefined;
  takerAddress: string;
}

class Search extends React.Component<SearchProps, SearchState> {
  readonly state: SearchState = { balance: undefined, takerAddress: '' }

  constructor(props: SearchProps) {
    super(props)
  }

  getBalance = (takerAddress: string): void => {
    console.log('submit:', takerAddress)
    const balance = web3Instance.eth.getBalance(takerAddress)
    this.setState({ balance: web3Instance.toDecimal(balance), takerAddress: takerAddress }, () => console.log(this.state.balance))
  }

  private renderResult = (): JSX.Element | null => {
    const { takerAddress, balance } = this.state
    if (takerAddress) {
      return <Result takerAddress={takerAddress} balance={balance} />
    }
    return null
  }

  render() {
    return (
      <div className="Search">
        <Form onSubmit={this.getBalance} />
        { this.renderResult() }
      </div>
    )
  }
}

export default Search
