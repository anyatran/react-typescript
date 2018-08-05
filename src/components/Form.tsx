import * as React from 'react'
import { ethService } from '../utils/EthService'

export interface FormProps {
  onSubmit: (takerAddress: string) => void;
}

export interface FormState {
  error: boolean;
  takerAddress: string | undefined;
}
/**
 * @class
 * @classdesc Class for a Form
 */
class Form extends React.Component<FormProps, FormState> {
  readonly state: FormState = { error: false, takerAddress: undefined }
  private readonly inputRef: React.RefObject<HTMLInputElement> = React.createRef()

  constructor(props: FormProps) {
    super(props)
  }

  /**
   * look up the balance
   * @private
   * @return {void} calls parent's handler function if there are not errors and
   * taker address exits
   */
  private lookUp = (): void => {
    const { error, takerAddress } = this.state
    if (!error && takerAddress) {
      this.props.onSubmit(takerAddress)
    }
  }

  /**
   * validates input format
   * @private
   * @param {string} value - input value
   * @return {Promise<void>} Promise that sets the state
   */
  private validateInput = async (value: string): Promise<void> => {
    if (value.trim()) {
      await this.setState({
        takerAddress: value.trim(),
        error: !ethService.validateAddress(value)
      })
    } else if (this.state.error) {
      await this.setState({ takerAddress: undefined, error: false })
    }
  }

  /**
   * handles onBlur event
   * @private
   * @param {React.FormEvent<HTMLInputElement>} event
   * @return {Promise<void>} Promise that calls validateInput function
   */
  private onBlur = async (event: React.FormEvent<HTMLInputElement>): Promise<void> => {
    await this.validateInput(event.currentTarget.value)
  }

  /**
   * passes the value to parent component
   * @private
   * @param {React.FormEvent<HTMLFormElement>} event
   * @return {Promise<void>} promise that calls parent's onSubmit hanlder function
   */
  private onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    await this.validateInput(this.inputRef.current!.value)
    this.lookUp()
  }

  /**
   * render error message if it exists
   * @private
   * @return {JSX Element | null} - JSX Element if there is an error to render
   */
  private renderError = (): JSX.Element | null => {
    if (this.state.error) {
      return <p className="Form__error">Invalid address</p>
    }
    return null
  }

  render() {
    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <label className="Form__label">
          Enter taker address:
          <input
            ref={this.inputRef}
            className="Form__input-text"
            type="text"
            onBlur={this.onBlur}
          />
        </label>
        <input className="Form__input-submit" type="submit" value="Look Up" />
        { this.renderError() }
      </form>
    )
  }
}

export default Form
