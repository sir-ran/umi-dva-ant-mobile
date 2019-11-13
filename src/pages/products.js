import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { router } from 'umi';
import { connect } from 'dva';
import styles from './products.css';

class Products extends Component {

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.props.dispatch({
      type: 'test/fetchData',
      payload: {
        a: 1,
        b: {
          ss: 'f'
        },
        arrs: [123,111,12]
      }
    })
  }

  render() {
    console.log('Products-test', this.props.test);
    return (
      <div>
        <div className={styles.normal}>
          <h1>Page products</h1>
          <Button type={'warning'} onClick={(e) => {
            console.log('返回', this.props, e)
            router.goBack();
          }}>返回</Button>
        </div>
      </div>
    );
  }
}

export default connect(({ test }) => ({
  test
}))(Products)
