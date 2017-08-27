import React, {Component} from 'react';
import {repositories} from '../../mocks';
import PropTypes from 'prop-types'
import {Table, TableBody, TableHeader, TableRow, TableHeaderColumn, TableRowColumn} from 'material-ui';


class Repo extends Component {

  render () {
    return (
      <TableRow>
        <TableRowColumn> {this.props.item.id} </TableRowColumn>
        <TableRowColumn> {this.props.item.name} </TableRowColumn>
        <TableRowColumn> {this.props.item.description} </TableRowColumn>
        <TableRowColumn> {this.props.item.stargazers_count} </TableRowColumn>
        <TableRowColumn> {this.props.item.watchers_count} </TableRowColumn>
        <TableRowColumn> {this.props.item.forks} </TableRowColumn>
        <TableRowColumn> {this.props.item.open_issues} </TableRowColumn>
      </TableRow>
    );
  }
}

export default class Repositories extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      repositories,
      id: '',
      name: '',
      description: '',
      stargazers_count: '',
      watchers_count: '',
      forks: '',
      open_issues: '',
      displayRowCheckboxes: true
    };
  }

  render () {
    return (
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Id</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Count</TableHeaderColumn>
              <TableHeaderColumn>Watchers</TableHeaderColumn>
              <TableHeaderColumn>Forks</TableHeaderColumn>
              <TableHeaderColumn>Open issues</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true} displayRowCheckbox={this.state.displayRowCheckboxes}>
              { this.state.repositories.map(item => <Repo key={item.id} item={item} />) }
          </TableBody>
        </Table>
      </div>
    );
  }
}
