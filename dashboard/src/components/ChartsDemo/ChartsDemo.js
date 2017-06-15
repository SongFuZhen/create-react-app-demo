import React from 'react';
import styles from './ChartsDemo.css';
require('../ThirdPart/mui/css/mui.css')

function ChartsDemo() {
  return (
    <div className={styles.normal}>
      <div className="mui-content">
      <button type="button" class="mui-btn mui-btn-success">绿色</button>
      <button type="button" class="mui-btn mui-btn-warning">黄色</button>

        <div className="mui-card">
            <div className='mui-card-header'>
              省份
            </div>
            <div className="mui-card-content">
              <div id='province_charts'>
                图表展示
              </div>
            </div>
          	<div className="mui-card-footer">页脚</div>
        </div>
      </div>
    </div>
  );
}

export default ChartsDemo;
