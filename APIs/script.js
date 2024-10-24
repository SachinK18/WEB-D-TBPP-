document.getElementById("get-fact").addEventListener("click", fetchCatFact);

function fetchCatFact() {
    const apiUrl = "https://meowfacts.herokuapp.com/";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("cat-fact").innerText = data.data[0];
        })
        .catch(error => {
            console.error("Error fetching cat fact:", error);
            document.getElementById("cat-fact").innerText = "Failed to load cat fact. Try again!";
        });
}