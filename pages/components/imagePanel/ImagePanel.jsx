import React from 'react';
import { useState, useEffect } from 'react';
import { img } from './imports.js';
import style from './imagePanel.module.css';
import { Text_Overlay } from '../../components';

const ImagePanel = (props) => {
  const image = (typeof props.image === 'undefined') ? img : props.image;



  return (
  <div className={style.image_panel}>
    <img className={style.image} src={image}/>
    <div className={style[props.justify]}>
      <div className={style.flex_pos}>
        {props.children}
      </div>
    </div>
  </div>
  );
};

export default ImagePanel;
