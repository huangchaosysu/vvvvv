import request from './request'
import constants from './constants'

async function get_hot_videos(){
  return await request.get(constants.hot)
}

async function get_video_resources(payload){
  let uri  = constants.resource.replace(':id', payload)
  return await request.get(uri)
}

async function get_videos(payload){
  let uri  = constants.videos + "?"
  for (let k in payload){
    uri += "" + k + "=" + payload[k] + "&"
  }

  return await request.get(uri)
}

async function search_videos(payload){
  let uri  = constants.search.replace(':keyword', payload)

  return await request.get(uri)
}

export default {
  get_hot_videos,
  get_video_resources,
  get_videos,
  search_videos
}