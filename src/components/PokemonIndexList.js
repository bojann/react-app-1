import React from 'react';
import MyPagination from './MyPagination';
import PokeList from './PokeList';
import PokeListSetLimitButtons from './setItemsLimitationButtons';
import PokeModalBox from './pokemonModalBox';

const PokemonIndexList = ({
    bsStyle,
    activeBtn,
    onclickChangeLimit,
    pageItemsLimit,
    pokemonData,
    bsSize,
    activePage,
    pagesCount,
    handlePagSelect,
    onClickShowModal,
    modalShow,
    onClickHideModal}) => {

    return(
        <div>
            <PokeListSetLimitButtons
                bsStyle={bsStyle}
                activeBtn={activeBtn}
                onclickChangeLimit={onclickChangeLimit}
                pageItemsLimit={pageItemsLimit} />

            <PokeList
                ListOfPokemon={pokemonData}
                onClickShowModal={onClickShowModal} />

            <PokeModalBox
                modalShow={modalShow}
                handleHideModal={onClickHideModal}/>

            <MyPagination
                bsSize='small'
                activePage={activePage}
                pagesCount={pagesCount}
                handlePagSelect={handlePagSelect} />
        </div>
    );
}

export default PokemonIndexList;
