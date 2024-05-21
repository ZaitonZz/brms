// Function to set an item in localStorage with an expiry time
const setWithExpiry = (key: string, value: string, ttl: number) => {
    const now = new Date();
  
    // 'item' is an object which contains the original value and the expiry time
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
  
    localStorage.setItem(key, JSON.stringify(item));
  };
  
  // Function to get an item from localStorage, considering its expiry time
  const getWithExpiry = (key: string) => {
    const itemStr = localStorage.getItem(key);
  
    // If the item doesn't exist, return null
    if (!itemStr) {
      return null;
    }
  
    const item = JSON.parse(itemStr);
    const now = new Date();
  
    // If the item has expired, remove it from localStorage and return null
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
  
    return item.value;
  };
  
  // Function to check if an item is empty or expired
  const isLocalStorageKeyEmptyOrExpired = (key: string): boolean => {
    const value = getWithExpiry(key);
    return value === null || value === '';
  };

  export {setWithExpiry, getWithExpiry, isLocalStorageKeyEmptyOrExpired }