import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Sitou Japhet',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: 'path/to/image',
        profession: 'Doctor',
      },
      show: false,
      interval: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, interval } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Interval: {interval} seconds</p>
      </div>
    );
  }
}

export default App;
