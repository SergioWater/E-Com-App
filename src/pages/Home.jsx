import { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
    console.log(data)
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
        {users.map((users) => {
            <User/>
        })}
    </div>

  );
}

export default Home;
