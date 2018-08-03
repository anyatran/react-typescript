import * as React from 'react'
import Form from './Form'
export interface SearchProps { }

class Search extends React.Component<SearchProps, { }> {

  componentDidMount() {
    console.log('taker form props', this.props)
  }

  onSubmit = (takerAddress: string): void => {
    console.log('submit:', takerAddress)
  }

  render() {
    return <Form onSubmit={this.onSubmit} />
  }
}

export default Search
