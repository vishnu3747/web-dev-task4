document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        if (response.ok) {
            window.location.href = '/dashboard.html';
        } else {
            alert('Invalid email or password');
        }
    } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Please try again later.');
    }
});
