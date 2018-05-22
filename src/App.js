import React, { Component } from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import PokeList from './components/PokeList'
import {Col} from 'react-bootstrap/lib';
import MyPagination from './components/MyPagination';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonArr: [],
            activePage: 0,
            totalPages: 0,
            limit: 40,
            offset: 0,
            count: 0
        };
        this.loadPokemon = this.loadPokemon.bind(this);
        this.handlePaginationSelect = this.handlePaginationSelect.bind(this, props.baseUrl);
    }

    loadPokemon(baseUrl,limit,offset) {
        let pokeUrl = `/pokemon/?limit=${limit}&offset=${offset}`;

        fetch(`${baseUrl}${pokeUrl}`)
            .then( (res) => res.json())
            .then( (resJson) => {
                let pages = Math.round(resJson.count / this.state.limit);

                this.setState((prevState, props) => {
                    return {
                        count: resJson.count,
                        totalPages: pages,
                        pokemonArr:  resJson.results
                    }
                })
            })
            .catch( (err) => {
                console.log(`Parsing faild, ${err}`);
            });
    }

    handlePaginationSelect(baseUrl, selectedPage ) {
        console.log("selectedPage2222: ",selectedPage);
        let newOffset = this.state.limit * selectedPage.target.innerText;
        this.setState((prevState,props) => {
            return{
                offset: newOffset
            };
        });

        this.loadPokemon(`${baseUrl}`, this.state.limit, newOffset);
    }

    render() {
        console.log("SSSS   ",new PokeList({ListOfPokemon:this.state.pokemonArr}));
        return(
            <div>
                <React.StrictMode>
                    <div className="App-header">
                        <h1>Pokemon madness</h1>
                    </div>
                    <div>
                        <button onClick={ () => {this.loadPokemon(this.props.baseUrl, this.state.limit, this.state.offset)} }>fetch PokePoke</button>
                    </div>
                    <Col sm={8} md={10} smOffset={2} mdOffset={1}>
                        <PokeList ListOfPokemon={this.state.pokemonArr} />
                    </Col>
                    <Col sm={10} smOffset={1}>
                        <MyPagination
                            bsSize='small'
                            activePage={this.state.activePage}
                            pagesCount={this.state.totalPages}
                            handlePagSelect={this.handlePaginationSelect}
                        />
                    </Col>
                </React.StrictMode>
            </div>
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
