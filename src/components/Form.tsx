import * as React from 'react'
import { web3Instance } from './Web3Instance'

export interface FormProps {
  onSubmit: (takerAddress: string) => void;
}

export interface FormState {
  takerAddress: string;
  error: boolean;
}
// onBlur: (event: React.SyntheticEvent<HTMLInputElement>) => void;

class Form extends React.Component<FormProps, FormState> {
  readonly state: FormState = { takerAddress: '', error: false }

  private onBlur = (event: React.FormEvent<HTMLInputElement>): void => {
    console.log(this.validateAddress(event.currentTarget.value))
    this.setState({ takerAddress: event.currentTarget.value, error: !this.validateAddress(event.currentTarget.value)}, () => console.log(this.state.takerAddress))
  }

  private onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    this.props.onSubmit(this.state.takerAddress)
  }

  private validateAddress = (value: string): boolean => {
    return web3Instance.isAddress(value)
  }

  private renderError = (): any => {
    if (this.state.error) {
      return <p>invalid address</p>
    }
    return null
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Enter taker address:
          <input type="text" onBlur={this.onBlur} />
        </label>
        <input type="submit" value="Look Up" />
        { this.renderError() }
      </form>
    )
  }
}

export default Form
