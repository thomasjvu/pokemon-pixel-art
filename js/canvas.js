const canvas = document.querySelector('canvas') // sets the canvas to a new canvas const
const c = canvas.getContext('2d') // sets the 2D context of the canvas to the `c` const

const img = document.querySelector('#pokemon') // sets our image to the const `img`
const radius = 250
let isImage = true

canvas.width = innerWidth - 10
canvas.height = innerHeight + 500

class Dot {
    constructor(x, y, r, g, b, imageX, imageY) {
        this.x = x
        this.y = y
        this.r = r
        this.g = g
        this.b = b
        this.imageX = imageX
        this.imageY = imageY
    }

    draw(c) {
        c.beginPath()
        c.arc(this.x, this.y, 2, 0, 2 * Math.PI, false)
        c.fillStyle = 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')'
        c.fill()
    }
}

function animateDot(dot, canvas) {
    const rand = Math.random() * Math.PI * 2
    let x = Math.sin(rand) * radius + canvas.width / 2
    let y = Math.cos(rand) * radius + canvas.height / 2

        if (isImage) {
            x = dot.imageX
            y = dot.imageY
        }
            gsap.to(dot, {
                duration: 1.75 + Math.random(),
                x,
                y,
                ease: 'cubic.inOut',
                onComplete: () => {
                    animateDot(dot, canvas)
                }
    })
}


addEventListener('click', () => {
    isImage = !isImage
})

addEventListener('load', e => {
    c.drawImage(img, 0, 0)
    const imageData = c.getImageData(0, 0, img.naturalWidth, img.naturalHeight).data

    const dots = []
    const pixels = []

    for (let i = 0; i < imageData.length; i+=4) {
        if (imageData[i] === 0) continue

        const x = (i / 4) % img.naturalWidth
        const y = Math.floor(Math.floor(i / img.naturalHeight) / 4)

            if(x % 12 === 0 && y % 12 === 0) {
                pixels.push({
                    x,
                    y,
                    r: imageData[i],
                    g: imageData[i+1],
                    b: imageData[i+2]
            })
        }
    }
    


    pixels.forEach((pixel, i) => {
        const imageX = pixel.x + canvas.width / 2 - img.naturalWidth / 2
        const imageY = pixel.y + canvas.height / 2 - img.naturalHeight / 2
        const rand = Math.random() * Math.PI * 2
        const x = Math.sin(rand) * radius + canvas.width / 2
        const y = Math.cos(rand) * radius + canvas.height / 2
        dots.push(new Dot(x, y, pixel.r, pixel.g, pixel.b, imageX, imageY))


        animateDot(dots[i], canvas)

    })


    function animate() {
        requestAnimationFrame(animate)
        c.clearRect(0, 0, innerWidth - 10, innerHeight + 500) // clear context (x,y,height,width)
        dots.forEach(dot => {
            dot.draw(c)
            // dot.x++
        })
    }

    animate()
})
