import {useState} from 'react'


export default function Album({id, title, userId, onDelete,  onUpdate, users }){
    const [isEdit, setIsEdit] = useState(false)

    //edits the component on clicking edit
    const handleUpdate = () =>{
        setIsEdit(!isEdit);
    }

    //deletes the album with given id
    const handleDelete = () => {
        onDelete(id);
    }


    //on clicking the update the button, the given values will be updated
    const handleOnUpdateSubmit = (e)=>{
        e.preventDefault();
        onUpdate(id, e.target.title.value, e.target.userId.value)
        setIsEdit(!isEdit);
    }

    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/albums`)
    //     .then((res)=>res.json())
    //     .then((json)=>setId(json))
    //     .then((json)=>console.log(json))
    //     },[])
      

    return (
        <div className='bg-light border-dark rounded m-2 text-center'>
            {
                //on Edit, previous values can be visible at the input fields and can be modified as per the requirements
                isEdit?(
                    <form onSubmit={handleOnUpdateSubmit} >    
                    <h2>Update</h2>                
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"  name="title" defaultValue={title} />
                            </div>
                            <label className="col-sm-2 col-form-label">UserId</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"  name="userId" defaultValue={userId} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10 offset-sm-2">
                            <button type="submit" className="btn btn-primary" onSubmit={handleOnUpdateSubmit}>Update</button>
                            </div>
                        </div>
                    </form>
                                
                ):(
                    //on rendering it renders the album component
                    <div className="user m-3">
                        <span className="text-dark">{title}</span><br/>
                        <span className="text-dark">{userId}</span><br/>
                        <div className='d-block'>
                            <button className='btn btn-primary rounded m-3'  onClick={handleUpdate}>Edit</button>
                            <button className='btn btn-danger rounded m-3' onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                )
            } 
        </div>
    )
    
}
