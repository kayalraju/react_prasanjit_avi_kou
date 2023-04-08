import React,{useState} from 'react'

const SearchData = () => {
    const [users, setUsers] = useState([]);

  const fetchData = (e) => {
    const query = e.target.value;
    fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  return (
    <>
     <input onChange={fetchData} placeholder="Search User" />
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      
    </>
  )
}

export default SearchData