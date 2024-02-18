let prompt = [
  {
    content: "Halooo holaaaaaa :D",
    btn1: "...",
    btn2: "Hellooooooo :D",
  },
  {
    content: "Today is your birthday...",
    btn1: "back",
    btn2: "Sooo.. :D?",
  },
  {
    content: "Just wan't to celebrate your birthday, 🌊",
    btn1: "Back, Im out. :(",
    btn2: "What's next? :O",
  },
  {
    content: "Wondering your gift?",
    btn1: "Back, Im out. :(",
    btn2: "Maybe?",
  },
  {
    content: "No gift, but I have some words...",
    btn1: "No toysss??? >:(",
    btn2: "Show me 👁️🫦👁️",
  },
  {
    btn1: "No.",
    content: "For real?? go back unless, ima cry TvT",
    btn2: "Nah, Imma back :D",
  },
];

function do_diagonal_anim(object = document.getElementById("content-box")) {
  let anim_class = "rotate-diagonal-1";
  let duration = 500;
  object.classList.forEach((e) => {
    console.log(e);
    if (e == anim_class) {
      return -1;
    }
  });
  object.classList.add(anim_class);
  setTimeout(() => {
    object.classList.remove(anim_class);
  }, duration);
}
function do_flip_scale_2(object = document.getElementById("content-box")) {
  let anim_class = "flip-scale-2-ver-left";
  let duration = 500;
  object.classList.forEach((e) => {
    console.log(e);
    if (e == anim_class) {
      return -1;
    }
  });
  object.classList.add(anim_class);
  setTimeout(() => {
    object.classList.remove(anim_class);
  }, duration);
}
function do_bounce_top(object = document.getElementById("content-box")) {
  let anim_class = "bounce-top";
  let duration = 900;
  object.classList.forEach((e) => {
    console.log(e);
    if (e == anim_class) {
      return -1;
    }
  });
  object.classList.add(anim_class);
  setTimeout(() => {
    object.classList.remove(anim_class);
  }, duration);
}
function do_slide_out_bck_center(
  object = document.getElementById("content-box"),
  callback = (e) => {}
) {
  let anim_class = "slide-out-bck-center";
  let duration = 1000;
  object.classList.forEach((e) => {
    console.log(e);
    if (e == anim_class) {
      return -1;
    }
  });
  object.classList.add(anim_class);
  setTimeout(() => {
    object.classList.remove(anim_class);
    callback(object);
  }, duration);
}
function render_content(frame_id) {
  let frame = prompt[frame_id];
  let text_e = document.getElementById("content-box-text");
  let btn_1 = document.getElementById("btn-prompt-1");
  let btn_2 = document.getElementById("btn-prompt-2");

  text_e.innerHTML = frame["content"];
  btn_1.innerHTML = frame["btn1"];
  btn_2.innerHTML = frame["btn2"];
  if(text_e.getAttribute("rendering") != "5"){
    text_e.setAttribute("current-rendered", text_e.getAttribute("rendering"))
  }
  text_e.setAttribute("rendering", frame_id);
}
function hide(object) {
  object.classList.add("disabled");

  object.classList.remove("active");
}
function show(object) {
  object.classList.add("active");

  object.classList.remove("disabled");
}
let count = 0;
document.getElementById("btn-prompt-2").addEventListener("click", (e) => {
  let text_e = document.getElementById("content-box-text");
  if (text_e.getAttribute("rendering") != "5") {
    if (count == 4) {
      do_slide_out_bck_center(document.getElementById("content-box"), (e) => {
        hide(document.getElementsByClassName("section")[0]);
        show(document.getElementsByClassName("section")[1]);
      });
      // hide(document.getElementsByClassName("section")[0])
      // show(document.getElementsByClassName("section")[1])
    } else {
      count += 1;
      do_bounce_top();
      render_content(count);
    }
  }else{
    do_bounce_top()
    render_content(Number(text_e.getAttribute("current-rendered")))
  }
});
document.getElementById("btn-prompt-1").addEventListener("click", (e) => {
  if (count != 0) {
    do_bounce_top();
    render_content(5);
  }
});
var canvas = document.getElementById("main-canvas");

