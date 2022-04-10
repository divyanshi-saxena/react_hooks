import React, { Component } from 'react'
import { CounterContext } from './CounterContext'

export class CComponent extends Component {
  render() {
    return (
      <div style={{border: "1px solid #000"}}>
        <h1>Class Component</h1>
        <CounterContext.Consumer>
          {value => {
            return <h2>{value}</h2>
          }}
        </CounterContext.Consumer>
        <hr />
      </div>
    )
  }
}

export default CComponent