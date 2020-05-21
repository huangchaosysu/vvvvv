import styles from './index.css'
import React from 'react'
import { Breadcrumb, Layout, Input, Row } from 'antd'
import classNames from 'classnames'

class MyLayout extends React.Component{
  render(){
    const { Header, Footer, Content } = Layout;

    const { Search } = Input
    return (
      <div className={styles.bg}>
        <Row type="flex" justify="center">
          <Layout className={styles.normal}>
            <Header className={classNames(styles.header, styles.block_color)}>
              <Row type="flex" align="middle" >
                <div className={styles.logo}></div>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <a href="/">首页</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <a href="/videos/?channel=movie">电影</a>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <a href="/videos/?channel=tv">剧集</a>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div className={styles.hsearch}>
                  <Search onSearch={()=> console.log('search')}/>
                </div>
              </Row>
            </Header>
            <Content className={classNames(styles.content, styles.block_color)}>
              {this.props.children}
            </Content>
            <Footer className={classNames(styles.footer, styles.block_color)}>
              this is Footer
            </Footer>
          </Layout>
        </Row>
      </div>
    )
  }
}

export default MyLayout;
