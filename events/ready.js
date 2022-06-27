const client = require("../bot");

client.on("ready", () => {
    console.log(`${client.user.tag} Adlı Botunuz Aktif`)
    client.user.setActivity(`Krenarty<3`)
});
