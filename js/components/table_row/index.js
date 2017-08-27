import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import PropTypes from 'prop-types';

import tr_style from './tr.scss';

export default class Tr extends Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      stargazers_count: PropTypes.number,
      watchers: PropTypes.number,
      forks: PropTypes.number,
      open_issues: PropTypes.number
    }).isRequired,
  };

  render () {
    const { item, ...otherProps } = this.props;
    return (
      <TableRow { ...otherProps }>
        {otherProps.children[0]}
        <TableRowColumn>{item.id}</TableRowColumn>
        <TableRowColumn>{item.name}</TableRowColumn>
        <TableRowColumn>{item.description}</TableRowColumn>
        <TableRowColumn>{item.stargazers_count}</TableRowColumn>
        <TableRowColumn>{item.watchers}</TableRowColumn>
        <TableRowColumn>{item.forks}</TableRowColumn>
        <TableRowColumn>{item.open_issues}</TableRowColumn>
      </TableRow>
    );
  }
}
