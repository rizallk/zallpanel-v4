import { useState } from 'react';
import './style.scss';
import { Form } from 'react-bootstrap';

const Settings = () => {
  const [show, setShow] = useState(false);

  window.onclick = function (event) {
    if (
      !event.target.matches(
        '.settings-wrapper, .settings-wrapper .content, .settings-wrapper .icon, .settings-wrapper .content p, .settings-wrapper .content input, .settings-wrapper .content label'
      )
    ) {
      setShow(false);
    }
  };

  return (
    <div className={`settings-wrapper border p-2 ${show ? 'show' : ''}`}>
      <div className="settings position-relative">
        <i
          className="icon fas fa-cog fa-lg p-2 rounded-start border"
          onClick={() => (show ? setShow(false) : setShow(true))}
        ></i>
        <div className="content p-1">
          <p>Choose Theme Color</p>
          <Form>
            <Form.Check
              type="radio"
              label="Blue"
              name="theme-color"
              onChange={() => console.log('blue')}
            />
            <Form.Check
              type="radio"
              label="Green"
              name="theme-color"
              onChange={() => console.log('green')}
            />
            <Form.Check
              type="radio"
              label="Red"
              name="theme-color"
              onChange={() => console.log('red')}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
