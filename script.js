console.log("Welcome to Raag");
let songIndex = 0;
let c = document.getElementById('0');
c.style.opacity = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('MasterPlay');
let masterPause = document.getElementById('MasterPause');
let mgif = document.getElementById('mgif');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let Time = document.getElementById('time');
let masterTime = document.getElementById('ftime');
let ps = document.querySelectorAll(".playsong");
let songItems = Array.from(document.getElementsByClassName('item'));
async function pause(){
    await sleep(3000);
}
let songs = [
    {songName: "Attention - Charlie Puth", filePath: "1.mp3", coverPath: "1.png", t: "03:33"},
    {songName: "Love Me Like You Do", filePath: "2.mp3", coverPath: "2.jpg", t: "04:09"},
    {songName: "Girlfriend - Charlie Puth", filePath: "3.mp3", coverPath: "3.jpg", t: "02:57"},
    {songName: "Senorita", filePath: "4.mp3", coverPath: "4.jpg", t: "03:11"},
    {songName: "Rabba Mehar Kari", filePath: "5.mp3", coverPath: "5.jpg", t: "03:28"},
    {songName: "Najaa (From Sooryavanshi)", filePath: "6.mp3", coverPath: "6.jpg", t: "03:11"},
    {songName: "Hosanna", filePath: "7.mp3", coverPath: "7.jpg", t: "05:34"},
    {songName: "Liggi - Ritviz", filePath: "8.mp3", coverPath: "8.jpg", t: "03:01"},
    {songName: "Tera Hua", filePath: "9.mp3", coverPath: "9.jpg", t: "03:34"},
    {songName: "We Don't Talk Anymore", filePath: "10.mp3", coverPath: "10.jpg", t: "03:37"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("timestamp")[0].innerText = songs[i].t;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPause.style.opacity = 1;
        masterPause.style.cursor = "pointer";
        masterPlay.style.opacity = 0.5;
        masterPlay.style.cursor = "default";
        mgif.style.opacity = 1;
    }
})
masterPause.addEventListener('click', ()=>{
    if(audioElement.played){
        audioElement.pause();
        masterPause.style.opacity = 0.5;
        masterPause.style.cursor = "default";
        masterPlay.style.opacity = 1;
        masterPlay.style.cursor = "pointer";
        mgif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    var ct = parseInt(audioElement.currentTime);
    var min = parseInt(ct/60);
    var sec = ct%60;
    var mins;
    var secs;
    if(min<10){
        mins="0"+min;
    }else{
        mins=min;
    }
    if(sec<10){
        secs="0"+sec;
    }
    else{
        secs=sec;
    }
    var time = mins+":"+secs;
    Time.innerText=time;
    myProgressBar.value = progress;
    if(time==songs[songIndex].t){
        pause();
        if(songIndex>=9){
            songIndex = 0
        }
        else{
            songIndex += 1;
        }
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterTime.innerText = songs[songIndex].t;
        audioElement.currentTime = 0;
        audioElement.play();
        c.style.opacity = 1;
        c = document.getElementById(`${songIndex}`);
        c.style.opacity = 0;
        masterPause.style.opacity = 1;
        masterPause.style.cursor = "pointer";
            masterPlay.style.opacity = 0.5;
        masterPlay.style.cursor = "default";
            mgif.style.opacity = 1;
    }
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

ps.forEach(function (element){
    element.addEventListener('click', function (e){ 
    songIndex= parseInt(e.currentTarget.id);
    c.style.opacity = 1;
    c = document.getElementById(`${songIndex}`);
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
        masterPause.style.cursor = "pointer";
    masterPlay.style.opacity = 0.5;
        masterPlay.style.cursor = "default";
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    mgif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    c.style.opacity = 1;
    c = document.getElementById(`${songIndex}`);
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
        masterPause.style.cursor = "pointer";
        masterPlay.style.opacity = 0.5;
        masterPlay.style.cursor = "default";
        mgif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterTime.innerText = songs[songIndex].t;
    audioElement.currentTime = 0;
    audioElement.play();
    c.style.opacity = 1;
    c = document.getElementById(`${songIndex}`);
    c.style.opacity = 0;
    masterPause.style.opacity = 1;
        masterPause.style.cursor = "pointer";
    masterPlay.style.opacity = 0.5;
        masterPlay.style.cursor = "default";
    mgif.style.opacity = 1;
})