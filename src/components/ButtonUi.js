import React, { Component } from 'react';
import { Button } from '@material-ui/core'

class ButtonUi extends Component { 
  render() {
    return (
      <div className="ButtonUi">
        <Button color="primary" variant="outlined">This is a Button</Button>
      </div>
    );
  }
}
export default ButtonUi;