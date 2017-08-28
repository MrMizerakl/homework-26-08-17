import React, {Component} from 'react';
import {repositories} from '../../mocks';
import {Table, TableBody, TableHeader, TableRow, TableHeaderColumn} from 'material-ui';
import RepositoryRow from '../row/row.component.js';

export default class Repositories extends Component {

  _getRepos() {
    const itemsCount = 5;

    return repositories.slice(0, itemsCount).map((repo, index) => {
      return(<RepositoryRow repo={repo} key={index} />)
    })}


  render () {
    const repos = this._getRepos() || [];

    return (
      <div>
        <Table multiSelectable={true}>
          <TableHeader enableSelectAll={true}>
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
          <TableBody multiSelectable={true} showRowHover={true} stripedRows={true} >
            {repos}
          </TableBody>
        </Table>
      </div>
    );
  }
}
