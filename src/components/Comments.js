import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:[],
            posts:[]
     
          }
    }
    componentDidMount(){
        Axios.get('http://jsonplaceholder.typicode.com/posts').then(res=>this.setState({posts:res.data})).catch(er=>console.log(er))
        Axios.get('http://jsonplaceholder.typicode.com/comments').then(res=>this.setState({comments:res.data})).catch(er=>console.log(er))
    }
    render() { 
    return ( <div  className="comments" >
         
        {this.state.comments.filter(el=>(el.postId===Number(this.props.match.params.postId))&&(el.postId===this.props.id)).map((el,i)=><div key={i} className={(this.props.visibility)?"visible":"cacher"}>
        <div>
            {console.log('hello')}
                <img className="img-comment" src="https://image.freepik.com/vecteurs-libre/caricature-profil-homme-affaires_18591-58479.jpg" alt="img-profil" />
             </div>  
          <div className="text_comment">
          <p><strong><i class="fas fa-building"></i>{el.name}</strong></p>
          <p>{el.body}</p> 
          </div>
        </div>)} </div> );
    }
}
 
export default Comments;