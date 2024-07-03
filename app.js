fetch("https://restcountries.com/v3.1/all")
    .then(res => res.jason())
    .then(data => console.log(data))

fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        let tblCountries = document.getElementById("tbl");

        let tblBody = `<tr>
                    <th>Name</th>
                    <th>Flag</th>
                        </tr>`;

        data.forEach(element => {
            tblBody += `<tr>
            <td>${element.name.common}</td>
            <td>${element.name.region}</td>
            <td>${element.name.area}</td>
            <td>${element.flag}</td>
                </tr>`

            console.log(element.name.common);

        });

        tblCountries.innerHTML = tblBody;
    })

function serchCountries() {
    let searchValue = document.getElementById("txtSearchValue").value;

    let officialName = document.getElementById("officialName");
    let name = document.getElementById("name");
    let region = document.getElementById("region");
    let area = document.getElementById("area");
    let img = document.getElementById("img");

    console.log(searchValue);
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        .then(res => res.json())
        .then(data => {

            data.forEach(obj => {
                officialName.innerText = obj.name.official;
                name.innerText = obj.name.common;
                region.innerText = obj.name.region;
                area.innerText = obj.name.area;

                img.innerHTML = `<img src="${obj.flags.png}" alt="">`
            })
            console.log(data);
        })
}