const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const { json } = require("express")
app.use(bodyParser.urlencoded({ extended: true }))


const PORT = process.env.PORT || 3000

const iceCream = {
    allIceCreams: [
        { ID: "1", Name: "Sandwich", Info: "Vaniljglass mellan mjuka chokladkex.", Img:"https://www.gb.se/content/dam/unilever/heart/global/pack_shot/7310290002176_gb_sandwich_swe_2018-1484038-png.png.ulenscale.450x450.png", Type: "Glass", Company: "GB", nutritionalContent: { Energy: { Calorie: 187, Kilojoules: 784 }, Fat: 7.4, Salt: 0.29, Carbohydrates: 27, Protein: 3.1 } },
        { ID: "2", Name: "Piggelin", Info: "Isglass med smak av tuttifrutti.", Img:"https://www.gb.se/content/dam/unilever/heart/sweden/pack_shot/piggelin-1570534-png.png.ulenscale.450x450.png", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 52, Kilojoules: 218 }, Fat: 0, Salt: 0.01, Carbohydrates: 13, Protein: 0 } },
        { ID: "3", Name: "Twister", Info: "Ananasglass med jordgubbs-citronfruktis och citronfruktis med citron-limesmak.",Img:"https://media.martinservera.se/fl_lossy,f_auto,w_525,h_525,c_pad,b_white/prod/martinservera/produkt/3/050/105/DV02_308726_01.png", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 69, Kilojoules: 289 }, Fat: 0.5, Salt: 0.01, Carbohydrates: 16, Protein: 0.5 } },
        { ID: "4", Name: "Daimstrut", Info: "Vaniljglass med daimbitar i frasig strut.",Img:"https://www.gb.se/content/dam/unilever/heart/sweden/pack_shot/product_glorifier/ice_cream/out_of_home_ice_cream/heartbrand_glassstrut_daim_160_ml/8000920502204_daimstrut-1209719-png.png.ulenscale.450x450.png", Type: "Strut", Company: "GB", nutritionalContent: { Energy: { Calorie: 338, Kilojoules: 1410 }, Fat: 20, Salt: 0.31, Carbohydrates: 37, Protein: 3.9 } },
        { ID: "5", Name: "Nogger", Info: "Vaniljglass med chokladöverdrag och nougatkärna i mitten.",Img:"https://www.gb.se/content/dam/unilever/heart/sweden/pack_shot/7310290002275_nogger_classic-png-1275169-png.png.ulenscale.450x450.png", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 201, Kilojoules: 834 }, Fat: 14, Salt: 0.09, Carbohydrates: 15, Protein: 2.2 } },
        { ID: "6", Name: "88:an", Info: "Vanilj- och ischokladglass täckt med nötkrokant.",Img:"https://www.gb.se/content/dam/unilever/heart/sweden/pack_shot/7310290002268_88an-png-1275160-png.png.ulenscale.450x450.png", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 194, Kilojoules: 809 }, Fat: 12, Salt: 0.08, Carbohydrates: 19, Protein: 2.2 } },
        { ID: "7", Name: "Magnum Mandel", Info: "Vaniljglass täckt med magnumchoklad och krispiga mandelbitar.", Img:"https://varsego.se/storage/F2120CD9752DF67F1FDCC36B79063B86AF7AFFC53169697A2FCF29203D25BE0D/faf914de863c44bead45749f7f06ab70/500-500-0-png.Png/media/5e6a7c4a2c2246d5a27d5c0eef34bd6a/10570%20Magnum%20Mandel.png", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 244, Kilojoules: 1022 }, Fat: 15, Salt: 0.08, Carbohydrates: 22, Protein: 3.5 } },
        { ID: "8", Name: "Magnum Classic", Info: "Vaniljglass täckt med mörk mjölkchoklad.",Img:"https://d2rfo6yapuixuu.cloudfront.net/h72/h9d/8964290871326/08000920500200.jpg_1504003855003_master_axfood_400", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 239, Kilojoules: 1000 }, Fat: 14, Salt: 0.1, Carbohydrates: 24, Protein: 2.6 } },
        { ID: "9", Name: "Magnum Vit Chocklad & Jordgubb", Info: "Jordgubbsglass med jordgubbssås, doppad i vit choklad.", Img:"https://varsego.se/storage/05CF4480FEF3A789726657F9D526A353DE3FFE08A12C7610DB7B53CA6D5A3CC8/4fd192e2f7664978a6b276bdbf77ad5b/500-500-0-png.Png/media/f04fa741f1ba400db8331b0a1a72ac0c/10789%20Magnum%20Strawberry%20White.png", Type: "Pinnglass", Company: "GB", nutritionalContent: { Energy: { Calorie: 250, Kilojoules: 1046 }, Fat: 14, Salt: 0.11, Carbohydrates: 27, Protein: 3.3 } },
        { ID: "10", Name: "Cookie Dough", Info: "Vaniljglass med kakdeg- och chokladbitar.",Img:"https://www.benjerry.se/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/cookie-dough-detail.png", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1150, Kilojoules: 4575 }, Fat: 65, Salt: 1, Carbohydrates: 130, Protein: 18 } },
        { ID: "11", Name: "Half Baked", Info: "Choklad- och vaniljglass med brownie-,kakdeg- och chokladbitar", Img:"https://www.benjerry.se/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/half-baked-detail.png", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1064, Kilojoules: 4487 }, Fat: 52, Salt: 1, Carbohydrates: 136, Protein: 16 } },
        { ID: "12", Name: "Netflix & Chill'd", Info: "Gräddglass med jordnötssmör, virvel med söta och salta pretzelbitar", Img:"https://www.benjerry.se/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/netflix-chilld-detail.png", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1190, Kilojoules: 4678 }, Fat: 72, Salt: 0.9, Carbohydrates: 116, Protein: 22 } },
        { ID: "13", Name: "Karamel Sutra", Info: "Choklad- och kolagräddglass med chokladbitar och i mitten en kärna av kola", Img:"https://www.benjerry.se/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/karamel-sutra-detail-closed.png", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1080, Kilojoules: 4487 }, Fat: 56, Salt: 1, Carbohydrates: 128, Protein: 16 } },
        { ID: "14", Name: "Baked Alaska", Info: "Vaniljglass med virvel av marshmallows och vitchokladbitar", Img:"https://www.benjerry.se/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/baked-alaska_465ml_detail.png", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1134, Kilojoules: 4301 }, Fat: 67.2, Salt: 1, Carbohydrates: 117.6, Protein: 14.7 } },
        { ID: "15", Name: "Phish Food", Info: "Chokladglass med marshmallows, kolasås och chokladbitar", Img:"https://www.benjerry.se/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/phish-food-detail.png", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1170, Kilojoules: 4524 }, Fat: 55, Salt: 0.3, Carbohydrates: 155, Protein: 16 } },
        { ID: "16", Name: "Strawberry Cheescake", Info: "Gräddglass med jordgubbscheesecake, jordgubbsbitar och en såsvirvel med grahamskex", Img:"https://www.benjerry.se/files/live/sites/systemsite/files/flavors/products/eu/pints/harmony/strawberry-cheesecake-detail.png", Type: "Pint", Company: "Ben & Jerry", nutritionalContent: { Energy: { Calorie: 1040, Kilojoules: 3781 }, Fat: 58, Salt: 0.5, Carbohydrates: 114, Protein: 14 } },
        { ID: "17", Name: "Half'n Half", Info: "Vanilj- och chokladglass med kakbitar", Img:"https://lohilo.se/img/dokument/bibliotek/Image/nyhalf.png?w=683", Type: "Glasspaket", Company: "Lohilo", nutritionalContent: { Energy: { Calorie: 273, Kilojoules: 1141 }, Fat: 9.28, Salt: 0.28, Carbohydrates: 22.58, Protein: 22.75 } },
        { ID: "18", Name: "Mint Chocolate Chip", Info: "Frisk och fräsch mintglass fylld med mintchokladbitar.", Img:"https://assets.icanet.se/t_product_large_v1,f_auto/7391881831139.jpg", Type: "Glasspaket", Company: "Lohilo", nutritionalContent: { Energy: { Calorie: 242, Kilojoules: 1008 }, Fat: 9.1, Salt: 0.17, Carbohydrates: 25.2, Protein: 22.75 } },
        { ID: "19", Name: "Salted Caramel", Info: "Krämig glass med dulce de lechesmak och en fantastisk salt karamellsås.", Img:"https://d2rfo6yapuixuu.cloudfront.net/h39/he8/13332386742302/7398818389992_1661883644960_master_axfood_400", Type: "Glasspaket", Company: "Lohilo", nutritionalContent: { Energy: { Calorie: 261, Kilojoules: 1087 }, Fat: 9.8, Salt: 0.39, Carbohydrates: 26, Protein: 18 } },
        { ID: "20", Name: "Sitting Bull", Info: "Vanilj & Jordgubbsglass doppad i strössel", Img:"http://www.glassbilen.se/products/large/sitting_bull.gif", Type: "Pinnglass", Company: "Triumf Glass", nutritionalContent: { Energy: { Calorie: 210, Kilojoules: 850 }, Fat: 12, Salt: 0.1, Carbohydrates: 22, Protein: 1.4 } },
        { ID: "21", Name: "Calippo", Info: "Isglass med smak av cola", Img:"https://images.deliveryhero.io/image/fd-op/NV/08000920461235_C1C0.tif.png?height=176&dpi=2", Type: "Glass", Company: "GB", nutritionalContent: { Energy: { Calorie: 90, Kilojoules: 390 }, Fat: 0.5, Salt: 0.01, Carbohydrates: 22, Protein: 0.5 } },

    ]
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/allIceCreams", (req, res) => {
    res.send(iceCream.allIceCreams)
})

