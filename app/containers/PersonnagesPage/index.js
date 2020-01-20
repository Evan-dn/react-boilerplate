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

// export default function PersonnagesPage() {

export default class PersonnagesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: '',
    };
  }

  handleChange = event => {
    console.log('event.target.value vaut : ', event.target.value);
    this.setState({ searchName: event.target.value });
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
        <Button variant="contained" color="primary">
          {' '}
          Rechercher{' '}
        </Button>
        <Checkbox
          // checked={checked}
          // onChange={handleChange}
          value="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />

        <TablePerso />
      </div>
    );
  }
}
