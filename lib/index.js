import { Component } from "react"
import extend from "extend"
import util from "util.react"
require('./index.css')
class Select extends Component {
    constructor (props) {
        super(props)
        const self = this
        this.state = {}
    }
    render() {
        const self = this
        var rootClassName = [
            self.props.prefixClassName,
            util.themes(self.props),
        ].join(' ')

        return (
            <span
                ref={(node) => { self.refsRoot = node}}
                style={self.props.style}
                className={rootClassName}
            >
            {self.props.children}
            </span>
        )
    }
}
require('./props').default(Select)
export default Select
module.exports = Select
