import React, { Component } from 'react';
import Axios from 'axios';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import Comments from './Comments';
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            comments:[],
        visibility:false,
            tab:[],
            UserInfo:[]
          }
    }
    componentDidMount(){
        Axios.get('http://jsonplaceholder.typicode.com/posts').then(res=>this.setState({posts:res.data})).catch(er=>console.log(er))
        Axios.get('http://jsonplaceholder.typicode.com/comments').then(res=>this.setState({comments:res.data})).catch(er=>console.log(er))
        Axios.get("https://jsonplaceholder.typicode.com/users").then(res=>this.setState({UserInfo:res.data})).catch(er=>console.log(er))
    }
    isvisible=()=>{
this.setState({
   visibility:!this.state.visibility,


})

    }
    onSubmit=()=> {
       this.setState({
           visibility:!this.state.visibility,
           tab:[...this.state.tab,(props)=><Comments {...props}visibility={this.state.visibility} id={this.props.match.params.postId} />],
          
       }) 
        
      }
    render() { 
        return (<section>
          {this.state.UserInfo.filter(e=>e.id===Number(this.props.match.params.userId)).map(e=><div className="section_couverture"><div className="photo_couverture"><img  src="https://3.bp.blogspot.com/-fLFmNYSLkP8/V1mlPTKMCgI/AAAAAAAACxo/Isq_Ok5qiiob1mOxA-jbmsvw5JYPBCKigCLcB/s1600/photo%2Bde%2Bcouverture%2Bhd.jpg" alt=""/></div>
          <div className="text_profil"><img className="img-profil" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png" alt="img-profil" />
          <h1><i class="far fa-id-badge"></i>{e.name}</h1>
          <a><i class="fas fa-envelope"></i>{e.email}</a></div></div>)}
        <section className="CardProfile">
             
             {this.state.posts.filter(el=>(el.userId===Number(this.props.match.params.userId))).map((e,i)=><div key={i} className="CardItem" >
            <div>
                <img className="img-profil" src="https://www.orbitclippingpath.com/blog/wp-content/uploads/2019/11/clipping-path-company-750x410.jpg" alt="img-profil" />
             </div>  
          
          <h1><i class="fas fa-building"></i>{e.title}</h1>
          <p>{e.body}</p>
          
          <Link to={`/user/${e.userId}/post/${e.id}`}><span onClick={this.isvisible}><i class="fas fa-comment-dots"></i>Comments</span></Link>
        {/* {this.state.tab[i]} */}
      
         <Route path='/user/:userId/post/:postId' render={(props)=><Comments {...props}visibility={this.state.visibility} id={e.id}/>}/>  
         {console.log(this.props.match.params.postId)}
        
          
          </div>
        )} 
       

           

        </section> 
        </section>);
    }
}
 
export default Posts;
