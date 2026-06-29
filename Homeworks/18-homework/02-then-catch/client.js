document.getElementById('btn').onclick = (event) => {
    console.log({
        message: 'Trying to get houses from server'
    })
    fetch('http://localhost:3000/houses', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(houses => {
            console.log({
                message: "Successfully got houses from server",
                data: houses
            })
            const housePromises = houses.map(house => {
                console.log({
                    message: `Trying to get politicians for '${house.name}' from server`
                })
                return fetch('http://localhost:3000/bulk-politicians', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(house.politicians)
                })
                    .then(response => response.json())
                    .then(politicians => {
                        console.log({
                            message: `Successfully got politicians for '${house.name}' from server`,
                            data: politicians
                        })

                        const rolesToFetch = [...new Set(politicians.map(p => p.role))]
                        console.log({
                            message: `Trying to get roles: ${rolesToFetch}, from server`
                        })

                        return fetch('http://localhost:3000/bulk-roles', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(rolesToFetch)
                        })
                            .then(response => response.json())
                            .then(roles => {
                                console.log({
                                    message: `Successfully got roles: ${rolesToFetch}, from server`,
                                    data: roles
                                })

                                return {
                                    name: house.name,
                                    politicians: politicians.map(politician => {
                                        return {
                                            ...politician,
                                            role: roles.find(role => role.id === politician.role)
                                        }
                                    })
                                }

                            })
                            .catch(error => console.error({
                                message: error.message,
                                endpoint: "/bulk-roles",
                                fullError: error
                            }))
                    })
                    .catch(error => console.error({
                        message: error.message,
                        endpoint: "bulk-politicians",
                        fullError: error
                    }))
            });

            Promise.all(housePromises)
                .then(finalData => {
                    console.log({
                        message: "Successfully mapped all data for houses dashboard",
                        data: finalData
                    });

                    renderGrid(finalData)
                })
        })
        .catch(error => console.error({
            message: error.message,
            endpoint: "/houses",
            fullError: error
        }))
}

// UI
function renderGrid(houses) {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    houses.forEach(house => {
        container.appendChild(HouseElement(house));
    });
}

function HouseElement(house) {
    const houseDiv = document.createElement('div');
    houseDiv.className = 'house-card';

    const title = document.createElement('h2');
    title.innerText = house.name.charAt(0).toUpperCase() + house.name.slice(1);
    houseDiv.appendChild(title);

    const politiciansList = document.createElement('div');
    house.politicians.forEach(politician => {
        politiciansList.appendChild(PolticianElement(politician));
    });

    houseDiv.appendChild(politiciansList);
    return houseDiv;
}

function PolticianElement(politician) {
    const elem = document.createElement('div');
    elem.id = `politician-${politician.id}`;
    elem.className = 'politician-item';

    const label = document.createElement('label');
    label.innerText = `${politician.first_name} ${politician.last_name}`;
    label.style.cursor = 'pointer'

    elem.appendChild(label);

    elem.onclick = () => openPoliticianDialog(politician);

    return elem;
}

function openPoliticianDialog(politician) {
    const dialog = document.getElementById('politician-dialog');

    document.getElementById('dialog-name').innerText = `${politician.first_name} ${politician.last_name}`;
    document.getElementById('dialog-id').innerText = politician.id;
    document.getElementById('dialog-email').innerText = politician.email;
    document.getElementById('dialog-role-name').innerText = politician.role ? politician.role.name : 'Unknown Role';
    document.getElementById('dialog-credentials').innerText = politician.role && politician.role.credentials ? politician.role.credentials.join(', ') : 'None';

    dialog.showModal();
}

const politicianDialog = document.getElementById('politician-dialog')
politicianDialog.onclick = (event) => {
    const rect = politicianDialog.getBoundingClientRect()

    const isClickOutside = (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    );

    if (isClickOutside) politicianDialog.close();
}
document.getElementById('close-dialog').onclick = () => politicianDialog.close()