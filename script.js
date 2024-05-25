let album = [
    {
        songname: "Skyfall",
        url: "songs/1.mp3",
        image: "images/1.jpeg",
        time: "4:44"
    },
    {
        songname: "After Dark",
        url: "songs/2.mp3",
        image: "images/2.jpeg",
        time: "4:19"
    },
    {
        songname: "On My Way",
        url: "songs/3.mp3",
        image: "images/3.jpeg",
        time: "3:36"
    },
    {
        songname: "under the influence",
        url: "songs/4.mp3",
        image: "images/4.jpeg",
        time: "3:02"
    },
    {
        songname: "Gangster's Paradise",
        url: "songs/5.mp3",
        image: "images/5.jpeg",
        time: "4:16"
    },
    {
        songname: "We Don't Talk Anymore",
        url: "songs/14.mp3",
        image: "images/14.jpeg",
        time: "3:37"
    },
    {
        songname: "Discord",
        url: "songs/16.mp3",
        image: "images/16.jpeg",
        time: "3:16"
    },
    {
        songname: "Fairytale",
        url: "songs/17.mp3",
        image: "images/19.jpg",
        time: "2:17"
    },
    {
        songname: "Jalebi baby",
        url: "songs/18.mp3",
        image: "images/18.webp",
        time: "3:10"
    },
    {
        songname: "Beliver",
        url: "songs/19.mp3",
        image: "images/17.webp",
        time: "3:24"
    },
    {
        songname: "Marry on A cross",
        url: "songs/20.mp3",
        image: "images/21.jpeg",
        time: "4:04"
    },
    {
        songname: "Mi gente",
        url: "songs/21.mp3",
        image: "images/20.jpg",
        time: "3:05"
    },
    {
        songname: "harleys in hawaii",
        url: "songs/22.mp3",
        image: "images/22.jpeg",
        time: "3:14"
    },
    {
        songname: "Mi gente",
        url: "songs/23.mp3",
        image: "images/23.jpg",
        time: "5:22"
    },

]

let selectedsong = 0
let currentsong = 0

let container = document.querySelector(".container")

let containerImg = document.querySelector(".album ")

let allsongs = document.querySelector(".all-songs")

let songcard = document.querySelector(".all-songs")

let poster = document.querySelector(".songImg")

let topo = document.querySelector(".top")
let lowerside = document.querySelector(".bottom")
let arrow = document.querySelector(".circle")



let music = document.querySelector(".sidebar h1")
let sidebar = document.querySelector(".sidebar")
console.log(music)
let audio = new Audio()
let play = document.querySelector(".play")
let next = document.querySelector(".next")
let back = document.querySelector(".back")
let play1 = document.querySelector(".play-1")

let arrowLeft = document.querySelector(".arrowLeft")
let arrowright = document.querySelector(".arrowright")
let songcardh3 = document.querySelector(".song-card h3")
console.log(arrowLeft)
console.log(arrowright)


function albumSongs() {

    clutter = ''
    album.forEach(function (elem, index) {
        clutter += `
    <div class="album" id = "${index}">
        <img src="${elem.image}" alt="">
        </div>
        `

    })

    container.innerHTML = clutter
    audio.src = album[currentsong].url


}
albumSongs()
let songs = [
    {
        songname: "Let me down slowly",
        url: "songs/6.mp3",
        image: "images/6.jpeg",
        time: "2:49"
    },
    {
        songname: "Memory Reboot",
        url: "songs/7.mp3",
        image: "https://i.scdn.co/image/ab67616d0000b27342a71cca827a8d0abda07e49",
        time: "3:29"
    },
    {
        songname: "Murder In My Mind",
        url: "songs/8.mp3",
        image: "https://i.scdn.co/image/ab67616d00001e021440ffaa43c53d65719e0150",
        time: "2:25"
    },
    {
        songname: "My Ordinary Life",
        url: "songs/9.mp3",
        image: "https://lastfm.freetls.fastly.net/i/u/500x500/1c950c3d48bb8ded40c4cb27b736837b.jpg",
        time: "4:46"
    },
    {
        songname: "No",
        url: "songs/10.mp3",
        image: "https://m.media-amazon.com/images/I/511gIlhBLWL._UF1000,1000_QL80_.jpg",
        time: "3:42"
    },
    {
        songname: "Popular",
        url: "songs/11.mp3",
        image: "images/11.jpeg",
        time: "3:35"
    },
    {
        songname: "Starboy",
        url: "songs/12.mp3",
        image: "images/12.jpeg",
        time: "4:39"
    },
    {
        songname: "There's Nothing Holding Me Back",
        url: "songs/13.mp3",
        image: "images/13.jpeg",
        time: "3:35"
    },
    {
        songname: "Animal",
        url: "songs/15.mp3",
        image: "images/15.jpeg",
        time: "3:49"
    },

]

