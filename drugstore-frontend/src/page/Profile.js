import React, { useState, useEffect } from 'react';

const Profile = ({ user, onTogglePremium }) => {
  const [isPremium, setIsPremium] = useState(user.accessId === 2);

  useEffect(() => {
    setIsPremium(user.accessId === 2);
  }, [user.accessId]);

  const handleBecomePremium = async () => {
    try {
      const response = await updateUserAccessId(2);

      if (response.ok) {
        setIsPremium(true);
        onTogglePremium();
      } else {
        console.error('Error updating access level:', await response.text());
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

  const handleCancelPremium = async () => {
    try {
      const response = await updateUserAccessId(1);

      if (response.ok) {
        setIsPremium(false);
        onTogglePremium();
      } else {
        console.error('Error updating access level:', await response.text());
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

  const updateUserAccessId = async (newAccessId) => {
    return fetch(`https://localhost:7227/Users/${user.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: user.username,
        email: user.email,
        passwordHash: user.password,
        accessId: newAccessId,
      }),
    });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>Profile</h2>
        </div>
        <div className="card-body">
          <p className="card-text">
            <strong>Username:</strong> {user.username}
          </p>
          <p className="card-text">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="card-text">
            <strong>Access Level:</strong> {user.accessId === 3 ? 'Admin' : (isPremium ? 'Premium' : 'Standard')}
          </p>

          {(user.accessId === 1 || user.accessId === 2 || user.accessId === 3) && (
            <div className="btn-group" role="group">
              <button
                onClick={handleBecomePremium}
                disabled={user.accessId === 3 || isPremium}
                className="btn btn-primary"
              >
                Become Premium
              </button>
              <button
                onClick={handleCancelPremium}
                disabled={user.accessId === 3 || !isPremium}
                className="btn btn-secondary"
              >
                Cancel Premium
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;