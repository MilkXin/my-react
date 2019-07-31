import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'

@inject('Page1')
@observer
class Page1 extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.Page1.showMsg()
    }

    render() {
        return (
            <Fragment>
                <p>this is page1</p>
            </Fragment>
        )
    }
}

export default Page1