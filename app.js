let search = document.querySelector("#search");

function showfunction() {
    fetch(`https://api.github.com/users/${search.value}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error("User not found");
        }
        return response.json();
    })
    .then((data) => {
        let getdiv = document.querySelector(".nft");
        getdiv.innerHTML = `
        <div class='main'>
            <img class='tokenImage' src=${data.avatar_url} alt="NFT" />
            <h2>${data.login} ${data.id}</h2>
            <p class='description'>${data.bio}</p>
            <div class='tokenInfo'>
                <div class="price">
                    <p>Followers: ${data.followers} | Following: ${data.following} | Company: ${data.company}</p>
                </div>
            </div>
            <hr />
            <div class='creator'>
                <div class='wrapper'>
                    <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
                </div>
                <p><button type="button" class="btn btn-outline-secondary"><a href=${data.html_url} target="_blank">See Profile</a></button></p>
            </div>
        </div>`;
    })
    .catch((err) => {
        console.log(err);
        let getdiv = document.querySelector(".nft");
        getdiv.innerHTML = `<p>User not found</p>`;
    });
}