app.get("/formExample", (req, res) => {
    res.sendFile(__dirname + "/public/formexample.html")
})

app.get("/allIceCreams/icecream/:id", (req, res) => {
    var index = iceCream.allIceCreams.findIndex(x => x.ID == req.params.id)
    if(iceCream.allIceCreams[index] != null)
    {
        res.send(iceCream.allIceCreams[index])   
    }
    
    res.send(400)
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

    if(IceName.length>0 && IceInfo.length>0 && IceType.length>0&& IceCompany.length>0 && 
        IceCalories.length>0&& IceKilojoules.length>0 && IceFat.length>0&& IceSalt.length>0 
        && IceCarbohydrates.length>0 && IceProtein.length>0)
    {
        
        for (let i = 0; i < iceCream.allIceCreams.length; i++) {
            if (iceCream.allIceCreams[i].Name === req.body.Name) {
                res.send(400)
        }

        if(i === iceCream.allIceCreams.length-1 && res.statusCode != 404)
        {
            iceCream.allIceCreams.push({ ID: iceCream.allIceCreams.length + 1, Name: IceName, Info: IceInfo, Type: IceType, Company: IceCompany, nutritionalContent: { Energy: { Calorie: IceCalories, Kilojoules: IceKilojoules }, Fat: IceFat, Salt: IceSalt, Carbohydrates: IceCarbohydrates, Protein: IceProtein } })
            res.send(200)
        }
    }
    }
    res.send(400)
})

app.delete("/allIceCreams/delete/:id", (req, res) => {
    var index = iceCream.allIceCreams.findIndex(x => x.ID == req.params.id)
    if(iceCream.allIceCreams[index] != null)
    {
        iceCream.allIceCreams.splice(index, 1);
        res.send(200)
    }
    res.send(404)
})
app.use(express.static(__dirname + '/public'));


app.listen(PORT, () => {
    console.log(`Hey Listen!, You're on port: ${PORT}`)
})

function SetNewID() {
    for (let i = 0; i < iceCream.allIceCreams.length; i++) {
        iceCream.allIceCreams[i].ID = i + 1;
    }
}