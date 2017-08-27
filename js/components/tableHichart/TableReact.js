import React, {Component} from 'react';
import {repositories} from '../../mocks';
import PropTypes from 'prop-types'
import {List, ListItem, TextField} from 'material-ui';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
// import CheckAuthorization from '../../hoc/check-authorization';

import styles from './tableStyle.scss';

class Rtable extends Component {

  render () {
    return (
      <TableRowColumn className={styles.article}>
        <div>{this.props.item.id}</div>
        <div>{this.props.item.name}</div>
        <div>{this.props.item.description}</div>
      </TableRowColumn>
    );
  }
}

class Articles extends Component {

  render () {
    return (
      <h1>TBD</h1>
    );
  }
}

export default class TableExampleControlled extends Component {
    state = {
        selected: [1],
    };

    isSelected = (index) => {
        return this.state.selected.indexOf(index) !== -1;
    };

    handleRowSelection = (selectedRows) => {
        this.setState({
            selected: selectedRows,
        });
    };

    render() {
        return (
            <Table onRowSelection={this.handleRowSelection}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow selected={this.isSelected(0)}>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow selected={this.isSelected(1)}>
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                    </TableRow>
                    <TableRow selected={this.isSelected(2)}>
                        <TableRowColumn>3</TableRowColumn>
                        <TableRowColumn>Stephanie Sanders</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                    <TableRow selected={this.isSelected(3)}>
                        <TableRowColumn>4</TableRowColumn>
                        <TableRowColumn>Steve Brown</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}


const TableHeaderContents = () => (
        <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>stargazers_count</TableHeaderColumn>
            <TableHeaderColumn>watchers</TableHeaderColumn>
            <TableHeaderColumn>folks</TableHeaderColumn>
        </TableRow>


        );

const TableContents = () => (
    <Table>
            <TableHeaderContents/>
        <TableBody>
            <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn>Steve Brown</TableRowColumn>
                <TableRowColumn>
                    ableRowColumn>Employed</TableRowColumn>
            </TableRow>
            <TableRow>
                <TableRowColumn>5</TableRowColumn>
                <TableRowColumn>Christopher Nolan</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
            </TableRow>
        </TableBody>
    </Table>
);



export default TableExampleControlled;
