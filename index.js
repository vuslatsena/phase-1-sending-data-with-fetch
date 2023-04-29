// Add your code here
function submitData(name, email) {
  const formData = { name: name, email: email };
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(function(data){const id = data.id;
          document.body.append(id);})
    .catch(function(error) {
      document.body.append(error.message);
    });
}
