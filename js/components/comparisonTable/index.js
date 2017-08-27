import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Table, {
  TableBody,
  TableRowColumn,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';

import {repositories} from '../../mocks';

import styles from './list.scss';


export default class ComparisonTable extends Component {

  constructor (...args) {
    super(...args);

    this.state = {
      repositories
    };
  }

  render () {
    return (
      <Table multiSelectable={ true }  >
        <TableHeader displaySelectAll={ false }>

          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>Stargazers count</TableHeaderColumn>
            <TableHeaderColumn>watchers</TableHeaderColumn>
            <TableHeaderColumn>forks</TableHeaderColumn>
            <TableHeaderColumn>open_issues</TableHeaderColumn>
          </TableRow>

        </TableHeader>

        <TableBody
          displayRowCheckbox={ true }>
          {
            repositories.items.map(
              ( item, index ) => {
                if ( index >= 5 ) return;

                return <Row key={ item.id } item={ item }/>
              }
          )}
        </TableBody>
      </Table>
    )};
}

class Row extends Component {
  render () {
    const { item, ...other } = this.props;

    return (
      <TableRow {...other}>
        {this.props.children[0]}
        <TableRowColumn>{ item.id }</TableRowColumn>
        <TableRowColumn>{ item.name }</TableRowColumn>
        <TableRowColumn>{ item.description }</TableRowColumn>
        <TableRowColumn>{ item.stargazers_count }</TableRowColumn>
        <TableRowColumn>{ item.watchers }</TableRowColumn>
        <TableRowColumn>{ item.forks }</TableRowColumn>
        <TableRowColumn>{ item.open_issues }</TableRowColumn>
      </TableRow>
    )};
}


