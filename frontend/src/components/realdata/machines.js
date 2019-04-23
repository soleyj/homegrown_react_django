import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMachine } from "../../actions/machines";
import { Button, Card } from "react-bootstrap";
import logo from "./logo.jpg"; // with import
import { Link } from "react-router-dom";

export class machines extends Component {
  static propTypes = {
    machine: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getMachine();
  }
  º;
  render() {
    return (
      <Fragment>
        <h2>Machines</h2>
        <div className="container">
          <div className="row">
            {this.props.machine.map(machine => (
              <div key={machine.id} className="col-sm">
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{machine.name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <Card.Link href="#">Share</Card.Link>
                      <Link to={`/machine/${machine.id}`}>Configuracion</Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  machine: state.machine.machine
});

export default connect(
  mapStateToProps,
  { getMachine }
)(machines);
