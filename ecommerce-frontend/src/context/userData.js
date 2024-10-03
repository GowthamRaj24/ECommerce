import React, { createContext, useState, useEffect } from "react";

const UserDataContext = createContext(null);

export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("/path/to/your/api/endpoint");
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <UserDataContext.Provider value={userData}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserDataContext;