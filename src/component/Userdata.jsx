const Userdata = ({user}) => {
    return(
        <>
            {
                user.map((curUser)=>{
                    const{id, name, email} = curUser;
                    const {street, city} = curUser.address;
                    return(
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{street}, {city}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Userdata;