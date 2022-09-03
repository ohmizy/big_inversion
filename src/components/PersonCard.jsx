import React, { useState } from 'react'

const PersonCard = (props) => {
  const { name, age, hairColor } = props;
  const [ageState, setAgeState] = useState(age);

  const birthday = () => {
    setAgeState(ageState + 1);
  }

  return (
    <div className="card mt-3">
      <h5 className="card-header">PERSON CARD</h5>
      <div className="card-body">
        <h5 className="card-title">{name} </h5>
        <div className="row">
          <div className="col">Age: {ageState} </div>
          <div className="col">Hair Color: {hairColor} </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <button
            className="btn btn-primary w-100"
            onClick={birthday}
          >
            Birthday
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonCard