import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fades">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit numquam repellat illo esse aspernatur exercitationem reiciendis architecto maxime minus dolorum impedit voluptate repellendus rerum blanditiis illum inventore accusantium,
                    quia sequi quisquam corporis ea ullam adipisci? A dicta exercitationem voluptatibus cumque vel consequatur aperiam. Iste consectetur iusto tempore, libero laborum amet.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla provident numquam dolorum dolore sit. Architecto ut quasi aperiam repudiandae nesciunt placeat harum maxime officiis eius!</p>
            </div>
        </div>
    )
}

export default DescriptionBox
