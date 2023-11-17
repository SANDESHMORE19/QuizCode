import React from 'react'
import './Html.css';

export const Html = () => {
  return (
    <section className='html-section'>
    <div className='que'>
        <span>1.</span>
        <span>something</span>
    </div>
    <div className='ans'>

    <div className='ans-1'>
    <button>1</button>
    <button>2</button>
    </div>

    <div className='ans-2'>
    <button>3</button>
    <button>4</button>
    </div>
        
    </div>
    <div className='trackers'>
        <button>Previous</button>
        <button>Next</button>
    </div>
    </section>
  )
}
