import React from 'react';

const Profile = ({ user, onTogglePremium }) => {
    const handleTogglePremium = async () => {
        console.log('User:', user);
      
        try {
            const response = await fetch(`https://localhost:7227/Users/${user.userId}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  userName: user.username,  
                  email: user.email,      
                  passwordHash: user.password, 
                  accessId: 2,
                }),
              });
              
      
          if (response.ok) {
            onTogglePremium();
          } else {
            console.error('Error updating access level:', await response.text());
          }
        } catch (error) {
          console.error('An unexpected error occurred:', error);
        }
      };
      
      

  return (
    <div>
      <h2>Profile</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Access Level:</strong> {user.accessId === 1 ? 'Standard' : 'Premium'}
      </p>

      {user.accessId === 1 && (
        <button onClick={handleTogglePremium}>Become Premium</button>
      )}
    </div>
  );
};

export default Profile;
