let tbody = document.querySelector(".lister-list") // List wala div
let tr_arr = tbody.querySelectorAll("tr") // This will give us an array of all tr inside tbody


for(let i=0; i<tr_arr.length; i++)
{
    let individal_row = tr_arr[i]
    let td_ind = individal_row.querySelector(".titleColumn")
    let data = td_ind.querySelector("a").innerHTML
    console.log(data)
}
