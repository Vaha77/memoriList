/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import { data } from '../data/data'


 const Student = () => {
     
    const [search, setSeachTerm] = useState('')
  return (
    <div className=''>
        <input type="text" className='totoinsert'  placeholder='search' onChange={(event) => { 
            setSeachTerm(event.target.value)
        }}/>

<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">N</th>
      <th scope="col">Name</th>
      <th scope="col">Img</th>
      <th scope="col">Data</th>
    </tr>
  </thead>

  {
    data.filter((item)=>{
        if(search == ""){
            return item
        }else if (item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
        return item    
        }
       
    }).map((item, i)=>{
        return (
         
            <tbody>
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.title}</td>
      
      <td>
          <img src={item.img} alt="" />
      </td>
      <td>{item.data}</td>
    </tr>
  </tbody>

        )
    })
}
</table>
  
    </div>
  )
}

export default Student