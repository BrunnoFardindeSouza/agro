const btn_menu = document.getElementsByClassName('btn_menu')[0];
const menuF = document.getElementsByClassName('menu_mobile')[0];

btn_menu.addEventListener('click',()=>{
    if(menuF.style.display=='flex'){
        menuF.style.display = 'none'
    }else{
        menuF.style.display='flex'
    }
});

window.onresize = ()=>{
    if(window.innerWidth >= 490){
        menuF.style.display='none'
    }else{

    }
};

const elementos  = [
    {
        tex1:'Aréas a venda em local rural em vilage do Sol Guarapari Es',
        tex2:'Lotes bem localizados em ruas principais'
    },
    {
        img1:'https://casacor.abril.com.br/wp-content/uploads/sites/7/2022/01/Casa-Liu-Raiz-Arquitetura-Foto-Leonardo-Giantomasi-2.jpg?quality=90&strip=info',

        img2:'https://casacor.abril.com.br/wp-content/uploads/sites/7/2022/01/Casa-Liu-Raiz-Arquitetura-Foto-Leonardo-Giantomasi-2.jpg?quality=90&strip=info'
    },
    {
        des1:'Area com 20.000m², campo society, poço de peixes, plantação e muito +',
        des2:'Área com casa pronta, imperdível!'
    },
]




const textos = [...document.getElementsByClassName('texto')];
const imagens = [...document.getElementsByClassName('imagem')];
const des = [...document.getElementsByClassName('des')];

async function editar(){
    textos.map((el,i,a)=>{
        if(i==0){
            // Texto-1
            const texto1 = el.firstElementChild;
            texto1.innerHTML=elementos[0].tex1

        }else{
            // Texto-2
            const texto2 = el.firstElementChild;
            texto2.innerHTML=elementos[0].tex2
        }

    })
    imagens.map((el,i,a)=>{
        if(i==0){
            //Imagem-1
            el.style.backgroundImage=`url("${elementos[1].img1}")`
        }else{
            //Imagem-2
            el.style.backgroundImage=`url("${elementos[1].img2}")`
        }

    })
    des.map((el,i,a)=>{
        if(i == 0){
            // Descrição-1
            el.firstElementChild.innerHTML=elementos[2].des1
        }else{
            // Descrição-2
            el.firstElementChild.innerHTML=elementos[2].des2
        }

    })
}
editar()