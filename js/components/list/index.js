import React, {Component} from 'react';
import {repositories} from '../../mocks';
// import {List, ListItem, TextField} from 'material-ui';

import styles from './list.scss';

export default class List extends Component {
  render () {
    console.log('repos', repositories);
    return (
      <div>test</div>
    );
  }
}
