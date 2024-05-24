// util/logout.ts

export const logout = async () => {
    try {
        const response = await fetch('/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // Remove any client-side authentication tokens (e.g., from local storage)
            localStorage.removeItem('username');
        } else {
            console.error('Failed to log out');
        }
    } catch (error) {
        console.error('An error occurred while logging out:', error);
    }
};
