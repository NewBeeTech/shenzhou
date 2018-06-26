/**
 * Happy Hacking
 * Created by leiyouwho on 3/5/2016.
 */

import * as FetchState from './FetchState';

const AsyncFetchHandler = (
  actionName: string,
  fetchResultPromise: Promise,
  dispatch: Function,
  sideEffect = (data) => data,
) => {
  dispatch({
    type: FetchState.REQUEST(actionName),
  });
  fetchResultPromise
    .then(data => {
      if (data.code === '200') {
        dispatch({
          type: FetchState.SUCCESS(actionName),
          data: sideEffect(data.data),
        });
      }else {
        // NotificationCenter.NotificationCard(
        //   `${actionName}请求失败`,
        //   `错误信息: ${JSON.stringify(data.message)}`,
        //   'error',
        //   2,
        // );
        dispatch({
          type: FetchState.FAILURE(actionName),
          errMsg: data.message,
        });
      }
    })
    .catch(err => {
      console.warn(err);
      dispatch({
        type: FetchState.FAILURE(actionName),
        errMsg: err.message,
      });
    });
};

export default AsyncFetchHandler;
