import React from 'react'

const Profile = () => {
    const dataProfile = (JSON.parse(localStorage.getItem('INFORMATION')))
    console.log(dataProfile);
    return (
        <main>
            <div>
                <form action="">
                    <input type="text"  value={dataProfile.name} />
                    <input type="email" value={dataProfile.email}/>
                    <img src={dataProfile.photo} alt="" />
                </form>
            </div>
        </main>
    )
}

export default Profile