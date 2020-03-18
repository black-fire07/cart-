import React, {component, Component} from 'react';

class Clunter extends Component{
    state = {
        count: Number(this.props.count),
        tags: ["tdg","ssfs","sfsef"]
    };


incrementhandler =() => {
    const{count} =this.state;
    this.setState({count: count+1});
    console.log(count)
}
    
    render(){
        return(
            <div>
                <h4>dsss: <span>{this.state.count}</span></h4>
                <button onClick={this.incrementhandler} >increment</button>
                <button>reset</button>
                <ul>
        {this.state.tags.map((tag,ch) => <li key={ch}>{tag}</li>)}
                </ul>
            </div>
        )
    }
}

export default Clunter;