import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
class Pofile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            UserInfo:[]
         }
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/users").then(res=>this.setState({UserInfo:res.data})).catch(er=>console.log(er))
    }
    render() { 
        return ( <section className="CardProfile">
            
            
          {this.state.UserInfo.map((e,i)=><div key={i} className="CardItem" >
            <div>
                <img className="img-profil" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png" alt="img-profil" />
             </div>  
          
          <h1><i class="far fa-id-badge"></i>{e.name}</h1>
          <a><i class="fas fa-envelope"></i>{e.email}</a>
          <p><i class="fas fa-phone"></i>{e.phone}</p>
          <a><i class="fab fa-edge"></i>{e.website}</a>
          <p><i class="fas fa-building"></i>{e.company.name}</p>
          <Link to={`/user/${e.id}`}><button className="Button">Follow</button></Link>
          </div>)}      

           
        </section> );
    }
}
 
export default Pofile;