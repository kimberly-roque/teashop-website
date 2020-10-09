import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: {
          productId: params
        }
      }
    });
  }

  render() {
    const viewType = this.state.view.name;
    if (viewType === 'catalog') {
      return (
        <div>
          <Header/>
          <ProductList setview = {this.setView}/>
        </div>
      );
    } else if (viewType === 'details') {
      return (
        <div>
          <Header/>
        </div>
      );
    }

  }
}
