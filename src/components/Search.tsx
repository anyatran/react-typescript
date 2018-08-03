import * as React from 'react'
import { web3Instance } from './Web3Instance'
import Form from './Form'
export interface SearchProps { }

class Search extends React.Component<SearchProps, { }> {

  componentDidMount() {
    console.log('taker form props', this.props)
  }

  onSubmit = (takerAddress: string): void => {
    console.log('submit:', takerAddress)
    const balance = web3Instance.eth.getBalance(takerAddress)
    console.log(web3Instance.toDecimal(balance))
  }

  render() {
    return <Form onSubmit={this.onSubmit} />
  }
}

export default Search
