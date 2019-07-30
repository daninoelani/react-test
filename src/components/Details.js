import React, { useState, useEffect } from 'react'

const Details = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`https://private-5bdb3-friendmock.apiary-mock.com/friends/id`)
        .then(res => res.json())
        .then(res => this.setState({ details: res }))
    }, []);

    return (
        <div>
            {details.map((person, id) => (
                <div key={id}>
                    <h4>{person.first_name + ' ' + person.last_name}</h4>
                    <p>{person.bio}</p>
                </div>
            ))}
        </div>
    )
}

export default Details;