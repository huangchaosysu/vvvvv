import { Component } from 'react'
import { connect } from 'dva'
import { Row, Divider, Tabs } from 'antd'
import styles from './id.css'
import classNames from 'classnames'
import { IndexBody } from '../../components/index'
import copy from 'copy-to-clipboard';

const DOWNLOAD_MAP = {
  1: "电驴下载",
  2: "磁力下载",
}

class Episodes extends Component{
  render(){
    const { data } = this.props
    return (
      <div className={styles.epblock}>
      {
        data && data.map(ep => {
          return (
            <div className={styles.eprow} key={ep.episode}>
              <Row type="flex" justify="space-between">
                <div className={styles.ib}>
                  <div className={styles.epname}><Row type="flex" justify="start"><span>{ep.episode_name}</span></Row></div>
                  {ep.files.MP4 && ep.files.MP4.map(
                    (f, idx) => {
                      if (DOWNLOAD_MAP[f.way]){
                        return (
                          <div key={idx} className={styles.epdownload_type}><a href={f.address}><span>{DOWNLOAD_MAP[f.way]}</span></a></div>
                        )
                      } else {
                        return null
                      }
                      
                    }
                  )}
                </div>
                <div className={styles.ib}>
                  {ep.files.MP4 && ep.files.MP4.map(
                    (f, idx) => {
                      if (DOWNLOAD_MAP[f.way]){
                        return (
                          <span key={idx} className={styles.epcopy_type} onClick={()=> copy(f.address) && alert("已复制到剪切板")}>
                            复制{DOWNLOAD_MAP[f.way]}
                          </span>
                        )
                      } else {
                        return null
                      }
                      
                    }
                  )}
                </div>
              </Row>
            </div>
          )
        })
      }
      </div>
    )
  }
}

class VideoDetail extends Component {
  componentDidMount(){
    const { dispatch, computedMatch } = this.props
    const vid = computedMatch.params.id
    dispatch({
      type: 'video/get_video_resources',
      payload: vid
    })
  }

  render() {
    console.log(this.props)
    const { TabPane } = Tabs
    const info = this.props.video.detail.detail
    const similars = this.props.video.detail.similar
    const ll = this.props.video.detail.list
    if (!info){
      return (<div></div>)
    }

    return (
      <div className={styles.wrapper}>
        <div>
          <Row type="flex" justify="space-between">
            <div>
              <Row type="flex" align="top">
                <img src={info.poster} alt=""></img>
                <div className={styles.blk1}>
                  <p className={classNames(styles.c1)}>{info.cnname}  {info.enname}</p>
                  <p className={styles.c1}>地区: {info.area}</p>
                  <p className={styles.c1}>语言: {info.lang}</p>
                  <p className={styles.c1}>类型: {info.category}</p>
                  <p className={styles.c1}>别名: {info.aliasname}</p>
                  <p className={styles.c1}>导演: {info.writer}</p>
                  <p className={styles.c1}>分级: {info.level.toUpperCase()}</p>
                  <p className={styles.c1}>更新: {info.play_status}</p>
                  <p className={styles.c1}>出品: {info.tvstation}</p>
                  <p className={styles.c1}>翻译: {info.zimuzu}</p>
                </div>
              </Row>
            </div>
            <div className={classNames(styles.blk1, styles.cnt)}>
              <p className={styles.c1}>影片简介:</p>
              <p className={classNames(styles.c2)}>  {info.content}</p>
            </div>
          </Row>
        </div>
        <div className={styles.recomend_wrapper}>
          <Tabs defaultActiveKey={"0"} onChange={()=> console.log(1)}>
            {
              ll && ll.map((l, idx)=> {
                return (
                  <TabPane tab={l.season_name} key={idx}>
                    <Episodes data={l.episodes}></Episodes>
                  </TabPane>
                )
              })
            }
          </Tabs>
        </div>
        <div>
          <Divider><p className={classNames(styles.c1, styles.recomend)}>相关推荐</p></Divider>
          <IndexBody videoList={similars.slice(0, 7)}></IndexBody>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { video: state.video };
}

export default connect(mapStateToProps)(VideoDetail)