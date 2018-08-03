import * as React from 'react'

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
    this.setState({ takerAddress: event.currentTarget.value}, () => console.log(this.state.takerAddress))
  }

  private onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    this.props.onSubmit(this.state.takerAddress)
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
