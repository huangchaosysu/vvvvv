import { Component } from 'react'
import { connect } from 'dva'
import { IndexBody } from '../../components/index'

class SearchList extends Component {
  state = {
    keyword: ""
  }

  componentDidMount(){
    const { dispatch } = this.props
    
    let keyword = this.props.location.query.keyword
    if (!keyword){
        keyword = "movie"
    }

    dispatch({
        type: 'video/search_videos',
        payload: keyword
    })
  }

  render() {
    console.log(this.props)
    const videos = this.props.video.search
    return (
      <div>
        {videos && <IndexBody customeJustify="start" videoList={videos}></IndexBody>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { video: state.video };
}

export default connect(mapStateToProps)(SearchList)