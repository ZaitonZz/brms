
const host = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export async function fetchAccessLevel(username:string | null): Promise<number> {
    try{
        const response = await fetch(`${host}/api/Account/${username}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-store",
          });
          const accessLevel = response.json();
          return accessLevel;
    } catch(error) {
        console.error('Failed to fetch card:', error);
        return 0;
    }
}