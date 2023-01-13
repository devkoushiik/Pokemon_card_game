import React, { Component } from "react";
import "./Pokecard.css";
// api
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

// const POKE_API = 'https: pokeapi.co/api/v2/pokemon/ditto';

// padding logic
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

export default class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>

        <div className="Pokecard-img">
          <img src={imgSrc} width="100" alt={this.props.name} />
        </div>
        <div className="Pokecard-data">
          <div>Type: {this.props.type}</div>
          <div>Exp: {this.props.exp}</div>
        </div>
      </div>
    );
  }
}
