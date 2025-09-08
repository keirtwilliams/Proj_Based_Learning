function ProfileList(){
  
    const users = [
        {id: "1", name:"Keirt William Gemperle", role:"Front-end Developer", bio:"Intuitive in front-end development"}
        ,{id: "2", name:"Keirt William Gemperle III", role:"Back-end Developer", bio:"Good in handling Databases"}
        ,{id: "3", name:"Keirt William Gemperle VI", role:"UI/UX Designer", bio:"Interested in designing products"}
    ];

    return(
    <div className="container">
        {users.map((newUsers) => (
            <ProfileList 
            key={newUsers.id}
            name={newUsers.name}
            role={newUsers.role}
            bio={newUsers.bio}
            />
        ))}
    </div>        

    )
};
export default ProfileList;