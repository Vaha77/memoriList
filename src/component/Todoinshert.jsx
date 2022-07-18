import React, { useCallback, useState } from 'react'
import { MdAdd } from "react-icons/md";



 const Todoinshert = ({onInsert}) => {
     
    const [value , setValue]= useState('')
    const onChange = useCallback(e=>{
        setValue(e.target.value)
    },[])
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
            console.log('cleared')
        }
    ,[onInsert, value])
  return (
<form onSubmit={onSubmit} className='totoinsert'>
    <input value={value} onChange={onChange} type="text" placeholder='할일을 입력헤 주세요' />
    <button type='submit' >  
         <MdAdd/>

    </button>

</form>
  )
}
export default Todoinshert