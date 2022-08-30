import React, {useState} from 'react'
import "../../styles/customstyles.css/modal.css"

function Modal() {
  
const [modal, setModal] = useState(false);
     
  //function to change modal state to true (to open)
  const modalToggle = () =>{

  }  
  
    return(
      <div>
        <p>some text</p>
        <button type="button" className="btn btn-primary launch" data-toggle="modal" data-target="#staticBackdrop"> <i className="fa fa-info"></i> Get information
        </button>
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-body ">
                <div className="text-right"> <i className="fa fa-close close" data-dismiss="modal"></i> </div>
                
                <div className="px-4 py-5">

                    <h5 className="text-uppercase">Jonathan Adler</h5>



                <h4 className="mt-5 theme-color mb-5">Thanks for your order</h4>

                <span className="theme-color">Payment Summary</span>
                <div className="mb-3">
                    <hr className="new1"></hr>
                </div>

                <div className="d-flex justify-content-between">
                    <span className="font-weight-bold">Ether Chair(Qty:1)</span>
                    <span className="text-muted">$1750.00</span>
                </div>

                <div className="d-flex justify-content-between">
                    <small>Shipping</small>
                    <small>$175.00</small>
                </div>


                <div className="d-flex justify-content-between">
                    <small>Tax</small>
                    <small>$200.00</small>
                </div>
                
                <div className="d-flex justify-content-between mt-3">
                    <span className="font-weight-bold">Total</span>
                    <span className="font-weight-bold theme-color">$2125.00</span>
                </div>  



                <div classNameName="text-center mt-5">


                    <button className="btn btn-primary">Track your order</button>
                    


                </div>                   

                </div>


            </div>
        </div>
    </div>
</div>
      </div>
    ); 
};



export default Modal