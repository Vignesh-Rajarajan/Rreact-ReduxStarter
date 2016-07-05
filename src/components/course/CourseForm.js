import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';


const CourseForm=({course,allAuthors,onSave,onChange,loading,errors}) =>{
     return(
       <form>
       <h1>Manage Course</h1>
       <TextInput
         name="Title"
         label="Title"
         value={course.title}
         onChange={onChange}
         error={errors.title} />
       <SelectInput
         name="authorId"
         label="Author"
         value={course.authorId}
         defaultOptions="Select Author"
         options={allAuthors}
         onChange={onChange}
         error={errors.authorId} />
        <TextInput
           name="category"
           label="Category"
           value={course.category}
           onChange={onChange}
           error={errors.category} />
        <TextInput
              name="length"
              label="Length"
              value={course.length}
              onChange={onChange}
              error={errors.length} />
        <input
              type="submit"
              value={loading? 'Saving...' : 'Save'}
              disabled={loading}
              className="btn btn-primary"
              onClick={onSave}
               />
       </form>
     );
};


CourseForm.propTypes={
  course:React.PropTypes.object.isReqired,
  allAuthors:React.PropTypes.array,
  onSave:React.PropTypes.func.isReqired,
  onChange:React.PropTypes.func.isReqired,
  loading:React.PropTypes.bool,
  errors:React.PropTypes.object

}

export default CourseForm;