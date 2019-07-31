import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

@inject('Page2')
@observer
class Page2 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.Page2.showMsg()
    }

    render() {
        return (
            <Fragment>
                <p>this is Page2</p>
            </Fragment>
        )
    }
}

export default Page2