import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TableRow, TableRowColumn} from 'material-ui';


export  default class RepositoryRow extends Component {

  static propTypes = {
    repo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      stargazers_count: PropTypes.number.isRequired,
      watchers_count: PropTypes.number.isRequired,
      forks: PropTypes.number.isRequired,
      open_issues: PropTypes.number.isRequired,
    }).isRequired,
  };

  render() {
    const {repo, ...rest } = this.props;
    return (
      <TableRow {...rest}>
        {rest.children[0]}
        <TableRowColumn> {repo.id} </TableRowColumn>
        <TableRowColumn> {repo.name} </TableRowColumn>
        <TableRowColumn> {repo.description} </TableRowColumn>
        <TableRowColumn> {repo.stargazers_count} </TableRowColumn>
        <TableRowColumn> {repo.watchers_count} </TableRowColumn>
        <TableRowColumn> {repo.forks} </TableRowColumn>
        <TableRowColumn> {repo.open_issues} </TableRowColumn>
      </TableRow>
    );
  }
}