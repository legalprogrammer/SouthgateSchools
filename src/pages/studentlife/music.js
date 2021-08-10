import React from 'react'
import Footer from '../home/footer'
import Mainnav from '../home/nav'
import Middleparagraph from './top1'
import Top from './top2'
import Lastparagraph from './top3'

const Music = () => {
      return (
      <>
            <div className="music">
                 <Mainnav/>
                 <div>
                    <img alt="music" src="https://www.abbotsleigh.nsw.edu.au/Images/UserUploadedImages/259/CocMusic_banner.jpg"/>
                 </div> 
                 <Top/>
                 <Middleparagraph/>
                 <Lastparagraph/>
            </div>
            <div>
              <Footer/>
            </div>
      </>      
      )
}

export default Music
