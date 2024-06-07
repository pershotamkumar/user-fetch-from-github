
let search=document.querySelector("#search")
 function showfunction(){

fetch(`https://api.github.com/users/${search.value}`)
.then((data)=>{
    return data.json()
})
.then((data)=>{
    console.log(data)
    let getdiv=document.querySelector(".nft")
    getdiv.innerHTML +=`
    <div class='main'>
    <img class='tokenImage' src=${data.avatar_url} alt="NFT" />
    <h2>${data.login} ${data.id}</h2>
    <p class='description'>${data.bio}</p>
    <div class='tokenInfo'>
      <div class="price">
        <div>
        <p> followers ${data.followers} following ${data.following} Email:${data.email}</p> <br>
        </div>
      </div>
      <div class="duration">
        <ins>◷</ins>
        <p>11 days left</p>
      </div>
    </div>
    <hr />
    <div class='creator'>
      <div class='wrapper'>
        <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
      </div>
      <p><button type="button" class="btn btn-outline-secondary"><a href= ${data.following_url
        } target="_blank">see profile</a></button></p>
    </div>`
  
    


})
.catch((err)=>{
    console.log(err)
})
 }

