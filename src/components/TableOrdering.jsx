import React, { useState,useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { useGlobalState } from '../utils/stateContext';

export default function TableOrdering({history}) {
  const { store, dispatch } = useGlobalState();
  const { table_number } = store;

  //const [table, setTable] = useState(null)

  const { table } = useParams()
  
  useEffect(() => {
    dispatch({
      type: 'setTableNumber',
      data: table
    })
      ; 
  }, [])
  return (
    <div>Loading Table ..... {table_number} {table_number ? <Redirect to={'/menu'} /> : null}   
    </div>
  )
}
