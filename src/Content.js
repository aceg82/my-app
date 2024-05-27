import { useState } from 'react'

const Content = () => {
    const [name, setName] = useState('Dave')
    
    const handleNameChange = () => {
        const names = ['Bob', 'Anna', 'Dave' ]
        const int = Math.floor(Math.random() * 3)
        setName(names[int])
    }

    const handleClick = () => {
        console.log('you clicked it')
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return(
        <main>
            <p onDoubleClick={handleClick}>Hello {name}</p>
            <button onClick={handleNameChange}>Change Name</button>
            <br/>
            <button onClick={() => handleClick2('Dave')}>Click it</button>
            <br/>
            <button onClick={(e) => handleClick3(e)}>Click it</button>
        </main>
    )
}

export default Content