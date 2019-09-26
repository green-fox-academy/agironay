import React, { Component } from 'react';
import './Ninjas.css'

//building a functional component

const Ninjas = ({ ninjas, deleteNinja }) => {
  //↑ const Ninjas = (props)
  //↓ destructuring
  //const { name, age, belt } = this.props;
  //const ninjas = this.props.ninjas; is the same as below
  const ninjaList = ninjas.map(ninja => {
      if (ninja.age > 20){
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
          <button onClick={()=>{deleteNinja(ninja.id)}}>Delete ninja</button>
        </div >
      )
    } else {
      return null
    }
  })

  return (
    <div className="ninja-list">
      { ninjaList }
    </div>
  )
}

export default Ninjas
