
import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Column from './components/Column';
import AddColumnButton from './components/AddColumnButton';
import base from './base';

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    columns: {}
  };

  handleAddColumnClick = () => {
    const id = Date.now();
    const idBox = Date.now();
    let columns = { ...this.state.columns };
    columns[id] = {
      id,
      title: '',
      separator: '',
      base: 60,
      boxes: {
        [idBox]: {
          id: idBox,
          left: '',
          right: '',
        },
      },
    };
    this.setState({ columns });
  }

  handleBaseClick = id => {
    let columns = { ...this.state.columns };
    if (columns[id].base === 60) {
      columns[id].base = 100;
    } else {
      columns[id].base = 60;
    }
    this.setState({ columns });
  }

  handleAddBoxClick = id => {
    const idBox = Date.now();
    let columns = { ...this.state.columns };
    columns[id].boxes[idBox] = {
      id: idBox,
      left: '',
      right: ''
    };
    this.setState({ columns });
  }

  handleDelBoxClick = (id, idBox) => {
    let columns = { ...this.state.columns };
    if (Object.keys(columns[id].boxes).length > 1) {
      columns[id].boxes[idBox] = null;
    }
    this.setState({ columns });
  }

  handleDelColClick = id => {
    let columns = { ...this.state.columns };
    columns[id] = null;
    this.setState({ columns });
  }

  handleTitleChange = (id, e) => {
    let columns = { ...this.state.columns };
    columns[id].title = e.target.value;
    this.setState({ columns });
  }

  handleSeparatorChange = (id, e) => {
    let columns = { ...this.state.columns };
    const separator = e.target.value;
    if (separator.length < 7 && !(separator.match(/[0-9]/))) {
      columns[id].separator = separator;
      this.setState({ columns });
    }
  }

  handleBoxChange = (id, new_box) => {
    const columns = { ...this.state.columns };
    if (new_box.left.match(/^[0-9]*$/) && new_box.right.match(/^[0-9]*$/)) {
      columns[id].boxes[new_box.id].right = new_box.right;
      columns[id].boxes[new_box.id].left = new_box.left;
      this.setState({ columns });
    }
  }

  componentDidMount() {
    this.ref = base.syncState(`/spaces/${this.state.pseudo}`, {
      context: this,
      state: 'columns'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <React.Fragment>
        <div className='title'>
          <Title value='The Adder' />
        </div>
        <div className='container'>
          {Object.keys(this.state.columns)
            .map((id, key) =>
              <Column
                key={key}
                col={this.state.columns[id]}
                onBaseClick={this.handleBaseClick}
                onAddBoxClick={this.handleAddBoxClick}
                onDelBoxClick={this.handleDelBoxClick}
                onDelColClick={this.handleDelColClick}
                onTitleChange={this.handleTitleChange}
                onSeparatorChange={this.handleSeparatorChange}
                onBoxChange={this.handleBoxChange} />
            )}
          <AddColumnButton
            onClick={this.handleAddColumnClick}
            value='New column' />
        </div>
      </React.Fragment>
    );
  }
}

export default App;