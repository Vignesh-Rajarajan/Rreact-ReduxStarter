import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseAction';
import {bindActionCreators} from 'redux';


class CoursesPage extends React.Component{
  constructor(prop, context){
    super(prop, context);

  }

  courseRow(course,index){
    return <div key={index}>{course.title}</div> ;
  }
  render () {
    return (
      <div>
         <h1>Courses</h1>
         {this.props.courses.map(this.courseRow)}

      </div>

    );
  }
}

CoursesPage.propTypes={

  courses:PropTypes.array.isReqired,
  actions:PropTypes.object.isReqired
};


function mapStateToProps(state,ownProps){
return{
  courses:state.courses
};

}
 function mapDispatchToProps(dispatch){
   return{
     actions: bindActionCreators(courseActions,dispatch)
   };
 }


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
