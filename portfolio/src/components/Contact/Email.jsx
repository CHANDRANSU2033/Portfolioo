import {useState} from 'react';
import emailjs from '@emailjs/browser';
import styles from './Email.module.css'



export const Email = () => {
  
    const Reset ={
      name: '',
      email: '',
      subject:'',
      message: ''
    }; 
    const [formData, setFormData] = useState(Reset);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    

      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_9do95yg', 'template_1a6h7rr', e.target, {
            publicKey: 'sJWMLCMaEc23Mpane',
          })
          .then(
            () => {
              setFormData(Reset);
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
              alert('FAILED...', error.text);
            },
          ) 
      };
  
  
  
  
  
  
    return ( 
  
  <form  className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inp}>
          <div className={styles.name}>
              <input type="text" name="name" id="name" value={formData.name} placeholder="Name" required onChange={
                 handleChange
              }/>
          </div>
          <div className={styles.email}>
              <input type="email" name="email" id="email" value={formData.email} placeholder="E-mail" required onChange={
                 handleChange
              }/>
          </div>
          <div className={styles.subject}>
              <input type="text" name="subject" id="subject" value={formData.subject} placeholder="Subject" required onChange={
                 handleChange
              }/>
          </div>
          <div className={styles.message}>
              <textarea name="message" id="message" value={formData.message} cols="30" rows="10" placeholder="Type Here Your Message..." required onChange={
             handleChange
              }></textarea>
          </div>
          <div className={styles.submit}>
              <button type="Submit">Submit</button>
          </div>
      </div>
  </form>

  )
}
