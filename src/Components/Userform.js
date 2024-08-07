import React, { useState } from 'react';

function Userform() {
    const [userDetail, setUserDetail] = useState({
        id:'',
        name: '',
        email: '',
        age: '',
        role: '',
        gender: ''
    });
    const [userArr, setUserArr] = useState([]);
    // const [status,setStatus]=useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetail(prevDetail => ({
            ...prevDetail,
            [name]: value
        }));
    };
    const handleUpdate=(i)=>{
    //   console.log(i,"oooo");
      const updateData=userArr.filter(data=>data.id===i.id);
      setUserDetail(prev=>({
        ...prev,
        id:updateData[0].id,
        name:updateData[0].name,
        email:updateData[0].email,
        age:updateData[0].age,
        role:updateData[0].role


      }))

    };
    const handleDelete=(i)=>{
        const arr=userArr;
        // console.log(i,"qqq")
        const index=userArr.findIndex(data=>data.id===i.id);
        // console.log(index,"rtrtr")
        if(index>-1)
        {
        arr.splice(index,1);
        setUserArr([...arr]);
        }

    }

    const submit = (e) => {
        e.preventDefault(); // Prevent form from submitting normally
        setUserArr(prevUserArr => [...prevUserArr, userDetail]);
        setUserDetail({
            id:'',
            name: '',
            email: '',
            age: '',
            role: '',
            gender: ''
        }); // Clear the form after submission
    };

    return (
        <div>
            <form>
            UserID:<input type='text' name='id' value={userDetail.id} onChange={handleChange} /><br />
                Username: <input type='text' name='name' value={userDetail.name} onChange={handleChange} /><br />
                Email: <input type='text' name='email' value={userDetail.email} onChange={handleChange} /><br />
                Age: <input type='text' name='age' value={userDetail.age} onChange={handleChange} /><br />
                Gender:
                <input type='radio' name='gender' value='male' checked={userDetail.gender === 'male'} onChange={handleChange} /> Male
                <input type='radio' name='gender' value='female' checked={userDetail.gender === 'female'} onChange={handleChange} /> Female<br />
                Role:
                <select name='role' value={userDetail.role} onChange={handleChange}>
                    <option value=''></option>
                    <option value='Intern'>Intern</option>
                    <option value='Associate'>Associate</option>
                    <option value='Developer'>Developer</option>
                </select><br />
                <button type='submit' onClick={submit}>
                    Submit</button>
            </form>
            {userArr.map((details, index) => (
                <div key={index}>
                    UserID:{details.id}<br />
                    Name: {details.name}<br />
                    Email: {details.email}<br />
                    Age: {details.age}<br />
                    Gender: {details.gender}<br />
                    Role: {details.role}<br />
                    <button onClick={()=>{handleUpdate(details);handleDelete(details)}}>Edit</button>
                    <button onClick={()=>handleDelete(details)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Userform;
