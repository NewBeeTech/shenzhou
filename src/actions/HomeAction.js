

import { GET } from '../core/WS/WSHandler';
import * as URL from '../core/WS/URL';
import AsyncFetchHandler from '../core/AsyncFetchHandler';
import { message } from 'antd';

// 提交技术支持
export const LEAVE_MSG = 'LEAVE_MSG';
export const leaveMsg = (params) => (dispatch) => {
  console.log('params', params)
  const result = GET(URL.leaveMsgPath, params);
  AsyncFetchHandler(
    LEAVE_MSG,
    result,
    dispatch
  );
  result.then(data => {
    if (data.code === '200') {
       message.info('提交成功');
    } else {
      message.info(`${data.message}`);
    }
  });
};
