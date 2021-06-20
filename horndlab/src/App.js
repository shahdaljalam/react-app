import './App.css';
import Data from './components/Data.json'
import React, { Component } from 'react'
import SelectedBeast from './components/SelectedBeast';
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      selectedProps: {}
    }
  }; 

  handleModal = (title, img, desc) => {
    this.setState({
      show: !this.state.show,
      SelectedBeastTitle: title,
      SelectedBeastImg: img,
      SelectedBeastDesc: desc,

    })
  }


  render() {
    return (
      <div>
        <Header />
        <Main
          Data={Data}
          handleModal={this.handleModal} />
        <SelectedBeast
          show={this.state.show}
          title={this.props.title}
          img={this.state.SelectedBeastImg}
          desc={this.state.SelectedBeastDesc}
        />
        <Footer />
      </div>
    )
  }
}

export default App