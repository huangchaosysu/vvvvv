import service from '../utils/service'

export default {
  namespace: 'video',
  state: {
      'hot': {},
      'detail': {},
      'videos': {},
      'search': {}
  },

  effects: {
    * get_hot_videos({ payload }, { call, put }) {
      const data = yield call(service.get_hot_videos)
      yield put({type: 'updateState', "payload": {hot: data.data.data}})
    },

    * get_video_resources({ payload }, { call, put }) {
      const data = yield call(service.get_video_resources, payload)
      yield put({type: 'updateState', "payload": {detail: data.data.data}})
    },

    * get_videos({ payload }, { call, put }) {
      const data = yield call(service.get_videos, payload)

      yield put({type: 'updateState', "payload": {videos: data.data.data}})
    },

    * search_videos({ payload }, { call, put }) {
      const data = yield call(service.search_videos, payload)

      yield put({type: 'updateState', "payload": {search: data.data.data}})
    },
  },

  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};