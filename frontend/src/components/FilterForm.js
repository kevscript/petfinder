import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-arround;

`

const Field = styled.div`
  display: flex;
  margin-bottom: 5px;
  margin-right: 10px;

  label {
    padding-right: 5px;
  }
`

const FilterForm = ({ content, handleSubmit, handleSelect, values }) => {

  const { breeds, genders, ages, sizes, selected } = content

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        {selected &&
          <Field>
            <p>{selected.name}</p>
          </Field>
        }
        <Field>
          <label htmlFor="breed">Breed: </label>
          <select name="breed" onChange={handleSelect} value={values.breed}>
            {breeds && breeds.map(x => <option key={x.name} value={x.name}>{x.name}</option>)}
          </select>
        </Field>
        <Field>
          <label htmlFor="gender">Genders: </label>
          <select name="gender" onChange={handleSelect} value={values.gender}>
            {genders && genders.map(x => <option key={`gender-${x}`} value={x}>{x}</option>)}
          </select>
        </Field>
        <Field>
          <label htmlFor="age">Age: </label>
          <select name="age" onChange={handleSelect} value={values.age}>
            {ages && ages.map(x => <option key={`age-${x}`} value={x}>{x}</option>)}
          </select>
        </Field>
        <Field>
          <label htmlFor="size">Size: </label>
          <select name="size" onChange={handleSelect} value={values.size}>
            {sizes && sizes.map(x => <option key={`size-${x}`} value={x}>{x}</option>)}
          </select>
        </Field>
        { selected && 
          <>
            <Field>
              <label htmlFor="coat">Coat: </label>
              <select name="coat" onChange={handleSelect} value={values.coat}>
                <option key={`coat-any`}>Any</option>
                {selected.coats && selected.coats.map(x => <option key={x} value={x}>{x}</option>)}
              </select>
            </Field>
            <Field>
              <label htmlFor="color">Colors: </label>
              <select name="color" onChange={handleSelect} value={values.color}>
              <option key={`color-any`}>Any</option>
                {selected.colors && selected.colors.map(x => <option key={x} value={x}>{x}</option>)}
              </select>
            </Field>
          </>
        }
        <button>Search</button>
      </Form>
    </FormContainer>
  )
}

export default FilterForm