import React from 'react';


function Contact({ people }) {
    return (
        <>
            {people.map((person) => {
                const { name, age, src } = person;
                return (
                    <div className='contact'>
                        <img src={src} />
                        <h3>{name}</h3>
                        <h4>{age} years</h4>
                    </div>
                );
            })}
        </>
    )
};


export default Contact;