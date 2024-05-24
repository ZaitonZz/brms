// components/LogoutButton.tsx

import React from 'react';
import { useRouter } from 'next/navigation';
import { logout } from '../util/logout';

interface LogoutButtonProps {
    className?: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ className }) => {
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push('/');
    };

    return (
        <button onClick={handleLogout} className={`btn btn-primary ${className}`}>
            Logout
        </button>
    );
};

export default LogoutButton;
