import React from 'react';
import {Col, ListGroup, ListGroupItem} from 'react-bootstrap/lib/';

const PokeList = ({ListOfPokemon}) => {
    let pokemons = ListOfPokemon.map((pokemon) => {
        return (
            <Col xs={6} md={4} key={pokemon.name}>
                <ListGroupItem className="PokeList-item">{pokemon.name}</ListGroupItem>
            </Col>
        );
    })
    console.log("pokemonsArrrrr   ", pokemons)

    return (
        <ListGroup>
            {pokemons}
        </ListGroup>
    )
}

export default PokeList;
