import React from 'react'
import { connect } from 'react-redux'

const MyForm = ({content}) => {

  const { loading, error, type, breeds, gender, age, size } = content

  if(loading) {
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
        <h1>Looking for a {type}</h1>
        <form>
          <div>
            <label htmlFor="breed">Breed</label>
            <input type="text" id="breed" list="breed-list"/>
            <datalist id="breed-list">
              {breeds && breeds.map(breed =>
                <option key={breed.name} value={breed.name}/>  
              )}
            </datalist>
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <input type="text" id="gender" list="gender-list"/>
            <datalist id="gender-list">
              {gender && gender.map(x =>
                <option key={x} value={x}/>  
              )}
            </datalist>
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input type="text" id="age" list="age-list"/>
            <datalist id="age-list">
              {age && age.map(x =>
                <option key={x} value={x}/>  
              )}
            </datalist>
          </div>
          <div>
            <label htmlFor="size">Size</label>
            <input type="text" id="size" list="size-list"/>
            <datalist id="size-list">
              {size && size.map(x =>
                <option key={x} value={x}/>  
              )}
            </datalist>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  content: state.content
})

export default connect(mapStateToProps, null)(MyForm)