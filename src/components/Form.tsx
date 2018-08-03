import * as React from 'react'
import Web3 = require('web3')

const web3: any = new Web3()
const provider = new web3.providers.HttpProvider('http://localhost:8545')
web3.setProvider(provider)

export interface FormProps {
  onSubmit: (takerAddress: string) => void;
}

export interface FormState {
  takerAddress: string;
}
// onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;

class Form extends React.Component<FormProps, FormState> {
  readonly state: FormState = { takerAddress: '' }

  private onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    console.log(this.validateAddress(event.currentTarget.value))
    this.setState({ takerAddress: event.currentTarget.value}, () => console.log(this.state.takerAddress))
  }

  private onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    this.props.onSubmit(this.state.takerAddress)
  }

  // private onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
  //   event.preventDefault()
  //   this.props.onSubmit(this.state.takerAddress)
  //   try {
  //     const balance = await web3.eth.getBalance(this.state.takerAddress))
  //     console.log('BALANCE:', balance)
  //   } catch (err) {
  //     console.log(err)
  //   }
  //
  // }

  private validateAddress = (value: string): boolean => {
    return web3.isAddress(value)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Enter taker address:
          <input type="text" onChange={this.onChange} />
        </label>
        <input type="submit" value="Look Up" />
      </form>
    )
  }
}

export default Form
