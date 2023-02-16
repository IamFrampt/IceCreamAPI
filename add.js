document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault()

    const Name = document.getElementById('Name').value
    const Info = document.getElementById('Info').value
    const Type = document.getElementById('Type').value
    const Company = document.getElementById('Company').value
    const Calories = document.getElementById('Calories').value
    const KiloJoules = document.getElementById('KiloJoules').value
    const Fat = document.getElementById('Fat').value
    const Salt = document.getElementById('Salt').value
    const Carbohydrates = document.getElementById('Carbohydrates').value
    const Protein = document.getElementById('Protein').value
    const data = { Name, Info,Type,Company,Calories,KiloJoules,Fat,Salt,Carbohydrates,Protein }

    const handleFormData = async () => {
        const sent = await fetch('/allicecreams/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        try {
            const response = await sent.json()
            iceCream.allIceCreams.push(iceCream.allIceCreams.length+1,response.Name,response.Info)
        } catch (error) {
            console.log(error)
        }
    }

    handleFormData()
})