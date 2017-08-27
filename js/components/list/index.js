import React, {Component} from 'react';
import {articles} from '../../mocks';
// import PropTypes from 'prop-types'
// import {List, ListItem, TextField} from 'material-ui';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

// import styles from './list.scss';

class Repo extends Component {


  render () {
    return (
        <TableRow>
          <TableRowColumn>{this.props.item.id}</TableRowColumn>
          <TableRowColumn>{this.props.item.date}</TableRowColumn>
          <TableRowColumn>{this.props.item.title}</TableRowColumn>
        </TableRow>
    );
  }
};

export default class Articles extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      articles
    };

    // this.onInputChanged = this.onInputChanged.bind(this);
    // this.addArticle = this.addArticle.bind(this);
  }



  // addArticle (e) {
  //   e.preventDefault();
  //   const {title, text} = this.state;
  //   const article = {
  //     id: Date.now(),
  //     text,
  //     title,
  //     date: new Date().toString()
  //   };
  //
  //   this.setState({articles: [article, ...this.state.articles]})
  // }

  // onInputChanged (e) {
  //   const field = e.target.name;
  //   const {value} = e.target;
  //
  //   this.setState({[field]: value});
  // }

  render () {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableRow>
            {this.state.articles.map(item => <Repo item={item}/>)}
        </TableRow>
      </Table>

    )
    // return (
    //
    //     <List>
    //       { this.state.reposetories.map(item => <Repo key={item.id} item={item} deleteItem={this.deleteArticle(item.id)} />) }
    //     </List>
    //
    // );
  }
}
