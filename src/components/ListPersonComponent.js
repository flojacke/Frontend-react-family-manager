import React, { Component } from 'react';
import PersonService from '../services/PersonService';
import { withRouter } from 'react-router-dom';


class ListPersonComponent extends Component {
    
    
    constructor(props){
        super(props)
        this.state = {
            personslist:[],
            searchTerm:''
        }
        this.editPerson = this.editPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
    }
    
    editPerson(id){
        console.log(this.props);
        this.props.history.push(`/update-person/${id}`);
    }

    deletePerson(id){
        PersonService.deletePerson(id).then( res => {
            this.setState({personslist: this.state.personslist.filter(person => person.id !== id)});
        }); 
    }

    componentDidMount(){
        PersonService.getPersonList().then((res) => {
            this.setState({personslist: res.data});
        });
    }

    render() {
        return (
            
            
            <div>
                <h2 className="text-center">James Bond List</h2>
                <div>
                    <input type="text"  placeholder="Search..." onChange={event => {this.setState({searchTerm: event.target.value})}}></input>
                </div>
                <br/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                           <tr>
                               <th>007 First Name</th>
                               <th>007 Last Name</th>
                               <th>007 Email</th>
                               <th>Actions</th>
                           </tr> 
                        </thead>
                        <tbody>
                            {
                                this.state.personslist.filter((val)=>{
                                    if(this.state.searchTerm ==""){
                                        return val
                                    }else if(val.lastName.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
                                        return val
                                    }
                                }).map(
                                    person =>
                                    <tr key= {person.id}>
                                        <td>{person.firstName}</td>
                                        <td>{person.lastName}</td>
                                        <td>{person.email}</td>
                                        <td>
                                            <button onClick ={ () => this.editPerson(person.id)} className="btn btn-primary">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick ={ () => this.deletePerson(person.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default  withRouter (ListPersonComponent);