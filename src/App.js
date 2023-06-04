import React from 'react'
import "./File.css";
import data from './Data';

console.log(data);




function App() {
  return (
    <main  className='container'>
      <ul className='comments-container'>
        {/* <li className='comment'>
          <div className='comments-header'>
            <h3 className='email'>email.email@.com</h3>
            <h3 className='name'>example1</h3>
          </div>
          <p className='message'>
          n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to 
          demonstrate the visual form of a document or a typeface without relying on meaningful content
          </p>
        </li>

        <li className='comment'>
          <div className='comments-header'>
            <h3 className='email'>email.email@.com</h3>
            <h3>example2</h3>
          </div>
          <p className='message'>
          n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to  
          demonstrate the visual form of a document or a typeface without relying on meaningful content
          </p>
        </li>

        <li className='comment'>
          <div className='comments-header'>
            <h3 className='email'>email.email@.com</h3>
            <h3>example3</h3>
          </div>
          <p className='message'>
          n publishing and graphic design, Lorem ipsum is a placeholder text 
          commonly used to demonstrate the visual form of a document or 
          a typeface without relying on meaningful content.
          </p>
        </li> */}
        {
          data.map((eachObj) => {
            const {id,email,name,body} = eachObj;
            return(
              <li key={id} className='comment'>
                <div className='comments-header'>
                  <h3 className='email'>{email}</h3>
                  <h3 className='name'>{name}</h3>
               </div>
               <p className='message'>{body}</p>
              </li>
            )
          })
        }
     </ul>
    </main>
    
  )
}





export default App