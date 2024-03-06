
document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const formData = new FormData(event.target);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });
    
    console.log(jsonData);

    window.location.href = 'error.html';
    
});