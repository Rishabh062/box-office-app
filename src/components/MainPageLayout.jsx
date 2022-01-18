import React from 'react'
import Navs from './Navs.jsx'
import Title from './Title.jsx'
const MainPageLayout = ({ children }) => {
    return (
        <div>
            <Title title="Box Office" subtitle="Are you looking for movie or an actor"/>
          <Navs/>  
        {children}
        </div>
    )
}

export default MainPageLayout
