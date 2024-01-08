import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  return (
    <div>
      <section className="jumbotron text-center">
        <div className="container">
        
          <h1 className="display-4">Welcome to YourDrugstore</h1>
          <p className="lead">
            Your trusted source for high-quality medications and healthcare
            products.
          </p>
          <Link to="/browse" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
        {/* Really small image with specific width and height */}
       
      </section>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Quality Medications</h2>
            <p>
              Explore our extensive range of medications from reputable
              pharmaceutical companies.
            </p>
          </div>
          <div className="col-md-4">
            <h2>Expert Advice</h2>
            <p>
              Get professional advice and information about your medications
              from our experienced pharmacists.
            </p>
          </div>
          <div className="col-md-4">
            <h2>Convenient Services</h2>
            <p>
              Enjoy convenient services such as online ordering, home delivery,
              and prescription refills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
