import React, { useState } from 'react'
import styles from './CircleCursor.module.scss'

const CircleCursor = props => {
    const [newProps, setNewProps] = useState(props.initial)
    
    
    window.addEventListener('mousemove',(e)=>{
        if((e.clientX < (window.outerWidth - (props.safeBoundaryX ? props.safeBoundaryX : 30))) 
            && 
            e.clientY < (window.outerHeight - (props.safeBoundaryY ? props.safeBoundaryY : 40)) ){
            document.getElementById('circle__cursor').style.top = (e.clientY) + 'px' 
            document.getElementById('circle__cursor').style.left = (e.clientX) + 'px'
            document.getElementById('circle__cursor__dot').style.top = (e.clientY) + 'px' 
            document.getElementById('circle__cursor__dot').style.left = (e.clientX) + 'px'
        }
    })

    let hoverElement = document.querySelectorAll('.hover-detect')
    hoverElement = Array.from(hoverElement)

    hoverElement.forEach((element)=>{

        element.addEventListener('mouseenter',()=>{
            setNewProps(props.hover)
        })
        
        element.addEventListener('mouseleave',()=>{
            setNewProps(props.initial)
        })
        
    }) 
    
    return (
        <>
        <div id="circle__cursor" className={styles.circle__cursor}  style={{
            border:`${newProps.borderWidth ? newProps.borderWidth : '5px'} 
                    ${newProps.borderStyle ? newProps.borderStyle : 'solid'} 
                    ${newProps.color ? newProps.color : 'none'}`,
            width:`${newProps.circleSize ? newProps.circleSize : '4rem'}`,
            height:`${newProps.circleSize ? newProps.circleSize : '4rem'}`,
            transition: `${newProps.circleDelay ? newProps.circleDelay : '0.08s'}, width 0.2s , height 0.2s`
            }}>
        </div>
        <div id="circle__cursor__dot" className={styles.circle__cursor__dot} style={{
            background:`${newProps.color ? newProps.color : 'linear-gradient(90deg, rgba(245,255,0,1) 15%, rgba(31,209,22,1) 37%, rgba(52,65,230,1) 61%, rgba(230,52,52,1) 86%'}` ,
            width:`${newProps.dotSize ? newProps.dotSize : '2rem'}`,
            height:`${newProps.dotSize ? newProps.dotSize : '2rem'}`,
            transition: `${newProps.dotDelay ? newProps.dotDelay : '0.03s'}, width 0.2s , height 0.2s`
            }}>
        </div>
        </>
    )
}

export default CircleCursor