import { Avatar, Divider } from 'antd'
import {GithubOutlined, QqOutlined, WechatOutlined, MailOutlined, EnvironmentOutlined} from '@ant-design/icons'

export default function Author() {

  return (
    <div className="author-info">
      <div className="author-info-header"> 
        <Avatar size={120} alt={"gulinfei"} className="author-info-avatar"/>
      </div>
      <div className="author-info-introduction">
        <div className="name">gulinfei</div>
        <div className="saying">write more code, and love life</div>
        <div className="contact">
          <div className="location">
            <EnvironmentOutlined /> GuangZhou China
          </div>
          <div className="email">
            <MailOutlined /> 1686814964@qq.com
          </div>
        </div>
      </div>
      <Divider >社交账号</Divider>
      <div className="author-info-footer">
        <Avatar size={32} icon={<GithubOutlined />} className="account" />
        <Avatar size={32} icon={<QqOutlined />} className="account" />
        <Avatar size={32} icon={<WechatOutlined />} className="account" />
      </div>
    </div>
  )
}