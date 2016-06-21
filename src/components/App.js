import React, { PropTypes } from 'react'

const App = React.createClass({
  render () {
    return (
     <div className="container-fluid">
            <p>Header Here</p>
            {this.props.children}
     </div>
   );
  }
})

App.PropTypes={
  children:PropTypes.object.isReqired
};

export default App
