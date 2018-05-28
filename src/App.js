import React, { Component } from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import PokemonIndexList from './components/PokemonIndexList';
import LoadingSpinner from "./components/LoadingSpinner";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonArr: [],
            activePage: 1,
            totalPages: 0,
            limit: 40,
            itemLimitList: [],
            activeBtn: 40,
            offset: 0,
            count: 0,
            modalShow: false
        };

        this.handleChangeLimit = this.handleChangeLimit.bind(this, props.baseUrl);
        this.loadPokemon = this.loadPokemon.bind(this);
        this.handlePaginationSelect = this.handlePaginationSelect.bind(this, props.baseUrl);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);
    }

    handleChangeLimit(baseUrl, selectedLimit) {
        console.log("handleChangeLimit: ",selectedLimit);
        let _selectedLimit = selectedLimit.target.innerText;
        if( _selectedLimit.toLowerCase() === "all" ) {
            _selectedLimit = this.state.count;
        }
        this.setState((prevState,props) => {
            return {
                limit: _selectedLimit,
                activeBtn: _selectedLimit
            }
        });
        this.loadPokemon(baseUrl, _selectedLimit, this.state.offset);
    }

    loadPokemon(baseUrl,limit,offset) {
        let pokeUrl = `/pokemon/?limit=${limit}&offset=${offset}`;
        this.setState({
            spinner: true
        });

        fetch(`${baseUrl}${pokeUrl}`)
            .then( (res) => res.json())
            .then( (resJson) => {
                let pages = Math.round(resJson.count / this.state.limit);

                this.setState((prevState, props) => {
                    return {
                        count: resJson.count,
                        totalPages: pages,
                        pokemonArr:  resJson.results,
                        itemLimitList: [10,40,100,200,"All"],
                        spinner: false
                    }
                });
            })
            .catch( (err) => {
                console.log(`Parsing faild, ${err}`);
            });
    }

    handlePaginationSelect(baseUrl, selectedPage ) {
        console.log("selectedPage2222: ",selectedPage);
        let numSelectedPage = selectedPage.target.innerText;
        let newOffset = this.state.limit * numSelectedPage;
        this.setState((prevState,props) => {
            return{
                offset: newOffset,
                activePage: +numSelectedPage
            };
        });

        this.loadPokemon(baseUrl, this.state.limit, newOffset);
    }

    handleShowModal(ev) {
        console.log("handleShowModal   ", ev);
        this.setState((prevState,props) => {
            return{
                modalShow: true
            }
        });
    }

    handleHideModal(ev) {
        console.log("handleHideModal   ", ev);
        this.setState((prevState,props) => {
            return{
                 modalShow: false
             }
        });
    }


    render() {
        return(
            <React.StrictMode>
                <div className="App-header">
                    <h1>Pokemon madness</h1>
                </div>
                <div>
                    <button onClick={ () => {this.loadPokemon(this.props.baseUrl, this.state.limit, this.state.offset)} }>fetch PokePoke</button>
                </div>
                <LoadingSpinner
                    type={this.state.spinner ? 'spinningBubbles' : 'blank'}
                    color={'#806f00'} />

                <PokemonIndexList
                    bsStyle={"success"}
                    activeBtn={this.state.activeBtn}
                    onclickChangeLimit={this.handleChangeLimit}
                    pageItemsLimit={this.state.itemLimitList}
                    pokemonData={this.state.pokemonArr}
                    bsSize='small'
                    activePage={this.state.activePage}
                    pagesCount={this.state.totalPages}
                    handlePagSelect={this.handlePaginationSelect}
                    onClickShowModal={this.handleShowModal}
                    modalShow={this.state.modalShow}
                    onClickHideModal={this.handleHideModal} />

            </React.StrictMode>
        );
    }

}

export default App;



// class App extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {messsage: props.name};
//     this.handleChange = this.handleChange.bind(this);
//     this.resetMsg = this.resetMsg.bind(this);
//   }
//
//   handleChange(ev) {
//     this.setState({
//         messsage: ev.target.value
//     })
//   }
//
//   resetMsg(ev) {
//     this.setState({
//         messsage: ''
//     })
//   }
//
//   render() {
//     console.log(this);
//     return (
//       <div className='App'>
//         <header className='App-header'>
//           <img src={logo} className='App-logo' alt='logo' />
//           <h1 className='App-title'>Welcome to React, {this.props.name} from {this.props.location}</h1>
//           <p><input type='text' onChange={this.handleChange}/> I am in state of: {this.state.messsage}</p>
//           <button onClick={this.resetMsg}>Reset</button>
//         </header>
//         <p className='App-intro'>
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// App.propTypes = {
//   name: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired
// };
//
// App.defaultProps = {
//   name: 'Leon',
//   location: 'Babilon'
// };
