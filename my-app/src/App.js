// import logo from './logo.svg';
import './App.css';
import React, {Component}from "react"

class  App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      loading: false
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api").then((response) => {
      console.log(response);
      response.json().then((data) => {
          console.log(data.results);
          this.setState({
                  items: data.results,
                  loading:true
            })
      });
  });
  }

 render() {
  var {items, loading} = this.state
  if(!loading){
    return <div> Loading... </div>
  }else{
    return (
      <div className="App">
        {
           items?.map((user) => (
            <div> 
               <img src={user.picture.large} alt={user.name.first}/>
                <div className="user">{user.name.first}</div>
            </div>
          ))
        }
      </div>
    );
  }
 } 
}

export default App;
