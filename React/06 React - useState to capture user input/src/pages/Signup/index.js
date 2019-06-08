// import React from "react";
// To useState, enter the following line instead of the above
import React, {useState} from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const Signup = () => {
  const handleSubmit = e => {     // e stands for event
    e.preventDefault();
  };
  
  // The following 4 lines are important:
  const[user, userState] = useState({
      username: "",
      password: ""
    });

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input className="form-control" type="text" placeholder="Username" name="username" 
              // The following line is important:
              onChange={(e) => userState({...useState, username:e.target.value})}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                // The following line is important:
                onChange={(e) => userState({...useState, password:e.target.value})}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          {/* // The following line is important: */}
          <h3>Hello {user.username}</h3>
          {/* // The following line is important: */}
          <p>I probably shouldn't tell you this, but your password is {user.password}!</p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;
