// import * as React from 'react'
//
// export interface AddressInputProps {
//   onChange: (event: React.FormEvent<HTMLInputElement>) => void;
// }
//
// export interface AddressInputState {
//   takerAddress: string;
// }
// // onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
//
// class AddressInput extends React.Component<AddressInputProps, AddressInputState> {
//   readonly state: AddressInputState = { takerAddress: '' }
//
//   private onChange = (event: React.FormEvent<HTMLInputElement>): void => {
//     this.setState({ takerAddress: event.currentTarget.value}, () => console.log(this.state.takerAddress))
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.onSubmit}>
//         <label>
//           Enter taker address:
//           <input type="text" onChange={this.onChange} />
//         </label>
//         <input type="submit" value="Look Up" />
//       </form>
//     )
//   }
// }
//
// export default AddressInput
