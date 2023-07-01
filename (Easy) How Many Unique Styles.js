/*
There are many different styles of music and many albums exhibit multiple styles. 
Create a function that takes an array of musical styles from albums 
and returns how many styles are unique.

//-- FOR TESTING -// 

uniqueStyles([
  "Dub,Dancehall",
  "Industrial,Heavy Metal",
  "Techno,Dubstep",
  "Synth-pop,Euro-Disco",
  "Industrial,Techno,Minimal"
]) ➞ 9

uniqueStyles([
  "Soul",
  "House,Folk",
  "Trance,Downtempo,Big Beat,House",
  "Deep House",
  "Soul"
]) ➞ 7
*/

const uniqueStyles = (a) => {
    let t = [];
    a.forEach(el => {
        el.split(",").forEach(ele => {
            t.push(ele);
        })
    })

    return [...new Set(t)].length;   
}

console.log(uniqueStyles([
    "Dub,Dancehall",
    "Industrial,Heavy Metal",
    "Techno,Dubstep",
    "Synth-pop,Euro-Disco",
    "Industrial,Techno,Minimal"
  ])) // 9
  
console.log(uniqueStyles([
    "Soul",
    "House,Folk",
    "Trance,Downtempo,Big Beat,House",
    "Deep House",
    "Soul"
  ])) // 7
