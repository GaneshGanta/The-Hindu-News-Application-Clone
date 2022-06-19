let sports=[
    {
        image:"https://www.thehindu.com/entertainment/movies/ed2s9r/article65536226.ece/alternates/SQUARE_115/jon.jpeg",
        head:"MOVIES",
        news:"Jon Snow ‘Game of Thrones’ spin-off series in the works with Kit Harington"

    },
    {
        image:"https://www.thehindu.com/entertainment/movies/9otmfg/article65536591.ece/alternates/SQUARE_115/vaashi.jpeg",
        head:"MOVIES",
        news:"‘Vaashi’ movie review: Never soars above the middling, watchable category"
    },
    {
        image:"https://www.thehindu.com/entertainment/movies/favpad/article65526520.ece/alternates/SQUARE_115/4.jpg",
        head:"MOVIES",
        news:"Why ‘Suzhal’ is a labour of love for Pushkar-Gayatri and team"
    },
    {
        image:"https://www.thehindu.com/incoming/wjn8a2/article65536268.ece/alternates/SQUARE_115/TEST_OSCAR_PROG.jpg",
        head:"MOVIES",
        news:"Oscar Isaac, Julianne Moore to headline Spotify podcast thriller 'Case 63'"
    },
    {
        image:"https://www.thehindu.com/entertainment/movies/573wpp/article65532687.ece/alternates/SQUARE_115/ryan.jpeg",
        head:"MOVIES",
        news:"Ryan Gosling’s first look as Ken from ‘Barbie’ is revealed"
    },
    {
        image:"https://www.thehindu.com/entertainment/movies/juuodw/article65532276.ece/alternates/SQUARE_115/aparna87.png",
        head:"MOVIES",
        news:"Aparna Balamurali: ‘My experience in ‘Soorarai Pottru’ still helps me’"
    }
]


sports.forEach(function(elem) {
    let box=document.createElement("div")
    let pic = document.createElement("img")
    let box2=document.createElement("div")
    pic.setAttribute("src",elem.image);
    let heading = document.createElement("p")
    heading.innerText=elem.head;
    let news = document.createElement("p")
    news.innerText=elem.news;
    box2.append(heading,news)
    box.append(pic,box2);
    document.querySelector("#newstag").append(box);
    
});

let section_div=[
    {
        pic:"https://www.thehindu.com/incoming/jbbaaz/article65532335.ece/alternates/SQUARE_115/virata%20parvam2.jpeg",
        heading:"MOVIES",
        para:"Documentary film ‘Lords of Lockdown’ is about four unsung heroes who rose to the occasion during the lockdown in 2020",
        editor:"SHILPA NAIR ANAND",
        subpara:"The film premiered at the New York Indian Film Festival. Shot in real time, it offers a view of what went down in the initial days of the lockdown"
    },
    {
        pic:"https://www.thehindu.com/incoming/v3w6yc/article65532268.ece/alternates/SQUARE_115/Ms%20Marvel%20-%20Stills%20-%20Disney%2B%20Hotstar%20%284%29.jpg",
        heading:"MOVIES",
        para:"Sana Amanat on ‘Ms Marvel’: ‘DDLJ not Baazigar’",
        editor:"MINI ANTHIKAD CHIBBER",
        subpara:"The executive producer of the MCU series, says the makers were looking to maintain quirkiness and at the same time show Kamala as a character who could potentially be side-by-side with the Avengers"
    },
    {
        pic:"https://www.thehindu.com/incoming/6j35v/article65533203.ece/alternates/SQUARE_115/10fr_Sethumaan%20film%20jpeg.jpg",
        heading:"MOVIES",
        para:"‘Seththumaan,’ a poignant tale on caste discrimination",
        editor:"THE HINDU BUREAU",
        subpara:"Seththumaan, based on Perumal Murugan’s short stories, explores the social hierarchies and their complexities"
    }
    
]

section_div.forEach(function(elem){
    let cont = document.createElement("div");
    let photo = document.createElement("img");
    photo.setAttribute("src",elem.pic);
    let head = document.createElement("p");
    head.innerText=elem.heading;
    let p = document.createElement("p")
    p.innerText=elem.para
    let writer=document.createElement("p")
    writer.innerText=elem.editor;
    let subp = document.createElement("p")
    subp.innerText=elem.subpara;

    cont.append(photo,head,p,writer,subp);
    document.querySelector(".sectiondiv").append(cont);

    
});

