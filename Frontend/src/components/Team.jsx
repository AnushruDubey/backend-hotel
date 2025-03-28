import React from 'react'
import {data} from '../Pages/restApi.json';
const Team = () => {
  return (
    <section className='team' id='team'>
     <div className="container">
        <div className="heading_section">
            <h1 className='heading'>OUR TEAM</h1>
            <p>At our Restaurant, our team is the heart of everything we do. From our talented chefs crafting flavorful dishes to our friendly staff ensuring a welcoming experience, each member brings passion and dedication to your table. Together, we’re committed to creating moments you’ll savor and remember.</p>
        </div>
        <div className="team_container">
            {
                data[0].team.map(element=>{
                    return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.name} />
                            <h3>{element.nam}</h3>
                            <p>{element.designation}</p>
                        </div>
                    )
                })
            }
        </div>
     </div>
    </section>
  )
}

export default Team