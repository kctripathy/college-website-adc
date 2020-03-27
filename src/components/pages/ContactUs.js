import React from 'react';
import Layout from './Layout';
import emailjs from 'emailjs-com';

//Service ID:  gmail	
//User ID: user_Gy471SZKGgbwVNvzqjYeq
//Access token: ab502ca74d9a31b3b0774f941b5f0500 
// Template ID:  quiz_contact_from 
// Template ID:  forgot_pwd_link 

function ContactUs() {


    const handleFormSubmit=(e)=>{
	e.preventDefault();
        //alert("e=",e);

 emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
    };


//ANOTHER WAY TO SEND EMAIL
const templateId = 'template_id';
sendFeedback(templateId, {
	message_html: this.state.feedback, 
	from_name: this.state.name, 
	reply_to: this.state.email})

sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }




    const contactForm = () => {
        return (
            <div>
            <form onSubmit={handleFormSubmit}>            
                <div className="card border-primary rounded-0">
                    <div className="card-header p-0">
                        <div className="bg-info text-white text-center py-2">
                            <h3><i className="fa fa-envelope"></i> Contact</h3>
                        </div>
                    </div>
                    <div className="card-body p-3">
                        <div className="form-group">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                </div>
                                <input type="text" className="form-control" id="name" name="user_name" placeholder="Enter your name" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                                </div>
                                <input type="email" className="form-control" id="email" name="user_email" placeholder="Enter your email" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                                </div>
                                <textarea className="form-control" placeholder="Message" required></textarea>
                            </div>
                        </div>

                        <div className="text-center">
                            <input type="submit" value="Send" className="btn btn-info rounded-0 py-2" />
                        </div>
                    </div>
                                                    
                </div>
            </form>
            </div>
        )
    };


    const address = () => {
        return (
            <div className="card bg-light mb-3">
                <div className="card-header bg-info text-white text-uppercase">
					<i className="fa fa-home"></i> Address
				</div>
                <div className="card-body">
                    <p>This is some address</p>
                    <p>BANGALORE</p>
                    <p>569001 Karnataka (India)</p>
                    <p>Email : email@example.com</p>
                    <p>Tel. +91 22331 11122</p>
                    <p>Fax. +91 22331 11122</p>
                </div>
            </div>
        )
    };

    
    return (        
        <Layout>
           <div className="row" style={{paddingBottom: "20px"}}>                 
                <div className="col-lg-6 col-sm-12">
                    {contactForm()}
                </div>
                <div className="col-lg-6 co-sm-12 user-contact-image">
                    {address()}
                </div>
            </div>       
        </Layout>        
    );
}

export default ContactUs;