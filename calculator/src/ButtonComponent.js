import React from 'react'

class ButtonComponent extends React.Component{

    constructor(props){
        super(props);
        this.buttonName = "!missing button!";
    }

    render() {
        return (

                <button type="submit"
                    name={this.props.buttonName}
                    /*onClick={e => this.props.onClick(e.target.name)}*/>
                    {this.props.buttonName}
                    </button>

        )
    }
}

export default ButtonComponent;