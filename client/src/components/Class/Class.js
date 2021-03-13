import React, { useState, Component } from 'react';
import './Class.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

class Class extends Component  {
  //Constructor
  constructor(props){
    super(props);

    this.state = {
      className:"",
      assignments:[{}], 
      grades: [{}]
    };
  }

  //Component Life Cycle methods
  componentDidMount() {
    let id = this.props.match.params.id;
    let api_key = "";
    
    //Getting the specific class based on id
    axios.get(`http://localhost:5000/getCourse/${api_key}/${id}`)
    .then((response) => {
      let course = response.data;

      this.setState({className: course.name});
    })
    .catch((err) => {
      console.log(err);
    });

    //Getting the class assignments

  }

  //Event Listeners

  //Render 
  render() {

    return (
      <div className = "classView">
        <div class = "container">
         <div className = "row pt-4">
              <div className = "col-md-10 offset-1 mt-4 pt-5">

                {/* HEADING SECTION */}
                <div className = "headingWrapper p-2 pt-3 mb-5">
                  <h4 className = "text-center">{this.state.className}</h4>
                </div>
              </div>

              {/* CLASS SECTION */}

          </div>  
        </div>  
      </div>
    )
  }
}

export default Class;