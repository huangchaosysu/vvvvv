import { Component } from 'react'
import { connect } from 'dva'
import { IndexBody } from '../../components/index'
import { Pagination } from 'antd'

class VideoList extends Component {
  state = {
    channel: "movie",
    page: 1,
    size: 24
  }

  componentDidMount(){
    let channel = this.props.location.query.channel
    if (!channel){
      channel = "movie"
    }
    this.changePage(channel,1)
  }

  changePage(channel, page){
    const { dispatch } = this.props
    dispatch({
      type: 'video/get_videos',
      payload: {
        channel: channel,
        page: page,
        size: this.state.size
      }
    })

    this.setState({
      channel,
      page
    })
  }

  render() {
    const videos = this.props.video.videos
    return (
      <div>
        {videos.list && <IndexBody videoList={videos.list.slice(0, 8)}></IndexBody>}
        {videos.list && videos.list.length > 8 && <IndexBody videoList={videos.list.slice(8, 16)}></IndexBody>}
        {videos.list && videos.list.length > 16 && <IndexBody videoList={videos.list.slice(16, 24)}></IndexBody>}
        <div>
          <Pagination 
            current={this.state.page} 
            pageSize={this.state.size} 
            total={Number(videos.count)}
            onChange={(page, pageSize) => {this.changePage(this.state.channel, page)}}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { video: state.video };
}

export default connect(mapStateToProps)(VideoList)