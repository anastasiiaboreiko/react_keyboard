import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<State> {
  state: State = {
    key: '',
  };

  handleDocumentKeyupClick = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyupClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyupClick);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {key === '' ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{key}]</p>
        )}
      </div>
    );
  }
}
