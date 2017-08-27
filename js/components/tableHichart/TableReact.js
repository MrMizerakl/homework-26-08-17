import React, {Component} from 'react';
import {repositories} from '../../mocks';
import PropTypes from 'prop-types'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import styles from './tableStyle.scss';

class RepRaws extends Component {

    render () {
        return (
            <TableRow>
                <TableRowColumn> {this.props.item.id} </TableRowColumn>
                <TableRowColumn> {this.props.item.name} </TableRowColumn>
                <TableRowColumn> {this.props.item.description} </TableRowColumn>
            </TableRow>
        );
    }
}


export default class TableWithData extends Component {
    constructor (...args) {
        super(...args);
        console.log(repositories.items)


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
        console.log(repositories)
        return (
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>id</TableHeaderColumn>
                            <TableHeaderColumn>name</TableHeaderColumn>
                            <TableHeaderColumn>description</TableHeaderColumn>
                            <TableHeaderColumn>count</TableHeaderColumn>
                            <TableHeaderColumn>watchers</TableHeaderColumn>
                            <TableHeaderColumn>forks</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody stripedRows={true} >
                        {/*{ this.state.repositories.map(item => <RepRaws key={item.id} item={item} />) }*/}
                        {/*{ this.state.articles.map(item => <RepRaws key={item.id} item={item}  />) }*/}
                        {this.state.repositories.items.map((item, i) =>
                            <TableRow rowNumber={5} key={i} value={item}>
                                <TableRowColumn>{item.id}</TableRowColumn>
                                <TableRowColumn>{item.name}</TableRowColumn>
                                <TableRowColumn>{item.description}</TableRowColumn>
                                <TableRowColumn>{item.stargazers_count}</TableRowColumn>
                                <TableRowColumn>{item.watchers_count}</TableRowColumn>
                                <TableRowColumn>{item.forks}</TableRowColumn>



                            </TableRow>
                        )}

                    </TableBody>
                </Table>
            </div>
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




