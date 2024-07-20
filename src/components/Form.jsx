import React, { useState } from 'react'

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_USER_ID'
    ).then((result) => {
      console.log('Email successfully sent!', result.status, result.text);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }).catch((error) => {
      console.error('There was an error sending the email:', error);
    });
  };

  return (
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay=".3s">
      <div class="container py-5">
        <div class="bg-light px-4 py-5 rounded">
          <div class="text-center">
              <h1 class="display-5 mb-5">Find Your Pest Control Services</h1>
          </div>
          <form class="text-center mb-4" action="#">
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
                    <input type="button" class="btn btn-primary w-100 p-3 border-0" value="GET STARTED" />
                </div>
            </div>
          </form>
        </div>
      </div>
  </div>
  )
}

export default Form