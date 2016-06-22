import React, { PropTypes } from 'react';
import Header from './common/Header';

const App = React.createClass({
  render () {
    return (
     <div className="container-fluid">
            <Header />
            {this.props.children}
     </div>
   );
  }
})

App.PropTypes={
  children:PropTypes.object.isReqired
};

export default App
