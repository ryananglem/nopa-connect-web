import React, {Component} from 'react';
import { Layout } from '../../components';
import GetStarted from '../../components/Home/GetStarted';
import ProductDetails from '../../components/Home/ProductDetails';
import {browserHistory} from 'react-router';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToChooseBankPage = this.redirectToChooseBankPage.bind(this);
  }
  redirectToChooseBankPage() {
    browserHistory.push('/choose-bank');
  }
  render() {
    return (
      <Layout title="nopa | welcome!">
        <GetStarted onGetStarted={this.redirectToChooseBankPage} />
        <ProductDetails />
      </Layout>
    );
  }
}
export default HomePage;
