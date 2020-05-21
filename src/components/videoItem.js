import { Component } from 'react'
import styles from './videoItem.css'
import { Row } from 'antd'

class VideoItem extends Component {
  render() {
    const { poster, name, id } = this.props
    return (
      <div className={styles.video_item}>
        <Row type="flex" justify="center">
          <a href={"/videos/" + id}><img src={poster} className={styles.img} alt={name}></img></a>
        </Row>
        <Row type="flex" justify="center">
          <p className={styles.viname}>{name}</p>
        </Row>
      </div>
    )
  }
}

export default VideoItem