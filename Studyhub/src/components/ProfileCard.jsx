function ProfileCard({name, role, bio}){
    return (
        <div className="profile-card">
              <h1 className="infos">{name} - {role}</h1>
              <p className="parag">{bio}</p>
        </div>
    )

};
export default ProfileCard;