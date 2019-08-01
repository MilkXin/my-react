import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import { Layout } from 'antd'

const { Header, Footer, Sider, Content } = Layout

@inject('Home')
@observer
class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    componentDidMount () {
        this.props.Home.showMsg()
    }

    render () {
        return (
            <Layout>
                <Header>Header</Header>
                <Layout style={{minHeight: '70vh'}}>
                    <Content>Content</Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}

export default Home