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

// class RepRaws extends Component {
//     static propTypes = {
//         value: PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired,
//             stargazers_count: PropTypes.string.isRequired,
//             watchers_count: PropTypes.string.isRequired,
//             forks: PropTypes.string.isRequired,
//             open_issues: PropTypes.string.isRequired,
//
//         }).isRequired,
//         deleteItem: PropTypes.func
//     };
//
//     render () {
//         return (
//             <TableRow key ={this.props.i} value={this.props.item}>
//                 <TableRowColumn> {this.props.value.id} </TableRowColumn>
//                 <TableRowColumn> {this.props.value.name} </TableRowColumn>
//                 <TableRowColumn> {this.props.value.description} </TableRowColumn>
//                 <TableRowColumn>{this.props.value.stargazers_count}</TableRowColumn>
//                 <TableRowColumn>{this.props.value.watchers_count}</TableRowColumn>
//                 <TableRowColumn>{this.props.value.forks}</TableRowColumn>
//                 <TableRowColumn>{this.props.value.open_issues}</TableRowColumn>
//             </TableRow>
//         );
//     }
// }


export default class TableWithData extends Component {
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
            open_issues: ''
        };
    }
    render () {
        return (
            <div>
                <Table multiSelectable={true}>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>id</TableHeaderColumn>
                            <TableHeaderColumn>name</TableHeaderColumn>
                            <TableHeaderColumn>description</TableHeaderColumn>
                            <TableHeaderColumn>count</TableHeaderColumn>
                            <TableHeaderColumn>watchers</TableHeaderColumn>
                            <TableHeaderColumn>forks</TableHeaderColumn>
                            <TableHeaderColumn>open_issues</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody stripedRows={true}>
                        {/*{ this.state.repositories.items.map((item,i) => {if (i<5) return( <RepRaws key={i} value={item} />) })}*/}
                        {/*{ this.state.repositories.items.map(item => <RepRaws key={item.id} value={item}  />) }*/}
                        {this.state.repositories.items.map((item, i) =>
                        {if (i<5) return(
                            <TableRow key={i} value={item}>
                                <TableRowColumn>{item.id}</TableRowColumn>
                                <TableRowColumn>{item.name}</TableRowColumn>
                                <TableRowColumn>{item.description}</TableRowColumn>
                                <TableRowColumn>{item.stargazers_count}</TableRowColumn>
                                <TableRowColumn>{item.watchers_count}</TableRowColumn>
                                <TableRowColumn>{item.forks}</TableRowColumn>
                                <TableRowColumn>{item.open_issues}</TableRowColumn>

                            </TableRow>

                        )}
                        )}

                    </TableBody>
                </Table>
            </div>
        );
    }
}


// const TableHeaderContents = () => (
//         <TableRow>
//             <TableHeaderColumn>ID</TableHeaderColumn>
//             <TableHeaderColumn>Name</TableHeaderColumn>
//             <TableHeaderColumn>Description</TableHeaderColumn>
//             <TableHeaderColumn>stargazers_count</TableHeaderColumn>
//             <TableHeaderColumn>watchers</TableHeaderColumn>
//             <TableHeaderColumn>folks</TableHeaderColumn>
//         </TableRow>
//
//
//         );




