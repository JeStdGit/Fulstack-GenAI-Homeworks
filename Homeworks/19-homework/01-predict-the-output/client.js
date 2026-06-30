async function loadData() {
    console.log("A")

    const res1 = fetch("http://localhost:3000/leagues")
    const res2 = fetch("http://localhost:3000/teams")

    console.log("B")

    const [leaguesRes, teamsRes] = await Promise.all([res1, res2])

    console.log("C")

    const leagues = await leaguesRes.json()
    const teams = await teamsRes.json()

    console.log("D")
    console.log({ leagues, teams })
}

loadData()
console.log("E")

/*
Expected order:
A, B, E, C, D, { leagues, teams }

Explanation:
- "B" is logged before "E" because the async function starts running immediately.
- The fetch calls begin right away, but execution pauses at await Promise.all(...).
- That allows the caller to continue and log "E".
- Calling fetch before Promise.all lets both requests run in parallel.
*/
