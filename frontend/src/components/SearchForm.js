import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withFormik, Field } from 'formik'

const MyForm = (props) => {
  const [open, setOpen] = useState(false)
  const { loading, error, type, breeds, genders, ages, sizes } = props.content
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props


  const handleOptions = (e) => {
    e.preventDefault()
    setOpen(!open)
  }

  if (loading) {
    return (
      <h1>loading...</h1>
    )
  } else if (error) {
    return (
      <h1>{error}</h1>
    )
  } else {
    return (
      <div>
        <h1>Looking for a {type.name}</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="breeds">Breed</label>
            {errors.breed && touched.breed && <div id="feedback">{errors.breed}</div>}
            <Field component="select" id="breeds" onChange={handleChange} onBlur={handleBlur} name="breed" value={values.breed}>
              {breeds && breeds.map(x => <option key={x.name} value={x.name}>{x.name}</option>)}
            </Field>
          </div>
          <div>
            <label htmlFor="genders">Gender</label>
            {errors.gender && touched.gender && <div id="feedback">{errors.gender}</div>}
            <Field component="select" id="genders" onChange={handleChange} onBlur={handleBlur} name="gender" value={values.gender}>
              {genders && genders.map(x => <option key={x} value={x}>{x}</option>)}
            </Field>
          </div>
          <div>
            <label htmlFor="ages">Age</label>
            {errors.age && touched.age && <div id="feedback">{errors.age}</div>}
            <Field component="select" id="ages" onChange={handleChange} onBlur={handleBlur} name="age" value={values.age}>
              {ages && ages.map(x => <option key={x} value={x}>{x}</option> )}
            </Field>
          </div>
          <div>
            <label htmlFor="sizes">Size</label>
            {errors.size && touched.size && <div id="feedback">{errors.size}</div>}
            <Field component="select" id="sizes" onChange={handleChange} onBlur={handleBlur} name="size" value={values.size}>
              {sizes && sizes.map(x => <option key={x} value={x}>{x}</option>)}
            </Field>
          </div>
          <div>
            <label htmlFor="where">Where</label>
            {errors.where && touched.where && <div id="feedback">{errors.where}</div>}
            <Field type="text" id="where" placeholder="Enter City, State or ZIP Code" onChange={handleChange} onBlur={handleBlur} name="where" value={values.where} />
          </div>
          <button onClick={handleOptions}>{open ? 'Less' : 'More'} Options</button>

          {open &&
            <>
              <div>
                <label htmlFor="coats">Coat</label>
                {errors.coat && touched.coat && <div id="feedback">{errors.coat}</div>}
                <Field component="select" id="coats" onChange={handleChange} onBlur={handleBlur} name="coat" value={values.coat}>
                  {type.coats && type.coats.map(x => <option key={x} value={x}>{x}</option>)}
                </Field>
              </div>
              <div>
                <label htmlFor="colors">Color</label>
                {errors.color && touched.color && <div id="feedback">{errors.color}</div>}
                <Field component="select" id="colors" onChange={handleChange} onBlur={handleBlur} name="color" value={values.color}>
                  {type.colors && type.colors.map(x => <option key={x} value={x}>{x}</option>)}
                </Field>
              </div>
            </>
          }
        </form>
      </div>
    )
  }
}

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    breed: '',
    gender: '',
    age: '',
    size: '',
    where: '',
    coat: '',
    color: ''
  })
})(MyForm)

const mapStateToProps = (state) => ({
  content: state.content
})

export default connect(mapStateToProps, null)(MyEnhancedForm)