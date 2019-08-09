import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAnimal } from '../actions'

const AnimalPage = ({ fetchAnimal, match, animal }) => {

  const { loading, data, error } = animal

  useEffect(() => {
    const id = match.params.id
    fetchAnimal(id)
  }, [fetchAnimal, match.params.id])

  if (loading) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>{error}</div>
  } else if (data) {
    return (
      <div>
        <h2>Name: {data.name ? data.name : 'Unknown'}</h2>
        {data.photos && data.photos.map((photo, index) => {
          return (
            <div key={`${data.id}-img-${index}`}>
              <img src={photo.small} alt={`${data.name}-img-${index}`}/>
            </div>
          )
        })}
        <h3>Breed: 
          {data.breeds.h3rimary ? data.breeds.h3rimary : null}
          {data.breeds.secondary ? data.breeds.secondary : null}
          {data.breeds.mixed ? 'Mix' : null}
        </h3>
        <h3>Age: {data.age ? data.age : 'Uknown'}</h3>
        <h3>Gender: {data.gender ? data.gender : null}</h3>
        <p>{data.description ? data.description : null}</p>
        <p>Email: {data.contact.email ? data.contact.email : null}</p>
        <p>Phone: {data.contact.phone ? data.contact.phone : null}</p>
        <p>{data.contact.address.address1 ? `Address : ${data.contact.address.address1}` : null}</p>
        <p>{data.contact.address.address2 ? `Address 2 : ${data.contact.address.address2}` : null}</p>
        <p>{data.contact.address.city ? `City : ${data.contact.address.city}` : null}</p>
        <p>{data.contact.address.state ? `state : ${data.contact.address.state}` : null}</p>
        <p>{data.contact.address.postcode ? `postcode : ${data.contact.address.postcode}` : null}</p>
        <p>{data.contact.address.country ? `country : ${data.contact.address.country}` : null}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  animal: state.animal
})

const mapDispatchToProps = {
  fetchAnimal
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalPage)