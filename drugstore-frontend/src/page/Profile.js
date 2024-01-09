import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard'; 

const Profile = ({user, onTogglePremium, onToggleAdmin}) => {
  const [isPremium, setIsPremium] = useState(user.accessId === 2);
  const [isAdmin, setIsAdmin] = useState(user.accessId === 3);

  useEffect(() => {
    setIsPremium(user.accessId === 2);
    setIsAdmin(user.accessId === 3);
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

  const handleBecomeAdmin = async () => {
    try {
      if (!isAdmin && isPremium) {  // Check if the user is not already an admin and is premium
        const response = await updateUserAccessId(3);
  
        if (response.ok) {
          setIsAdmin(true);
          setIsPremium(false);  // Assuming becoming an admin cancels premium status
          onToggleAdmin();
        } else {
          console.error('Error updating access level:', await response.text());
        }
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };
  
  const handleCancelAdmin = async () => {
    try {
      if (isAdmin) {  // Check if the user is currently an admin
        const response = await updateUserAccessId(2);
  
        if (response.ok) {
          setIsAdmin(false);
          onToggleAdmin();
        } else {
          console.error('Error updating access level:', await response.text());
        }
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
      
      <ProfileCard user={user} onTogglePremium={onTogglePremium} isPremium={isPremium} handleCancelPremium={handleCancelPremium} handleBecomePremium={handleBecomePremium} onToggleAdmin={onToggleAdmin} isAdmin={isAdmin} handleCancelAdmin={handleCancelAdmin} handleBecomeAdmin={handleBecomeAdmin} />

    </div>
  );
};

export default Profile;