let article = [
    {
        comment:"Dominant Mumbai on the verge of final",
        discp:"Shaw’s men dismiss UP for 180, take overall lead to 346 with nine wickets in hand"
    },
    {
        comment:"‘My job is to stay one step ahead of the batters’",
        discp:"Focus is skill development, says Harshal"
    },
    {
        comment:"Confident India will look to force the series into the decider",
        discp:"Arshdeep or Umran may get a look-in; de Kock’s fitness still in the balance, but South..."
    },
    {
        comment:"India meets Pakistan in under-12 final",
        discp:"NEW DELHI"
    },
    {
        comment:"Neeraj headlines 37-member CWG squad",
        discp:"Long jumper Jeswin, marathoner Srinu and high jumper Tejaswin miss out"
    },
    {
        comment:"Vatsal Manikantan, Jaya Kapoor make two finals",
        discp:"CHANDIGARH"
    },
    {
        comment:"Meghana and Shahu take mixed air rifle crown",
        discp:"NEW DELHI"
    },
    {
        comment:"Ravishing Form, Siege Perilous, Triple Wish, Dedicated Boy, Del Mar and Imperial Power please",
        discp:"BENGALURU: Ravishing Form, Siege Perilous, Triple Wish,"
    },
    {
        comment:"Easy like Sunday morning",
        discp:"Baseball is the only field of endeavour where a man can succeed three times out of ten.."
    },
    {
        comment:"Badminton | Sameer, Ashwini-Sikki lose in Indonesia Open",
        discp:"Sameer Verma, a former world no. 11, went down 10-21 13-21 to sixth seeded Lee Zii Jia of.."
    },
    {
        comment:"NBA | As player or coach, Warriors boss Steve Kerr is champion material",
        discp:"The Golden State Warriors lead the NBA Finals series 3-2 against the Boston Celtics and.."
    },
    {
        comment:"Premier League announces 2022-23 season fixtures",
        discp:"In the Premier League opening week, Manchester City travel to West Ham, Liverpool play newly-promoted Fulham,"
    }
]

article.forEach(function(elem){

    cont1 = document.createElement("div")

    head1 = document.createElement("p")
    head1.innerText = elem.comment;

    news1 = document.createElement("p")
    news1.innerText = elem.discp;

    cont1.append(head1,news1);
    document.querySelector("#otherarticle").append(cont1);

})


let arr=[{url:"https://www.thehindu.com/entertainment/movies/ed2s9r/article65536226.ece/alternates/SQUARE_115/jon.jpeg",
para:"Jon Snow ‘Game of Thrones’ spin-off series in the works with Kit Harington"},
{url:"https://www.thehindu.com/entertainment/movies/9otmfg/article65536591.ece/alternates/SQUARE_115/vaashi.jpeg",
para:"‘Vaashi’ movie review: Never soars above the middling, watchable category"},
{url:"https://www.thehindu.com/entertainment/movies/favpad/article65526520.ece/alternates/SQUARE_115/4.jpg",
para:"Why ‘Suzhal’ is a labour of love for Pushkar-Gayatri and team"},
{url:"https://www.thehindu.com/incoming/wjn8a2/article65536268.ece/alternates/SQUARE_115/TEST_OSCAR_PROG.jpg",
para:"Oscar Isaac, Julianne Moore to headline Spotify podcast thriller 'Case 63'"},
{url:"https://www.thehindu.com/entertainment/movies/573wpp/article65532687.ece/alternates/SQUARE_115/ryan.jpeg",
para:"Ryan Gosling’s first look as Ken from ‘Barbie’ is revealed"},
{url:"https://www.thehindu.com/entertainment/movies/juuodw/article65532276.ece/alternates/SQUARE_115/aparna87.png",
para:" Aparna Balamurali: ‘My experience in ‘Soorarai Pottru’ still helps me’"},
]

    //   Moving - 1

let image=document.querySelector("#moving>img");
let content=document.querySelector("#moving>p");
let button=document.querySelectorAll("#moving>button");

button[0].addEventListener("click",display_left)
let num=0;

function display_left(){
    if(num==0){
        num=arr.length-1;
    }
    else{
        num--;
    }
    image.src=arr[num].url;
    content.innerText=arr[num].para;
}

button[1].addEventListener("click",function(){
    if(num==arr.length-1){
        num=0;
    }
    else{
        num++;
    }
    image.src=arr[num].url;
    content.innerText=arr[num].para;
});

    //   Moving - 2

let image2=document.querySelector("#moving2>img");
let content2=document.querySelector("#moving2>p");
let button2=document.querySelectorAll("#moving2>button");

button2[0].addEventListener("click",display_left2)
let num2=arr.length-1;

function display_left2(){
    if(num2==0){
        num2=arr.length-1;
    }
    else{
        num2--;
    }
    image2.src=arr[num2].url;
    content2.innerText=arr[num2].para;
}

button2[1].addEventListener("click",function(){
    if(num2==arr.length-1){
        num2=0;
    }
    else{
        num2++;
    }
    image2.src=arr[num2].url;
    content2.innerText=arr[num2].para;
});