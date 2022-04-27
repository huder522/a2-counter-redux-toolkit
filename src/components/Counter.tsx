import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store';
import { decrement, increment, reset } from '../store/slices/counterSlice';

export const Counter = () => {

  const { count } = useSelector( (state: RootState) => state.counter );
  const dispatch = useDispatch();

  const [mount, setMount] = useState( 0 );

  return (
    <div className="container">
      <h2> Counter </h2>
      <p className="text-center" style={{fontSize: '5rem'}}>{ count }</p>
      <div className="d-flex justify-content-evenly mb-3">

        <button
          className="btn btn-success"
          onClick={ () => dispatch( decrement( mount ) ) }
        >
          Decrement
        </button>

        <button
          className="btn btn-danger"
          onClick={ () => dispatch( reset() ) }
        >
          Reset
        </button>

        <button
          className="btn btn-success"
          onClick={ () => dispatch( increment( mount ) ) }
        >
          Increment
        </button>

      </div>

      <div className="d-flex justify-content-center" >
        <input 
          className="form-control"
          style={{ width: 200}}
          type="number" 
          min={ 0 }
          value={ mount }
          onChange={ e => setMount( Number(e.target.value) )}
        />
      </div>
    </div>
  )
}
