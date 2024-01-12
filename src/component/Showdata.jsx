import { useState } from "react";
import { useEffect } from "react";
import Userdata from "./Userdata";

const API = "https://jsonplaceholder.typicode.com/users";

const Showdata = () => {
    const [user, setUser] = useState([]);
    const fetchUser = async (url) => {
        try {
            const res = await fetch(url);
            console.log(res);
            const data = await res.json();
            console.log(data);
            if (data.length > 0) {
                setUser(data);
            }
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchUser(API);
    }, []);
    return (
        <div className="mainsec">
            <div className="container">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                    <tbody>
                        <Userdata user={user} />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Showdata;