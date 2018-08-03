import * as React from 'react'

interface CounterProps { }

// 'CounterProps' describes the shape of props.
// State is  set so we use the '{ count: number }' type.
class Counter extends React.Component<CounterProps, { count: number }> {
  interval: number;

  constructor(props : any) {
    super(props)
    this.state = { count: 0 }
  }

  componentDidMount() {
    this.interval = window.setInterval(
      () => this.setState(prevState => ({ count: prevState.count + 1 })),
      200,
    )
  }

  generateString1() {
    // you can update this method, and it will work
    return "1";
  }

  generateString2 = ()  => {
    // this one will not
    return "1";
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return <span>{this.state.count} - {this.generateString1()} - {this.generateString2()}</span>
  }
}

export default Counter
