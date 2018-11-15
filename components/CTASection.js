import React from 'react'; 
import '../styles/_cta.scss'; 

const CTASection = () => (
    <div class="cta-1">
    <div class="cta-1-container">
      <div class="cta-3-container">
        <h1 class="cta-3-header">Interested in becoming a guide?</h1>
        <div class="form-block-2 w-form">
          <form id="email-form" name="email-form" data-name="Email Form" class="form">
          <input type="text" class="text-field w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="Enter your email" id="email-2" required=""/>
          <a href="#" class="button-3 w-button">SEND</a>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default CTASection; 