import * as React from 'react'
import Card from '../component/card'

export default function() {
    return <section className='cardSection'>
        <Card 
            title={'Anders'} 
            detail={'The author of typescript'}             
            imgSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Anders_Hejlsberg.jpg/220px-Anders_Hejlsberg.jpg'} 
            notation={'59yr'} 
        />    
        {/*<p>Card 用于显示多个独立突出的信息块。</p> */}
    </section>
}