import React, { useId } from 'react'
import Email from './Email';


const App = () => {
    const id = useId();
  return (
    <div>
          <h4>useId hook </h4>
          <p className=' '>use to generating unique IDS tha can be passed to accesibility attributes</p>

          <Email />
          
          <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis fugit eaque ipsa debitis obcaecati sunt odio nostrum doloremque incidunt dignissimos quae maxime dolorum, laudantium eum magnam unde recusandae tenetur ea. Possimus commodi, nihil illo minima rem fuga exercitationem, quisquam neque porro non soluta cupiditate iusto id. Illum deleniti quibusdam molestiae itaque laborum inventore ab veniam dolorum architecto eaque, a expedita nostrum velit vero praesentium quidem culpa ratione eligendi alias vitae, natus amet voluptatibus explicabo provident. Quis provident laborum, nobis cumque nemo recusandae harum, magni quam obcaecati cum eius illum ea sed! Accusantium quisquam quae aut ipsa quos expedita quia enim doloribus ex, placeat molestias odit voluptates incidunt amet impedit modi deserunt obcaecati cupiditate odio accusamus! Fugit minus debitis dignissimos facere. Maiores voluptatum vero culpa ducimus nostrum nisi alias, asperiores harum vitae corporis a. Fugiat nostrum, voluptatibus ex facilis vitae tenetur repudiandae nesciunt mollitia aliquid a cum ducimus laudantium incidunt dolor quaerat porro sit autem unde. Maxime sint est adipisci nam optio, error sit aliquid debitis ipsum hic. Ex reiciendis exercitationem minus officia. Modi qui dolor cumque tempore, ipsum quas necessitatibus doloribus a unde fuga facilis molestias, iure nostrum veniam dolorem, laudantium et placeat error non totam voluptates tempora! Velit?
          </article>
        
          <Email/>
    </div>
  )
}

export default App
