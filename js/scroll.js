export function scroll(){
    window.addEventListener("scroll", () => {

        let winScroll = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
      
        document.getElementById("progress-bar").style.width = scrolled + "%";
    });
}