var ctx = canvas.getContext("2d");
var displayWidth = document.getElementsByTagName("body")[0].offsetWidth;
var displayHeight = document.getElementsByTagName("body")[0].offsetHeight;
// var canvas = document.getElementById("sig-canvas");
var scale = 1;
canvas.style.width = displayWidth + "px";
canvas.style.height = displayHeight + "px";
canvas.width = displayWidth * scale;
canvas.height = displayHeight * scale;
console.log()
function drawHeart(fromx, fromy, tox, toy, lw, hlen, color) {
  var x = fromx;
  var y = fromy / 2;
  var width = lw;
  var height = hlen;

  ctx.save();
  ctx.beginPath();
  var topCurveHeight = height * 0.3;
  ctx.moveTo(x, y + topCurveHeight);
  // top left curve
  ctx.bezierCurveTo(x, y, x - width / 2, y, x - width / 2, y + topCurveHeight);

  // bottom left curve
  ctx.bezierCurveTo(
    x - width / 2,
    y + (height + topCurveHeight) / 2,
    x,
    y + (height + topCurveHeight) / 2,
    x,
    y + height
  );

  // bottom right curve
  ctx.bezierCurveTo(
    x,
    y + (height + topCurveHeight) / 2,
    x + width / 2,
    y + (height + topCurveHeight) / 2,
    x + width / 2,
    y + topCurveHeight
  );

  // top right curve
  ctx.bezierCurveTo(x + width / 2, y, x, y, x, y + topCurveHeight);

  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

// Example usage:
// var displayWidth = window.innerWidth;
// var displayHeight = window.innerHeight;
var heartWidth = displayWidth * 0.5; // 10% of screen width
var heartHeight = heartWidth * 0.5; // Maintain proportions

class heart {
  constructor(minw, maxw, start_h = 0, start_w = 0, speed=1) {
    this.minw = minw;
    this.maxw = maxw;
    this.w = 0
    this.start_h = canvas.height * 2;
    this.start_w = start_w;
    this.state = false
    this.speed = speed
  }
}
function spawn(hearts = 100){
    let list_of_h = []
    let number_instance = hearts
    for (let index = 0; index < number_instance; index++) {
        // const element = array[index];
        let start_w = displayWidth * Math.random();
        let minw = 20
        let maxw = 40 - 10 * Math.random() 
        let speed = 1 + Math.random()
        list_of_h.push(new heart(minw, maxw, canvas.height, start_w, speed))
    }
    let s = list_of_h
    console.log(s)
    setInterval(()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let index = 0; index < list_of_h.length; index++) {
            const element = list_of_h[index];
            if (element.w > element.maxw) {
                element.state = true;
            }
            if (element.w <= element.minw) {
                element.state = false;
            }
            if (!element.state) {
                element.w += 0.1;
            } else {
                element.w -= 0.1;
            }
            element.start_h = element.start_h - element.speed
            if(element.start_h < 0 - element.maxw){
                element.start_h = canvas.height * 2 + element.maxw
            }
            drawHeart(element.start_w, element.start_h, 200, 200, element.w, element.w, "#ff00004b");
        }
    }, 1)
}

spawn(15)
// setInterval(() => {
//   if (w > 20) {
//     state = true;
//   }
//   if (w <= 15) {
//     state = false;
//   }
//   if (!state) {
//     w += 0.1;
//   } else {
//     w -= 0.1;
//   }
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawHeart(displayWidth / 2, displayHeight / 2, 200, 200, w, w, "red");
// }, 10);
document.getElementById("btn-3").addEventListener("click", (e)=>{
    do_slide_out_bck_center(document.getElementsByClassName("section")[1], (e) => {
        hide(document.getElementsByClassName("section")[1]);
        show(document.getElementsByClassName("section")[2]);
      });
})