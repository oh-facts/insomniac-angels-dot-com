import { useState } from 'react';
import '../styles/components/Forms.css';

export default function Forms() {
  const [addToMailingList, setAddToMailingList] = useState(false);

  const handleCheckboxChange = (event) => {
    setAddToMailingList(event.target.checked);
  };

  return (
    <>
      <form
        method='POST'
        name='contactform'
        className='contactForm'
      >
        <input
          type='hidden'
          name='form-name'
          value='contactForm'
        />

        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            placeholder='Moe Giovanni Jr'
          />
          <div className='infoMessage'>So we can address you.</div>
        </div>

        <div>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            placeholder='llabtoof@email.com'
            required={addToMailingList}
          />
          <div className='infoMessage'>So we can write back.</div>
        </div>

        <div>
          <label>Message:</label>
          <textarea
            name='message'
            placeholder='Check please'
            required={!addToMailingList}
          ></textarea>
          <div className='infoMessage'>Fan mail, suggestions, questions, everything will be read :D</div>
        </div>

        <div class="checkbox-container">
          <input
            type='checkbox'
            name='addToMailingList'
            checked={addToMailingList}
            onChange={handleCheckboxChange}
          />
          <div className='infoMessage'>Subscribe for updates? (1 email a month)</div>
        </div>


        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
