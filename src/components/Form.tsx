import * as React from 'react'
import { web3Instance } from './Web3Instance'

export interface FormProps {
  onSubmit: (takerAddress: string) => void;
}

export interface FormState {
  takerAddress: string;
  error: boolean;
}

class Form extends React.Component<FormProps, FormState> {
  readonly state: FormState = { takerAddress: '', error: false }

  constructor(props: FormProps) {
    super(props)
  }

  private validateInput = (event: React.FormEvent<HTMLInputElement>): void => {
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

  private renderError = (): JSX.Element | null => {
    if (this.state.error) {
      return <p className="Form__error">invalid address</p>
    }
    return null
  }

  render() {
    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <label className="Form__label">
          Enter taker address:
          <input className="Form__input-text" type="text" onBlur={this.validateInput} />
        </label>
        <input className="Form__input-submit" type="submit" value="Look Up" />
        { this.renderError() }
      </form>
    )
  }
}

export default Form
