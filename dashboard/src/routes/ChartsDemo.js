import React from 'react';
import { connect } from 'dva';
import styles from './ChartsDemo.css';
import ChartDemo from '../components/ChartsDemo/ChartsDemo'

function ChartsDemo() {
  return (
    <div className={styles.normal}>
      < ChartDemo />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ChartsDemo);
