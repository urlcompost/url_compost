// create a new hydra-synth instance
var hydra = new Hydra({
    canvas: document.getElementById("myCanvas"),
    detectAudio: false
})
osc(10, 0.1, 0.8).rotate(0, 0.1).kaleid().color(-1, 1).out()

function feedback() {
    src(o1)
      .layer(src(o0).mask(shape(4, 0.4, 0)))
      .scrollX([0.005, -0.005])
      .scrollY(0.005)
      .out(o1)

    render(o1)
}

feedback();
