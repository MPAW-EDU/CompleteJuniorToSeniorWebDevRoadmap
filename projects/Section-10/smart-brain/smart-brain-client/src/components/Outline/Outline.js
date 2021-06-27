import React from 'react'

const Outline = ({boxes}) => {
    console.log(`outline: ${boxes}`);
    return (
        <div>                  {
          boxes.map((box, idx) => {
            return (
              <div key={idx} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            )
          })
        }
        </div>
    )
}

export default Outline
