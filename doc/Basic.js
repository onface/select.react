var React = require('react')
var Select = require('select.react')
class Basic extends React.Component {
    render () {
        return (
            <div className="basicDemo" >
                <Select>default</Select>
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic
