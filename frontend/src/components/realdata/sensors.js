import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  getSensors,
  getConfig,
  addConfig,
  getStateMachine
} from "../../actions/sensors";
import { ListGroup, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Dual_slider } from "../common/Dual_slider";

export class sensors extends Component {
  getMachineState(machineId) {
    const { getSensors, getConfig, getStateMachine } = this.props;

    getSensors(machineId);
    getConfig(machineId);
    getStateMachine(machineId);
  }

  componentDidMount() {
    const { match } = this.props;

    const machineId = match.params.machineId;
    this.getMachineState(machineId);
  }

  componentDidUpdate(prevProps) {
    const machineId = this.props.match.params.machineId;
    if (prevProps.match.params.machineId !== machineId) {
      this.getMachineState(machineId);
    }
  }

  state = {
    inicillum: "",
    horesllum: "",
    minutsbomba: "",
    horarefill: "",
    phmax: "",
    phmin: "",
    tempmax: "",
    tempmin: "",
    machine: "2"
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.inicillum == "") {
      this.state.inicillum = this.props.config.inicillum;
    }
    if (this.state.horesllum == "") {
      this.state.horesllum = this.props.config.horesllum;
    }
    if (this.state.minutsbomba == "") {
      this.state.minutsbomba = this.props.config.minutsbomba;
    }
    if (this.state.horarefill == "") {
      this.state.horarefill = this.props.config.horarefill;
    }
    if (this.state.phmax == "") {
      this.state.phmax = this.props.config.phmax;
    }
    if (this.state.phmin == "") {
      this.state.phmin = this.props.config.phmin;
    }
    if (this.state.tempmax == "") {
      this.state.tempmax = this.props.config.tempmax;
    }
    if (this.state.tempmin == "") {
      this.state.tempmin = this.props.config.tempmin;
    }
    const {
      inicillum,
      minutsbomba,
      horarefill,
      phmax,
      phmin,
      tempmin,
      tempmax,
      machine,
      horesllum
    } = this.state;
    const config = {
      inicillum,
      minutsbomba,
      horarefill,
      phmax,
      phmin,
      tempmin,
      tempmax,
      machine,
      horesllum
    };
    console.log(this.props.state_machine.bomba_oxigen);
    this.props.addConfig(config);
  };

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col>
              <ListGroup.Item>
                Temp : {this.props.sensor.temp} °C
              </ListGroup.Item>
              <ListGroup.Item>
                Humid: {this.props.sensor.humid} %
              </ListGroup.Item>
              {this.props.sensor.watertank ? (
                <ListGroup.Item>Water full</ListGroup.Item>
              ) : (
                <ListGroup.Item>Not Full</ListGroup.Item>
              )}
              {this.props.state_machine.llum ? (
                <ListGroup.Item>Llum ON</ListGroup.Item>
              ) : (
                <ListGroup.Item>Llum OFF</ListGroup.Item>
              )}
              {this.props.state_machine.bomba_aigua ? (
                <ListGroup.Item>Filling ON</ListGroup.Item>
              ) : (
                <ListGroup.Item>Filling OFF</ListGroup.Item>
              )}
              {this.props.state_machine.bomba_nutri1 ? (
                <ListGroup.Item>Bomba_1 ON</ListGroup.Item>
              ) : (
                <ListGroup.Item>Bomba_1 OFF</ListGroup.Item>
              )}
              {this.props.state_machine.bomba_nutri2 ? (
                <ListGroup.Item>Bomba_2 ON</ListGroup.Item>
              ) : (
                <ListGroup.Item>Bomba_2 OFF</ListGroup.Item>
              )}
              {this.props.state_machine.bomba_oxigen ? (
                <ListGroup.Item>Bomba Oxigen ON</ListGroup.Item>
              ) : (
                <ListGroup.Item>Bomba Oxigen OFF</ListGroup.Item>
              )}
            </Col>
            <Col>
              <Form onSubmit={this.onSubmit}>
                <h3>Configuració llum</h3>
                <Form.Group controlId="basic llum">
                  <Form.Label>Hora d'inici</Form.Label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="inicillum"
                      onChange={this.onChange}
                      defaultValue={this.props.config.inicillum}
                    />
                  </div>
                  <Form.Text className="text-muted">Hores de llum:</Form.Text>
                  <Form.Control
                    name="horesllum"
                    defaultValue={this.props.config.horesllum}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <h3>Configuració hydroponic</h3>
                <Form.Group controlId="bomba oxigen">
                  <Form.Label>Bomba d'oxigen minuts ON cada 4H: </Form.Label>
                  <Form.Control
                    name="minutsbomba"
                    defaultValue={this.props.config.minutsbomba}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group controlId="refill">
                  <Form.Label>Hora d'omplir aigua </Form.Label>
                  <Form.Control
                    name="horarefill"
                    defaultValue={this.props.config.horarefill}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group controlId="refill">
                  <Form.Label>PH maxim </Form.Label>
                  <Form.Control
                    name="phmax"
                    defaultValue={this.props.config.phmax}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group controlId="refill">
                  <Form.Label>PH minim </Form.Label>
                  <Form.Control
                    name="phmin"
                    defaultValue={this.props.config.phmin}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group controlId="refill">
                  <Form.Label>Temperatura maxim </Form.Label>
                  <Form.Control
                    name="tempmax"
                    defaultValue={this.props.config.tempmax}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group controlId="refill">
                  <Form.Label>Temperatura minim </Form.Label>
                  <Form.Control
                    name="tempmin"
                    defaultValue={this.props.config.tempmin}
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Button type="submit" className="btn btn-primary">
                  Puja nova configuracio
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  sensor: state.sensors.sensors,
  config: state.sensors.config,
  state_machine: state.sensors.state_machine
});

export default connect(
  mapStateToProps,
  { getSensors, getConfig, addConfig, getStateMachine }
)(sensors);
