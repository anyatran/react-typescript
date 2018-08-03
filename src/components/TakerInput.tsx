/**
* Build a taker address input component that will be used to specify a “taker” when generating an 0x order.

It should have the following features:

* It should allow the parent component to specify a takerToken for which the component will fetch a balance and display it to the user. This will allow the order maker to check if the taker already has the requisite balance to perform the trade.
* It should have a callback function that allows the component's parent to receive the inputted address.
*  It should allow the user to input any arbitrary text into the input field and show them error messages in real-time if the input is an invalid Ethereum address.
* ENS support
    * Resolves a supplied ENS name to Ethereum address and displays it to the user.
    * Displays an ENS name if the supplied address has been registered with an ENS name.
**/
import * as React from 'react'
export interface TakerInputProps {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}
// onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
enum EventType { Mouse, Keyboard }
class TakerInput extends React.Component<TakerInputProps, { }> {

  // constructor(props: any) {
  //   super(props)
  // }

  componentDidMount() {
    console.log('taker input', this.props.onChange)
  }

  render() {
    return <input type="text" onChange={this.props.onChange} />
  }
}

export default TakerInput
