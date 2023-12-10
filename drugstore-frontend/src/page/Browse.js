import React, {useState} from "react";

import GetProducts from "../hooks/GetProducts";
import CreateProducts from "../hooks/CreateProducts";

function Browse({ loggedInUser }) {
    const [count, setCount] = useState(0);
  
    const handleCountState = () => {
      setCount(count + 1);
    };

    const handleCreateProductsStateChange = () => {
        console.log("CreateProducts state changed");
      };
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <CreateProducts stateChange={handleCreateProductsStateChange} />
    
              {/* loggedInUser prop átadása a GetProducts komponensnek */}
              <GetProducts stateChange={handleCountState} count={count} loggedInUser={loggedInUser} />
            </div>
          </div>
        </div>
      );
    }
    

export default Browse;