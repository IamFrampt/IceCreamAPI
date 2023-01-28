const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const { json } = require("express")
app.use(bodyParser.urlencoded({ extended: true }))


const PORT = process.env.PORT || 3000

const iceCream = {
    allIceCreams: [
        { ID: "1", Name: "Sandwich", Info: "Vaniljglass mellan mjuka chokladkex.", Type: "Glass", Company: "GB", nutritionalContent: { Energy: { Calorie: 187, Kilojoules: 784 }, Fat: 7.4, Salt: 0.29, Carbohydrates: 27, Protein: 3.1 } },
        { ID: "2", Name: "Piggelin", Info: "Isglass med smak av tuttifrutti.", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 52, Kilojoules: 218 }, Fat: 0, Salt: 0.01, Carbohydrates: 13, Protein: 0 } },
        { ID: "3", Name: "Twister", Info: "Ananasglass med jordgubbs-citronfruktis och citronfruktis med citron-limesmak.", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 69, Kilojoules: 289 }, Fat: 0.5, Salt: 0.01, Carbohydrates: 16, Protein: 0.5 } },
        { ID: "4", Name: "Daimstrut", Info: "Vaniljglass med daimbitar i frasig strut.", Type: "Strut", Company: "GB", nutritionalContent: { Energy: { Calorie: 338, Kilojoules: 1410 }, Fat: 20, Salt: 0.31, Carbohydrates: 37, Protein: 3.9 } },
        { ID: "5", Name: "Nogger", Info: "Vaniljglass med chokladöverdrag och nougatkärna i mitten.", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 201, Kilojoules: 834 }, Fat: 14, Salt: 0.09, Carbohydrates: 15, Protein: 2.2 } },
        { ID: "6", Name: "88:an", Info: "Vanilj- och ischokladglass täckt med nötkrokant.", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 194, Kilojoules: 809 }, Fat: 12, Salt: 0.08, Carbohydrates: 19, Protein: 2.2 } },
        { ID: "7", Name: "Magnum Mandel", Info: "Vaniljglass täckt med magnumchoklad och krispiga mandelbitar.", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 244, Kilojoules: 1022 }, Fat: 15, Salt: 0.08, Carbohydrates: 22, Protein: 3.5 } },
        { ID: "8", Name: "Magnum Classic", Info: "Vaniljglass täckt med mörk mjölkchoklad.", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 239, Kilojoules: 1000 }, Fat: 14, Salt: 0.1, Carbohydrates: 24, Protein: 2.6 } },
        { ID: "9", Name: "Magnum Vit Chocklad & Jordgubb", Info: "Jordgubbsglass med jordgubbssås, doppad i vit choklad.", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 250, Kilojoules: 1046 }, Fat: 14, Salt: 0.11, Carbohydrates: 27, Protein: 3.3 } },
        { ID: "10", Name: "Cookie Dough", Info: "Vaniljglass med kakdeg- och chokladbitar.", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1150, Kilojoules: 4575 }, Fat: 65, Salt: 1, Carbohydrates: 130, Protein: 18 } },
        { ID: "11", Name: "Half Baked", Info: "Choklad- och vaniljglass med brownie-,kakdeg- och chokladbitar", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1064, Kilojoules: 4487 }, Fat: 52, Salt: 1, Carbohydrates: 136, Protein: 16 } },
        { ID: "12", Name: "Netflix & Chill'd", Info: "Gräddglass med jordnötssmör, virvel med söta och salta pretzelbitar", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1190, Kilojoules: 4678 }, Fat: 72, Salt: 0.9, Carbohydrates: 116, Protein: 22 } },
        { ID: "13", Name: "Karamel Sutra", Info: "Choklad- och kolagräddglass med chokladbitar och i mitten en kärna av kola", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1080, Kilojoules: 4487 }, Fat: 56, Salt: 1, Carbohydrates: 128, Protein: 16 } },
        { ID: "14", Name: "Baked Alaska", Info: "Vaniljglass med virvel av marshmallows och vitchokladbitar", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1134, Kilojoules: 4301 }, Fat: 67.2, Salt: 1, Carbohydrates: 117.6, Protein: 14.7 } },
        { ID: "15", Name: "Phish Food", Info: "Chokladglass med marshmallows, kolasås och chokladbitar", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1170, Kilojoules: 4524 }, Fat: 55, Salt: 0.3, Carbohydrates: 155, Protein: 16 } },
        { ID: "16", Name: "Strawberry Cheescake", Info: "Gräddglass med jordgubbscheesecake, jordgubbsbitar och en såsvirvel med grahamskex", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1040, Kilojoules: 3781 }, Fat: 58, Salt: 0.5, Carbohydrates: 114, Protein: 14 } },
        { ID: "17", Name: "Half'n Half", Info: "", Type: "Glasspaket", Company: "Lohilo", nutritionalContent: { Energy: { Calorie: 273, Kilojoules: 1141 }, Fat: 9.28, Salt: 0.28, Carbohydrates: 22.58, Protein: 22.75 } },
        { ID: "18", Name: "Mint Chocolate Chip", Info: "", Type: "Glasspaket", Company: "Lohilo", nutritionalContent: { Energy: { Calorie: 242, Kilojoules: 1008 }, Fat: 9.1, Salt: 0.17, Carbohydrates: 25.2, Protein: 22.75 } },
        { ID: "19", Name: "Salted Caramel", Info: "", Type: "Glasspaket", Company: "Lohilo", nutritionalContent: { Energy: { Calorie: 261, Kilojoules: 1087 }, Fat: 9.8, Salt: 0.39, Carbohydrates: 26, Protein: 18 } },
        { ID: "20", Name: "Sitting Bull", Info: "Vanilj & Jordgubbsglass doppad i strössel", Type: "Pinnglass", Company: "Triumf Glass", nutritionalContent: { Energy: { Calorie: 210, Kilojoules: 850 }, Fat: 12, Salt: 0.1, Carbohydrates: 22, Protein: 1.4 } },
        { ID: "21", Name: "Calippo", Info: "Isglass med smak av cola", Type: "Glass", Company: "GB", nutritionalContent: { Energy: { Calorie: 90, Kilojoules: 390 }, Fat: 0.5, Salt: 0.01, Carbohydrates: 22, Protein: 0.5 } },

    ]
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/allIceCreams", (req, res) => {
    res.send(iceCream.allIceCreams)
})

