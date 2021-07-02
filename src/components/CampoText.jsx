import React, { Component } from 'react'
import "./CampoText.css"

export default class CampoText extends Component { 
    render(){
        return(
            <textarea 
                className={this.props.className}
                name={this.props.name}
                rows={this.props.rows}
                cols={this.props.cols}
                value={this.props.value}
                required={this.props.required}
                onChange={this.props.onChange}
                maxLength={this.props.maxLength}
                // contentEditable={this.props.contentEditable}
            />
        )
    }
}