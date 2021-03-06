import React from 'react';

const Login = ( ) => {

return (
<React.Fragment>
<div class="modal fade"  id="darkModalForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog form-dark" role="document">
    
    <div class="modal-content card card-image" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/pricing-table%20(7).jpg');">
      <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
       
        <div class="modal-header text-center pb-4">
          <h3 class="modal-title w-100 white-text font-weight-bold" id="myModalLabel"><strong>SIGN</strong> <a
              class="green-text font-weight-bold"><strong> UP</strong></a></h3>
          <button type="button" class="close white-text" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        
        <div class="modal-body">
          
          <div class="md-form mb-5">
            <input type="email" id="Form-email5" class="form-control validate white-text"/>
            <label data-error="wrong" data-success="right" for="Form-email5">Your email</label>
          </div>

          <div class="md-form pb-3">
            <input type="password" id="Form-pass5" class="form-control validate white-text"/>
            <label data-error="wrong" data-success="right" for="Form-pass5">Your password</label>
            <div class="form-group mt-4">
              <input class="form-check-input" type="checkbox" id="checkbox624"/>
              <label for="checkbox624" class="white-text form-check-label">Accept the<span class="green-text font-weight-bold">
                  Terms and Conditions</span></label>
            </div>
          </div>

          
          <div class="row d-flex align-items-center mb-4">

            
            <div class="text-center mb-3 col-md-12">
              <button type="button" class="btn btn-success btn-block btn-rounded z-depth-1">Sign up</button>
            </div>
            
          </div>
          
          
          <div class="row">

            
            <div class="col-md-12">
              <p class="font-small white-text d-flex justify-content-end">Have an account? <a href="#" class="green-text ml-1 font-weight-bold">
                  Log in</a></p>
            </div>
            
          </div>
         
        </div>
      </div>
    </div>
    
  </div>
</div>


<div class="text-center">
  <a href="" class="btn btn-default btn-rounded" data-toggle="modal" data-target="#darkModalForm">Launch modal
    register Form</a>
</div>
</React.Fragment>
)}


export default Login