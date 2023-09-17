setInterval(()=>{
    let date = new Date()
    let htime = date.getHours()
    let mtime = date.getMinutes()
    let stime = date.getSeconds()

    let hrotation = 30 * htime + mtime/2;
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;


    let hour = document.getElementsByClassName('hour')[0]
    let minute = document.getElementsByClassName('minute')[0]
    let second = document.getElementsByClassName('second')[0]

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`

    
}, 1000)