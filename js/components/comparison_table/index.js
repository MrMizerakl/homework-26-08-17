import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import compare_table_style from './table.scss';

import Tr from '../table_row';

export default class ComparisonTable extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      selectable: true,
      multiSelectable: true,
      showRowHover: true
    }
  }
  
  render () {
    return (
      <Table 
        selectable={this.state.selectable} 
        multiSelectable={this.state.multiSelectable}
        showRowHover={this.state.showRowHover}
      >
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>id</TableHeaderColumn>
            <TableHeaderColumn>name</TableHeaderColumn>
            <TableHeaderColumn>description</TableHeaderColumn>
            <TableHeaderColumn>stargazers_count</TableHeaderColumn>
            <TableHeaderColumn>watchers</TableHeaderColumn>
            <TableHeaderColumn>forks</TableHeaderColumn>
            <TableHeaderColumn>open_issues</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          { this.props.repos.items.map( repo => { return <Tr key={repo.id} item={repo} /> } )}
        </TableBody>
      </Table>
    );
  }
}
