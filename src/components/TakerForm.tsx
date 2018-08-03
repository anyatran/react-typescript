import * as React from 'react'
import TakerInput from './TakerInput'
export interface TakerFormProps { }

class TakerForm extends React.Component<TakerFormProps, { }> {

  // constructor(props: any) {
  //   super(props);
  // }

  componentDidMount() {
    console.log('taker form props', this.props)
  }

  onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    console.log(event)
  }

  render() {
    return <TakerInput onChange={this.onChange} />
  }
}

export default TakerForm
