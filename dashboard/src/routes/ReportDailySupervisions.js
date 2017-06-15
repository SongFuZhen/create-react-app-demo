import React from 'react';
import { connect } from 'dva';
import styles from './ReportDailySupervisions.css';

function ReportDailySupervisions() {
  return (
    <div className={styles.normal}>
      {/* 显示Daily Report 界面 */}
      Report  DailySupervision Charts Show
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ReportDailySupervisions);
