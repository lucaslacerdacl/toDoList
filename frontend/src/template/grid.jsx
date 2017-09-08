import React, {Component} from 'react'

export default class Grid extends Component {
    render() {
        const gridClasses = this.cssToClass(this.props.columns || 12)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }

    cssToClass(numbers) {
        const columns = numbers ? numbers.split(" ") : []
        let classes = ""
        if(columns[0]) classes += `col-xs-${columns[0]}`
        if(columns[1]) classes += ` col-sm-${columns[1]}`
        if(columns[2]) classes += ` col-md-${columns[2]}`
        if(columns[3]) classes += ` col-lg-${columns[3]}`
        return classes
    }
}