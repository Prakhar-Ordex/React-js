import React from 'react'
import './style.css'
import Styles from "./style.module.css"
import "./style.scss"

const Style = () => {
    let style = {
        background: "blue",
    color: "white",
    height: "100px",

    }
  return (
    <div>
          <h4>style type in React.</h4>
          <p style={{ background: "green", color: "white", fontSize: "20px" }}>inline Method</p>
          
          <p className='external'>external css method</p>

          <p style={style}>css in js</p>

          <p className={Styles.tittle}>css module style</p>

          <p className="primary-sass">sass & <span>scss</span> css</p>
    </div>
  )
}

export default Style
