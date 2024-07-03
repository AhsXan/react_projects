/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
function UserID() {
const {userID}= useParams() 


    return (
        <div className='bg-lime-600'>
            {userID}
        </div>
    );
}

export default UserID;