import React  from 'react'
import {uploadFile} from '../utils/api';
import axios from 'axios';
import { EEXIST } from 'constants';

class Form  extends React.Component {
    constructor(){
          super()
          this.state = {file:''}
    }

    onfileChange =(e)=>{
         this.setState({
              file:e.target.files[0]
         })
    }

    onSubmit = e=>{
        
         let file =   this.state.file
         let formdata = new FormData()
         formdata.append('file',file)
         formdata.append('name','file')
        
        if(file){
            axios({
                url:'http://localhost:5001/api/v1/s3/upload_photo',
                method:'POST',
                headers:{},
                data:formdata
           }).then((res)=>{
                console.log(res)
           }).catch(err=>{console.log(err)})         
       }
       else{
            alert('please add a file ')
       }
        }

  render(){


     return(
        <div className="container custom_form">
            <div className="row d-flex justify-content-center" id="pad_1">
            <img className="img-custom img-fluid" src="https://www.thesun.co.uk/wp-content/uploads/2019/04/VP-GRAPHIC-SPAGHETTIFICATION.jpg" />
             </div>
            <form>
                <div class="custom-file"  >
                <input name="file" type="file" onChange={(e)=> this.onfileChange(e)} class="custom-file-input" id="validatedCustomFile"  />
                <label class="custom-file-label" for="validatedCustomFile">Whats in Here...</label>
          <div class="invalid-feedback">Example invalid custom file feedback</div>
           </div>
            <button  onClick={this.onSubmit} type="button" class="btn btn-primary custom_btn">Upload!</button>
           </form>
        </div>
     ) 
  }

}

export default Form