let urlLgpd = 'https://jsonplaceholder.typicode.com/posts'
let lgpdHtml = `
<div class="lgpd">
    <div class="lgpd--left">
        Nós ututilizamos os Cookies para melhorar sua experiencia de usuário <br/>
        Para confeir detalhadamente todos os cookies utiulizados, leia nossa <a href="#">politica de privacidade</a>
    </div>
    <div class="lgpd--right">
        <button class="btn">OK</button>
    </div>
</div>
<link rel="stylesheet" href="style.css"/>


`;  
let lcStorage = localStorage.getItem('lgpd');
if(!lcStorage){
    document.body.innerHTML += lgpdHtml;
    let lgpdArea = document.querySelector('.lgpd');
    let lgpdButton = lgpdArea.querySelector('button');

    lgpdButton.addEventListener('click', async ()=>{
        lgpdArea.remove();
        let result = await fetch(urlLgpd);
        let json = await result.json();

        if(json.error !== ''){
            let id = '123' // json.id
            localStorage.setItem('lgpd', id)
        }
    })
}