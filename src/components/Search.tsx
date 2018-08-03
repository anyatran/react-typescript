import * as React from 'react'
import Web3 = require('web3')
import Form from './Form'

const web3: any = new Web3()
const provider = new web3.providers.HttpProvider('http://localhost:8545')
web3.setProvider(provider)

export interface SearchProps { }

class Search extends React.Component<SearchProps, { }> {

  componentDidMount() {
    console.log('taker form props', this.props)
  }

  onSubmit = (takerAddress: string): void => {
    console.log('submit:', takerAddress)
    const balance = web3.eth.getBalance(takerAddress)
    console.log(web3.toDecimal(balance))
  }

  render() {
    return <Form onSubmit={this.onSubmit} />
  }
}

export default Search
