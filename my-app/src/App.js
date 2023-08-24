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
            <div className="container mt-5">
            <div className="card shadow-lg">
              <div className="row g-0">
                <div className="col-md-4 bg-primary text-center d-flex align-items-center">
                  <img src={user.picture.large} alt={user.name.first} className="img-fluid rounded-circle mx-auto" style={{ maxWidth: '80%', maxHeight: '80%' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">{user.name.last} {user.name.first}</h2>
                    <p className="card-text"><strong>name: </strong>{user.name.last} {user.name.first}</p>
                    <p className="card-text"><strong>Email:</strong> {user.email}</p>
                    <p className="card-text"><strong>Location:</strong> {user.location.country}</p>
                    <p className="card-text"><strong>Age:</strong> {user.dob.age}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))
        }
      </div>
    );
  }
 } 
}

export default App;
