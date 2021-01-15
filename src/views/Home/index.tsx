import React from 'react'

const Home: React.FC = props => (
  <div className='home'>
    <div>Ho地方撒第三方放是的发生的水淀粉me Page 111 </div>
    {props.children}
  </div>
)

export default Home