let h1 = document.querySelector(".right h1")
console.log(h1)

function bottom() {

    clutter = ''
    songs.forEach(function (elem, index) {
        clutter += `
        <div class="song-card" id = "${index}">
        <div class="part-1">
            <img src="${elem.image}" alt="">
            <h3>${elem.songname}</h3>
        </div>
        <div class="part-2">
            <h5>${elem.time}</h5>
            <h3><i class="ri-play-fill"></i></h3>
        </div>
    </div>
 `

    })

    allsongs.innerHTML = clutter
    audio.src = songs[selectedsong].url
    poster.style.backgroundImage = `url(${songs[selectedsong].image})`

}

bottom()

flag = 0
let fixedtime = document.querySelector(".duration")

allsongs.addEventListener("click", function (dets) {
    selectedsong = dets.target.id
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    h1.innerHTML = `<h1>${songs[selectedsong].songname}</h1>`
    fixedtime.innerHTML = `<div class="duration">${songs[selectedsong].time}</div>`
    songcardh3.style.color = "#5873FF"
    flag = 1
    bottom()
    audio.play()
    // songcard.style.border = " 2px solid white"

})
container.addEventListener("click", function (dets) {
    audio.src = album[dets.target.id].url
    poster.style.backgroundImage = `url(${album[dets.target.id].image})`
    h1.innerHTML = `<h1>${album[dets.target.id].songname}</h1>`
    fixedtime.innerHTML = `<div class="duration">${album[dets.target.id].time}</div>`
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    flag = 1
    audio.play()
})


play.addEventListener("click", function () {
    if (flag == 0) {
        audio.play()
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-fill"></i>`
        audio.pause()
        flag = 0
    }
})
play1.addEventListener("click", function () {
    if (flag == 0) {
        audio.play()
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        play1.innerHTML = `<i class="ri-pause-fill"></i>`
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-fill"></i>`
        play1.innerHTML = `<i class="ri-play-fill"></i>`
        audio.pause()
        flag = 0
    }
})

// flag2 = 0

next.addEventListener("click", function () {
    if (selectedsong < songs.length - 1) {
        selectedsong++
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        h1.innerHTML = `<h1>${songs[selectedsong].songname}</h1>`
        bottom()
        audio.play()
    } else {

    }
})
// next.addEventListener("click", function (e) {
//     if (e.target.id < album.length - 1) {
//         e.target.id++
//         audio.src = album[dets.target.id].url
//         play.innerHTML = `<i class="ri-pause-fill"></i>`
//         h1.innerHTML = `<h1>${album[e.target.id].songname}</h1>`
//         bottom()
//         audio.play()
//     } else {

//     }
// })


back.addEventListener("click", function () {
    if (selectedsong > 0) {
        selectedsong--
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        h1.innerHTML = `<h1>${songs[selectedsong].songname}</h1>`
        bottom()
        audio.play()
    } else {

    }
})


// next.addEventListener("click", function (dets) {
//     if (album[dets.target.id] < album.length - 1) {
//         album[dets.target.id]++
//         play.innerHTML = `<i class="ri-pause-fill"></i>`
//         // h1.innerHTML = `<h1>${album[dets.target.id].songname}</h1>`
//         albumSongs()
//         audio.play()
//     } else {

//     }
// })
// let progress = document.querySelector(".progress")
arrowright.addEventListener("click", function () {
    container.style.transform = "translateX(-100%)"
    console.log('hello')
})
arrowLeft.addEventListener("click", function () {
    container.style.transform = "translateX(0px)"
    console.log('hello')
})
let totaltime = songs[selectedsong].time
let currentTime = audio.currentTime


// audio.addEventListener("timeupdate", function (event) {
//     console.log(audio.currentTime)
//     console.log(totaltime)
//     // let progresstime = (currentTime / totaltime) * 100
//     console.log(event)
//     // console.log(progresstime)
//     progress.style.width = `${currentTime}px`

// })
flag2 = 0
music.addEventListener('click', () => {
    if (flag2 == 0) {
        console.log('helllllo')
        sidebar.style.display = "none"
        lowerside.style.width = "98%"
        arrow.style.display = " flex"
        flag2 = 1


    } else {
        // arrow.style.display = "none"
        flag2 = 0
    }

})
arrow.addEventListener("click", function () {
    sidebar.style.display = "block"
    lowerside.style.width = "80%"
    arrow.style.display = " none"
})

// LIKED SONGS

let heart = document.querySelector(".heart")
console.log(heart)
console.log("heloooooooooooo")

allsongs.addEventListener("timeUpdate", ()=>{
    console.log(selectedsong.duration, selectedsong.currentTime)
})