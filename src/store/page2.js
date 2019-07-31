import { observable, action } from 'mobx'

export default class page2{
    @observable msg = 'this is page2'

    @action showMsg = () => {
        console.log('msg:', this.msg)
    }
}