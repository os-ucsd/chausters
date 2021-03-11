import React, { useState } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className='home'>
          <div className = "container">
              <div className = "row pt-4">
                <div className = "col-md-10 offset-1 mt-4 pt-5">
                  <div className = "headingWrapper p-2 pt-3 mb-5">
                    <h4 className = "text-center">Classes</h4>
                  </div>

                  <div className = "row text-center mt-5 pt-5">
                    <div className = "col-md-4">
                      <div className = "classItem mx-auto">
                      </div>
                    </div>

                    <div className = "col-md-4">
                      <div className = "classItem mx-auto">
                        
                      </div>
                    </div>

                    <div className = "col-md-4">
                      <div className = "classItem mx-auto">
                        
                      </div>
                    </div>
                  </div>

                  <div className = "row text-center mt-5">
                    <div className = "col-md-4">
                      <div className = "classItem mx-auto">
                      </div>
                    </div>

                    <div className = "col-md-4">
                      <div className = "classItem mx-auto">
                        
                      </div>
                    </div>

                    <div className = "col-md-4">
                      <div className = "classItem mx-auto">
                        
                      </div>
                    </div>
                  </div>


                </div>
              </div>
          </div>  
        </div>
    )
}

export default Home;