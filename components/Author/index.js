import { Avatar, Divider, Tooltip } from 'antd'
import {GithubOutlined, QqOutlined, WechatOutlined, MailOutlined, EnvironmentOutlined} from '@ant-design/icons'

export default function Author() {

  return (
    <div className="author-info">
      <div className="author-info-header"> 
        <Avatar size={120} src="/img/author/author_avatar.jpg" alt={"gulinfei"} className="author-info-avatar"/>
      </div>
      <div className="author-info-introduction">
        <div className="name">gulinfei</div>
        <div className="saying">write more code, and love life</div>
        <div className="contact">
          <div>
            <span className="location"><EnvironmentOutlined /> GuangZhou China</span>
          </div>
          <div>
            <span className="email"><MailOutlined /> 1686814964@qq.com</span>
          </div>
        </div>
      </div>
      <Divider >社交账号</Divider>
      <div className="author-info-footer">
        <Tooltip title="Github">
          <Avatar size={32} icon={<GithubOutlined />} className="account" />
        </Tooltip >
        <Tooltip title="QQ">
          <Avatar size={32} icon={<QqOutlined />} className="account" />
        </Tooltip>
        <Tooltip title="WeChat">
          <Avatar size={32} icon={<WechatOutlined />} className="account" />
        </Tooltip>
      </div>
    </div>
  )
}
