document.addEventListener("DOMContentLoaded", () => {
    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current = start,
        range = end-start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",100,2000,2000);
    counter("count2",0,500,3000);
    counter("count3",0,200,3000);
    counter("count4",0,50,3000);

})
function openBook(){

    window.open("book.html");

}

function openLogin(){
    window.open("login.html");
}