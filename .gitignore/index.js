const Discord = require ("discord.js");

var bot = new Discord.Client();

bot.on("ready",function() {
    bot.user.setGame("Bienvenue !")
    console.log("NathnouteBot est connecter a Discord ! Amuse toi bien")
});

bot.login(process.env.TOKEN)

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + "**Bienvenue à toi sur le discord !**");
    member.addRole(member.guild.roles.find("name", "👋🏼• Membre"));
    bot.user.setGame("Bienvenue !")
});

bot.on("guildMemberRemove", function(member) {
    member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + "Au revoir ! Merci d'être passée !");
    bot.user.setGame("Bienvenue !")
});
