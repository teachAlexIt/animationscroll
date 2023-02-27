console.log(window.screen.height);
function animation(){
  let animationElementList = document.querySelectorAll('.animation');
  window.addEventListener('scroll', function() {
    let scrollHeight = window.pageYOffset;
    console.log(scrollHeight);
    for (let i = 0;i < animationElementList.length; i++) {
      let animationElement = animationElementList[i];
      let animationElementPosition = animationElement.offsetTop;
      console.log(animationElementPosition);
      if ((scrollHeight + (window.screen.height * 0.8)) > animationElementPosition) {
        animationElement.classList.add('animation-element_show');
        if ((scrollHeight - (window.screen.height * 0.3)) > animationElementPosition) {
          animationElement.classList.remove('animation-element_show');
        }
      }else{
        animationElement.classList.remove('animation-element_show');
      }
    }
  })
}
animation();
