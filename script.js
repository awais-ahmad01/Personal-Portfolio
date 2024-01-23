console.log("Script running....");

document.querySelector('.cross').style.display = 'none';

document.querySelector('.hamburger').addEventListener('click', ()=>{
    document.querySelector('.side-bar').classList.toggle('goSidebar');
    
    if(document.querySelector('.side-bar').classList.contains('goSidebar')){
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        document.querySelector('.ham').style.display = 'none';
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline';
        },350);
  
    }

})