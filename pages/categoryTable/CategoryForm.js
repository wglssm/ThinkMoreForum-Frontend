import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Form, { useForm } from '../../components/CategoryManager/useForm';
import Controls from '../../components/CategoryManager/controls/Controls';
import * as categoryServices from '../../services/categoryService';

const initialFValues = {
  id: '0',
  title: '',
  description: '',
  color: '',
};

const CategoryForm = (props) => {
  const { addOrEdit, recordForEdit } = props;
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true);

  const validate = (fieldValues = values) => {
    const temp = { ...errors };
    if ('title' in fieldValues)
      temp.title = fieldValues.title ? '' : 'This field is required.';
    if ('description' in fieldValues)
      temp.description = fieldValues.description
        ? ''
        : 'This field is required.';
    if ('color' in fieldValues)
      temp.color =
        fieldValues.color.length !== 0 ? '' : 'This field is required.';
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit, setValues]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="title"
            label="Category Title"
            // value={values.title}
            defaultValue={recordForEdit ? recordForEdit.title : ''}
            onChange={handleInputChange}
            error={errors.title}
          />
          <Controls.Input
            label="Description"
            name="description"
            // value={values.description}
            defaultValue={recordForEdit ? recordForEdit.description : ''}
            onChange={handleInputChange}
            error={errors.description}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Select
            name="color"
            label="Color"
            // value={values.color}
            onChange={handleInputChange}
            defaultValue={recordForEdit ? recordForEdit.color : ''}
            options={categoryServices.getColorCollection()}
            error={errors.color}
          />
          <div>
            <Controls.Button
              text="Submit"
              type="submit"
              onClick={handleSubmit}
            />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default CategoryForm;
