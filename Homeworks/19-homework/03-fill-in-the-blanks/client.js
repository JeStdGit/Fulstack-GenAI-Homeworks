document.getElementById("load-btn").addEventListener("click", async (e) => {
    try {
        const leaguesRes = await fetch("http://localhost:3000/leagues", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })

        const leagues = await leaguesRes.json()

        const teamRequests = []
        for (const league of leagues) {
            teamRequests.push(
                fetch("http://localhost:3000/bulk-teams", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(league.teams)
                })
            )
        }

        const teamHeaders = await Promise.all(teamRequests)

        const teamBodyRequests = []
        for (const header of teamHeaders) {
            teamBodyRequests.push(header.json())
        }

        const teamsResponse = await Promise.all(teamBodyRequests)

        console.log(teamsResponse)
    } catch (error) {
        console.error({ data: error.message })
    }
})
