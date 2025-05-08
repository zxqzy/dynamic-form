import { Layout as ADLayout } from 'antd'
import classes from './index.module.css'

const { Header, Sider, Content } = ADLayout

export default function Layout() {
  return (
    <ADLayout className={classes.layoutOuter}>
      <Header className={classes.header}>dm-form</Header>
      <ADLayout>
        <Sider width="25%" className={classes.leftSider}>
          Sider
        </Sider>
        <Content>Content</Content>
        <Sider width="25%" className={classes.rightSider}>
          Sider
        </Sider>
      </ADLayout>
    </ADLayout>
  )
}