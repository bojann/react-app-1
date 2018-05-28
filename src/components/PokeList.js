import React from 'react';
import {Col, ListGroup, ListGroupItem} from 'react-bootstrap/lib/';

const PokeList = ({ListOfPokemon, onClickShowModal}) => {
    let pokemons = ListOfPokemon.map((pokemon) => {
        return (
            <Col xs={6} md={4} key={pokemon.name}>
                <ListGroupItem className="PokeList-item" onClick={onClickShowModal}>{pokemon.name}</ListGroupItem>
            </Col>
        );
    })

    return (
        <Col sm={8} md={10} smOffset={2} mdOffset={1}>
            <ListGroup>
                {pokemons}
            </ListGroup>
        </Col>
    )
}

export default PokeList;
