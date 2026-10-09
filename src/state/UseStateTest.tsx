import React, { type ReactEventHandler, type SyntheticEvent } from 'react'

const UseStateTest = () => {

    const [things, setThings] = React.useState([]);
    const [formData, setData] = React.useState('')

    const handleSubmit =(e:SyntheticEvent) =>{
        e.preventDefault();
        const thingName = {
            id: new Date().getTime(),
            name: formData
        }

        setThings(function(item){
            return [...item, thingName]
        })

    }

    console.log(things)

  return (
    <div>
        
        <p>I am just testing react after a long time</p>
        <form onSubmit={handleSubmit}>
            <input placeholder='Add A thing' type='text' value={formData} onChange={(e) => e.target.value} />
            <button>Add</button>
        </form>
    </div>
  )
}

export default UseStateTest