import React, { Component } from 'react';

//building a functional component

const Ninjas = ({ ninjas }) => {
  //↑ const Ninjas = (props)
  //↓ destructuring
  //const { name, age, belt } = this.props;
  //const ninjas = this.props.ninjas; is the same as below
  //const ninjaList = ninjas.map(ninja => {
  /*     if (ninja.age > 20){
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
        </div >
      )
    } else {
      return null
    } */
  /*     const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
          <div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
          </div >
        ) : null;
      }) */
  //})
  return (
    <div className="ninja-list">
      {
        ninjas.map(ninja => {
          return ninja.age > 20 ? (
            <div className="ninja" key={ninja.id}>
              <div>Name: {ninja.name}</div>
              <div>Age: {ninja.age}</div>
              <div>Belt: {ninja.belt}</div>
            </div>
          ) : null;
        })

      }
    </div>
  );
}

export default Ninjas
