// Function to authenticate user
async function authenticateUser(username, password) {
    try {
      const response = await fetch('http://localhost:5029/login/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.token; // Returning the authentication token
      } else {
        throw new Error('Authentication failed');
      }
  
    } catch (error) {
      console.error('Error authenticating user:', error.message);
      throw error;
    }
  }
  
  // Usage example
  const username = 'john_doe';
  const password = 'password123';
  
  authenticateUser(username, password)
    .then(token => {
      console.log('User authenticated. Token:', token);
    })
    .catch(error => {
      console.error('Failed to authenticate user:', error.message);
    });