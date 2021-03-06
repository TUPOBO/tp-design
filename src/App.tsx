import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} autoFocus>
          Hello
        </Button>
        <Button
          btnType={ButtonType.Danger}
          size={ButtonSize.Large}
          onClick={(e) => {
            e.preventDefault();
            alert(223);
          }}
        >
          Hello
        </Button>
        <Button
          btnType={ButtonType.Primary}
          size={ButtonSize.Small}
          className="custom"
        >
          Hello
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
          Baidu Link
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="http://www.baidu.com"
          target="_blank"
        >
          Baidu Link
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
