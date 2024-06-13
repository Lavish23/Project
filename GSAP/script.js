function page1Animation()
{

  var tl=gsap.timeline({delay:1});
  
  tl.from("nav h2",
    {
      y:"-30",
      duration:0.3,
      opacity:0,
    }
  )
  
  tl.from("nav h4,.btn",
    {
      y:"-30",
      duration:0.3,
      opacity:0,
      stagger:0.2
    })
  
    tl.from(".center1 h1",
      {
        x:-100,
        duration:0.5,
        opacity:0,
      }
    )
    tl.from(".center1 p",
    {
      y:100,
      duration:0.5,
      opacity:0,
    }
  )
  
  tl.from(".center1 button",
  {
    duration:0.5,
    opacity:0,
  }
  )
  
  tl.from(".center2 img",
  {
    x:100,
    duration:0.5,
    opacity:0,
  },"-=1")
  
  
  
  tl.from(".section1bottom img",
  {
    y:30,
    duration:0.5,
    opacity:0,
    stagger:0.15
  })
}


function page2Animation()
{
  
  var tl2=gsap.timeline({
    scrollTrigger:{
      trigger:".section2",
      scroller:"body",
      markers:false,
      start:"top 50%",
      end:"top 30%",
      scrub:2
    }
  })
  
  tl2.from(".services",
  {
    y:30,
    opacity:0,
    duration:0.3
  }
)

tl2.from(".elem.line1.left",
{
  x:-200,
  opacity:0,
  duration:3
},"anim1")

tl2.from(".elem.line1.right",
{
  x:200,
  opacity:0,
  duration:3
},"anim1")
tl2.from(".elem.line2.left",
{
  x:-200,
  opacity:0,
  duration:3
},"anim2")

tl2.from(".elem.line2.right",
{
  x:200,
  opacity:0,
  duration:3
},"anim2")

}  

page1Animation();
page2Animation();