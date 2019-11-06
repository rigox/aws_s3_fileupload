import axios from 'axios'

const base =  axios.create({
     baseURL:'http://localhost:5001/api/v1/s3'
})

export const  uploadFile = async(file)=>{
    console.log('form Data' , file)
    base.post('/upload_photo',{
        file:file
    }).then(e=>console.log(e))
    .catch(error => console.log(error))

    
}


