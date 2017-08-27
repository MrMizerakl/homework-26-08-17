import React, {Component} from 'react';
// import {repositories} from '../../mocks';
// import {List, ListItem, TextField} from 'material-ui';

import List from '../list';

import styles from './statistics.scss';

export default class Statistics extends Component {
  render () {
    return (
      <List />
    );
  }
}

// export default class Articles extends Component {
//   constructor (...args) {
//     super(...args);

//     this.state = {
//       articles,
//       title: '',
//       text: ''
//     };

//     this.onInputChanged = this.onInputChanged.bind(this);
//     this.addArticle = this.addArticle.bind(this);
//   }

//   deleteArticle (id) {
//     return () => {
//       const articles = this.state.articles.filter(item => item.id !== id);

//       this.setState({articles});
//     }
//   }

//   addArticle (e) {
//     e.preventDefault();
//     const {title, text} = this.state;
//     const article = {
//       id: Date.now(),
//       text,
//       title,
//       date: new Date().toString()
//     };

//     this.setState({articles: [article, ...this.state.articles]})
//   }

//   onInputChanged (e) {
//     const field = e.target.name;
//     const {value} = e.target;

//     this.setState({[field]: value});
//   }

//   render () {
//     return (
//       <div>
//         <form onSubmit={this.addArticle}>
//           <h2>Create article</h2>
//           <div>
//             <TextField className={styles['parent-size']}
//                        fullWidth={true}
//                        value={this.state.title}
//                        name="title"
//                        onChange={this.onInputChanged}
//                        placeholder="title"
//                        type="text"/>
//           </div>
//           <div>
//             <TextField className={styles['parent-size']}
//                        fullWidth={true}
//                        value={this.state.text}
//                        name="text"
//                        onChange={this.onInputChanged}
//                        placeholder="text" />
//           </div>
//           <input value="Create article" type="submit"/>
//         </form>
//         <List>
//           { this.state.articles.map(item => <Article key={item.id} item={item} deleteItem={this.deleteArticle(item.id)} />) }
//         </List>
//       </div>
//     );
//   }
// }
