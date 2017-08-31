import { h, Component } from 'preact';
import { bind } from 'decko';

import Header from './header/header';
import Item from './item/item';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ['👋', 'Hello', 'World!'],
    };
  }

  @bind
  handleClick(e) {
    console.log(...this.state.list);
  }

  render({}, { list }) {
    return (
      <div id="app">
        <Header title="RxHN">
          <a onClick={this.handleClick}>Click</a>
        </Header>
        <ul class="list">{list.map(item => <Item text={item} />)}</ul>
      </div>
    );
  }
}
