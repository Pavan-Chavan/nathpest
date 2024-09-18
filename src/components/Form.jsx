import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';

function Form() {
  const location = useLocation();
  const regex = /section=([^&]+)/;
  const section = location.search.match(regex)?.[1];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });
  const form = useRef();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    console.log(location);
    
    if (section) {
      const targetElement = document.getElementById(section);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);

  const handleSubmit = async (e) => {
    emailjs
      .sendForm('service_4wx99e9', 'template_17shvfu', form.current, {
        publicKey: '9wbA9-rzMxxtBhEkk',
      })
      .then(
        () => {
          window.alert('Email send successfully!');
        },
        (error) => {
          window.alert('Email send failed, Please try again after sometime!');
          console.log('FAILED...', error);
        },
      );
  };

  return (
    <section id='inquiryForm'>
      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay=".3s">
      <div class="container py-5">
        <div class="bg-light px-4 py-5 rounded">
          <div class="text-center">
              <h1 class="display-5 mb-5">Find Your Pest Control Services</h1>
          </div>
          <form class="text-center mb-4" action="#" ref={form}>
            <div class="row g-4">
                <div class="col-xl-10 col-lg-12">
                    <div class="row g-4">
                        <div class="col-md-6 col-xl-3">
                            <select class="form-select p-3 border-0" onChange={handleChange} value={formData.service} name='service'>
                                <option value="" class="">Type Of Service</option>
                                <option value="Cockroaches">Cockroaches</option>
                                <option value="Termintes">Termintes</option>
                                <option value="Mosquitoes">Mosquitoes</option>
                                <option value="Rodents">Rodents</option>
                                <option value="Bed Bugs">Bed Bugs</option>
                                <option value="Flies">Flies</option>
                                <option value="Lizards">Lizards</option>
                                <option value="Birds">Birds</option>
                                <option value="Weed">Weed</option>
                            </select>
                        </div>
                        <div class="col-md-6 col-xl-3">
                            <input type="text" class="form-control p-3 border-0" placeholder="Name" name='name' value={formData?.name} onChange={handleChange}/>
                        </div>
                        <div class="col-md-6 col-xl-3">
                            <input type="text" class="form-control p-3 border-0" placeholder="Phone" name='phone' value={formData?.phone} onChange={handleChange}/>
                        </div>
                        <div class="col-md-6 col-xl-3">
                            <input type="email" class="form-control p-3 border-0" placeholder="Email" name='email' value={formData?.email} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-12">
                    <input type="button" class="btn btn-primary w-100 p-3 border-0" value="GET STARTED" onClick={handleSubmit} />
                </div>
            </div>
          </form>
        </div>
      </div>
  </div>
    </section>
  )
}

export default Form