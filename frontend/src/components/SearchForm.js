import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withFormik } from 'formik'

const MyForm = ({ content }) => {
  const [open, setOpen] = useState(false)
  const { loading, error, type, breeds, genders, ages, sizes } = content

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
        <form>
          <div>
            <label htmlFor="breeds">Breed</label>
            <input type="text" id="breeds" list="breeds-list" />
            <datalist id="breeds-list">
              {breeds && breeds.map(breed =>
                <option key={breed.name} value={breed.name} />
              )}
            </datalist>
          </div>
          <div>
            <label htmlFor="genders">Gender</label>
            <input type="text" id="genders" list="genders-list" />
            <datalist id="genders-list">
              {genders && genders.map(x =>
                <option key={x} value={x} />
              )}
            </datalist>
          </div>
          <div>
            <label htmlFor="ages">Age</label>
            <input type="text" id="ages" list="ages-list" />
            <datalist id="ages-list">
              {ages && ages.map(x =>
                <option key={x} value={x} />
              )}
            </datalist>
          </div>
          <div>
            <label htmlFor="sizes">Size</label>
            <input type="text" id="sizes" list="sizes-list" />
            <datalist id="sizes-list">
              {sizes && sizes.map(x =>
                <option key={x} value={x} />
              )}
            </datalist>
          </div>
          <div>
            <label htmlFor="where">Where</label>
            <input type="text" id="where" placeholder="Enter City, State or ZIP Code" />
          </div>
          <button onClick={handleOptions}>{open ? 'Less' : 'More'} Options</button>

          {open &&
            <>
              <div>
                <label htmlFor="coats">Coat</label>
                <input type="text" id="coats" list="coats-list" />
                <datalist id="coats-list">
                  {type.coats && type.coats.map(x =>
                    <option key={x} value={x} />
                  )}
                </datalist>
              </div>
              <div>
                <label htmlFor="colors">Color</label>
                <input type="text" id="colors" list="colors-list" />
                <datalist id="colors-list">
                  {type.colors && type.colors.map(x =>
                    <option key={x} value={x} />
                  )}
                </datalist>
              </div>
            </>
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  content: state.content
})

export default connect(mapStateToProps, null)(MyForm)