app.get("/allIceCreams/icecream/:id", (req, res) => {
    if (iceCream.allIceCreams[(req.params.id) - 1] != null) {
        res.send(iceCream.allIceCreams[(req.params.id) - 1])
    }
    
    res.statusCode = 401;
    res.send( "No ice cream with that id.")
})

app.post("/allIceCreams/add", (req, res) => {
    
    res.sendFile(__dirname + "/public/addData.html")
    let IceName = req.body.Name
    let IceInfo = req.body.Info
    let IceType = req.body.Type
    let IceCompany = req.body.Company
    let IceCalories = req.body.Calories
    let IceKilojoules = req.body.KiloJoules
    let IceFat = req.body.Fat
    let IceSalt = req.body.Salt
    let IceCarbohydrates = req.body.Carbohydrates
    let IceProtein = req.body.Protein

    for (let i = 0; i < iceCream.allIceCreams.length; i++) {
        if (iceCream.allIceCreams[i].Name === req.body.Name) {
            res.statusCode = 404;
            res.send("Ice cream already exist in the api.")
        }

        if(i === iceCream.allIceCreams.length-1 && res.statusCode != 404)
        {
            iceCream.allIceCreams.push({ ID: iceCream.allIceCreams.length + 1, Name: IceName, Info: IceInfo, Type: IceType, Company: IceCompany, nutritionalContent: { Energy: { Calorie: IceCalories, Kilojoules: IceKilojoules }, Fat: IceFat, Salt: IceSalt, Carbohydrates: IceCarbohydrates, Protein: IceProtein } })
            res.send("Ice cream added.")
        }
    }
})

app.delete("/allIceCreams/delete/:id", (req, res) => {
    if (iceCream.allIceCreams[(req.params.id)-1] != null) {
        iceCream.allIceCreams.splice((req.params.id) - 1, 1);
        IdIncrement();
        res.send(200)
    }
    res.send(404)
})
app.use(express.static(__dirname + '/public'));


app.listen(PORT, () => {
    console.log(`Hey Listen!, You're on port: ${PORT}`)
})

function IdIncrement() {
    for (let i = 0; i < iceCream.allIceCreams.length; i++) {
        iceCream.allIceCreams[i].ID = i + 1;
    }
}