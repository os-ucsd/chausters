import React, { useState, Component } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component  {
  //Constructor
  constructor(props){
    super(props);

    this.state = {
      courses: [{}]
    };
  }

  //Component Life Cycle methods
  componentDidMount() {
    axios.get("http://localhost:5000/getCourses/13171~WCOkLwnr2k3RGXwI6s539VebnweF3YpcIOcQZHvtzgu8POyid82rSA4BFR0n9ab0")
    .then((response) => {
      let courses = response.data;

      this.setState({courses: courses});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  //Event Listeners

  //Render 
  render() {

    return (
      <div className='home'>
        <div className = "container">
            <div className = "row pt-4">
              <div className = "col-md-10 offset-1 mt-4 pt-5">

                {/* HEADING SECTION */}
                <div className = "headingWrapper p-2 pt-3 mb-5">
                  <h4 className = "text-center">Classes</h4>
                </div>
                
                {/* COURSES */}
                <div className = "row text-center mt-4 pt-5">
                  {
                    this.state.courses.map((course) => {
                      return (
                        <div className = "col-md-4">
                          <div className = "classItem mx-auto p-5">
                            <Link><h5 className = "className">{course.name}</h5></Link>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>

              </div>
            </div>
        </div>  
      </div>
    )
  }
}

export default Home;