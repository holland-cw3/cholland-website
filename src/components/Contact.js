import React from 'react';
import '../CSS/Contact.css';

import {TypeAnimation} from 'react-type-animation';

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className="contactme">
        <form action="https://formspree.io/f/moqgqrgq" method="POST">
            <div className="text-gradient2 md:text-4xl sm:text-xl mb-10 mt-5">
              <TypeAnimation sequence={[
                'Let\'s get in touch!',2000,
                '',2000,
              ]}
              speed={20} repeat={Infinity}/>
            </div>
          <input type="text" name="first" placeholder="  First Name" autocomplete='off' required />
          <p className="mt-8"></p>
          <input type="text" name="last" placeholder="  Last Name" autocomplete='off' required/>
          <p className="mt-8"></p>
          <input type="email" name="email" placeholder="  Email Address" autocomplete='off' required/>
          <p className="mt-8"></p>
          <textarea rows="5" cols="60" name="message" placeholder="  Enter text" autocomplete='off' required/>
          <p className="mt-8"></p>
          <button type="submit" className="submitbtn mt-8">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;