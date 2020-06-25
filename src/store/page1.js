import { observable, action } from 'mobx'

export default class page1 {
    @observable msg = 'this is page1'

    @action showMsg = () => {
        console.log('msg:', this.msg)
    }
}