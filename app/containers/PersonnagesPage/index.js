/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import TextField from '@material-ui/core/TextField';

import H1 from 'components/H1';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import messages from './messages';
import TablePerso from './TablePerso';
import CardPerso from './CardPerso';

// on assigne des valeurs aux headers pour être utilisé par fetch
const myheader = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded',
});
const init = {
  method: 'GET',
  headers: myheader,
  mode: 'cors',
};

export default class PersonnagesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
      persos: [],
    };
  }

  handleChange = event => {
    // console.log('event.target.value vaut : ', event.target.value);
    this.setState({ searchName: event.target.value });
  };

  handleSearch = () => {
    this.handelCallApiPerso(this.state.searchName);
  };

  //  une fois que toute la page est chargée (ComponentDidMount), j'appelle la fonction qui fetch l'url
  componentDidMount() {
    this.handelCallApiPerso(this.state.searchName);
  }

  handelCallApiPerso = name => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=05aab7da04f7947a08afb5ee6675ebc3`;
    fetch(url, init)
      .then(response => response.json())
      .then(json => {
        const data = json;
        // console.log('data api : ', data.data.results);
        this.setState({ persos: data.data.results });
      })
      .catch(error => error) // error json mettre console.log(error) pour voir l'erreur
      .catch(error => error); // error API mettre console.log(error) pour voir l'erreur
  };

  render() {
    return (
      <div>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          value={this.state.searchName}
          onChange={this.handleChange}
        />
        <Button variant="contained" color="primary" onClick={this.handleSearch}>
          {' '}
          Rechercher{' '}
        </Button>
        <Checkbox
          // checked={checked}
          // onChange={handleChange}
          value="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        {/* on passe perso au composant enfant comme props qui est le state du composant parent  */}
        <TablePerso persos={this.state.persos} />

        {this.state.persos[0] ? (
          <CardPerso perso={this.state.persos[0]} />
        ) : (
          <div />
        )}
      </div>
    );
  }
}
