import React, {useState, useEffect} from 'react';

const USERS_URL = 'https://example.com/api/users';
const PAGE_NUMBER = 0;

export default function Table () {
  const [users, setUsers]= useState([]);
  const [page,setPage] = useState(0);
  const [totalPages, setTotalPages]= useState(0);

  useEffect(()=> {
    //https://example.com/api/users?page=0
     const fetchData = async () => {
       try{
         const response = await fetch("https://example.com/api/users?page=0");
       
        // const response = await fetch(
        //  `${USERS_URL}?page=${page}`
        //);
         const jsonData = await response.json();
          console.log(jsonData);
         setUsers(jsonData);
          const totalCount = response.headers.get("X-Total-Count");
           setTotalPages(Math.ceil(totalCount / 10));

       } catch(error){
          console.error("Error fetching data:", error);

       }
     }
     fetchData();

  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, index)=> (
          <tr key={user.id}><td>{user.id}</td><td>{user.firstName}</td><td>{user.lastName}</td></tr>
        ))}
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn">first</button>
        <button className="previous-page-btn">previous</button>
        <button className="next-page-btn">next</button>
        <button className="last-page-btn">last</button>
      </section>
    </div>
  );
};
