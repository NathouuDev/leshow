const Discord = require ("discord.js");

var bot = new Discord.Client();

bot.on("ready",function() {
    bot.user.setGame("Bienvenue !")
    console.log("NathnouteBot est connecter a Discord ! Amuse toi bien")
});

bot.login("NDQ0NDY5NTE2MzM2ODg5ODU2.DdcYAQ.LkbYbfs7GUa4i2-dpl8mT34SgkQ")

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + "**Bienvenue à toi sur le discord !**");
    member.addRole(member.guild.roles.find("name", "👋🏼• Membre"));
    bot.user.setGame("Bienvenue !")
});

bot.on("guildMemberRemove", function(member) {
    member.guild.channels.find("name", "bienvenue").sendMessage(member.toString() + "Au revoir ! Merci d'être passée !");
    bot.user.setGame("Bienvenue !")
});
