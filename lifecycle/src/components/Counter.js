import React, { Component } from 'react'

export default class Counter extends Component {
    componentDidMount(){
        console.log('componentdid mount ')
      }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.number!== this.props.number){
            console.log('componentDid update Called')
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount runs')
    }
  render() {
    return (
     <h1>{this.props.number}</h1>
    )
  }
}
