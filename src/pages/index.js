import styles from './index.css';
import { Component } from 'react'
import { connect } from 'dva'
// import { Col, Row } from 'antd'
import { IndexHeader, IndexBody } from '../components'

class Index extends Component{
  componentDidMount(){
    const { dispatch } = this.props
    dispatch({
      type: 'video/get_hot_videos'
    })
  }

  render(){
    const { hot } = this.props.video
    const { total_list, today_list, new_list, japan_list, movie_total } = hot
    let colNum = 8

    console.log(hot)

    return (
      <div className={styles.normal}>
        <IndexHeader name="今日热门"></IndexHeader>
        {today_list && <IndexBody videoList={today_list.slice(0, colNum)}></IndexBody>}
        <div className={styles.hide}>
          {today_list && today_list.length > colNum && <IndexBody videoList={today_list.colNum + 1}></IndexBody>}
        </div>

        <IndexHeader name="热门电影"></IndexHeader>
        {movie_total && <IndexBody videoList={movie_total.slice(0, colNum)}></IndexBody>}
        <div className={styles.hide}>
          {movie_total && movie_total.length > colNum && <IndexBody videoList={movie_total.slice(colNum + 1)}></IndexBody>}
        </div>

        <IndexHeader name="热门新剧"></IndexHeader>
        {new_list && <IndexBody videoList={new_list.slice(0, colNum)}></IndexBody>}
        <div className={styles.hide}>
          {new_list && new_list.length > colNum && <IndexBody videoList={new_list.slice(colNum + 1)}></IndexBody>}
        </div>

        <IndexHeader name="热门日剧"></IndexHeader>
        {japan_list && <IndexBody videoList={japan_list.slice(0, colNum)}></IndexBody>}
        <div className={styles.hide}>
          {japan_list && japan_list.length > colNum && <IndexBody videoList={japan_list.slice(colNum + 1)}></IndexBody>}
        </div>

        <IndexHeader name="热门总榜"></IndexHeader>
        {total_list && <IndexBody videoList={total_list.slice(0, colNum)}></IndexBody>}
        <div className={styles.hide}>
          {total_list && total_list.length > colNum && <IndexBody videoList={total_list.slice(colNum + 1)}></IndexBody>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { video: state.video };
}

export default connect(mapStateToProps)(Index)
