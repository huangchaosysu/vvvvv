import { Component } from 'react'
import styles from './index.css'
import { Row } from 'antd'
import VideoItem from './videoItem'

export class IndexHeader extends Component {
  render() {
    const { name } = this.props
    return (
      <div className={styles.vheader}>
        <Row type="flex" justify={"start"}>
          <span>{name}</span>
        </Row>
      </div>
    )
  }
}

export class IndexBody extends Component {
  render() {
    const { videoList, customeJustify } = this.props
    return (
      <div className={styles.vbody}>
        <Row type="flex" justify={customeJustify? customeJustify: "space-between"}>
        {
          videoList && videoList.map(vi => {
            return <VideoItem name={vi.cnname} poster={vi.poster} key={vi.id} id={vi.id}/>
          })
        }
        </Row>
      </div>
    )
  }
}

export default {
  IndexHeader,
  IndexBody
}