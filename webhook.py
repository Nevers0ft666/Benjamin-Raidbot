# Programado por Narchen

import sys
from discord_webhook import DiscordWebhook, DiscordEmbed
import datetime

# Coloca el URL entre las comillas
webhook_url = ""

print("Iniciando, meta los valores a continuacion.\n")

if len(sys.argv) == 3:
    print("Funcionando")
    user_id = sys.argv[1]
    server_id = sys.argv[2]

    fecha = datetime.datetime.now()
    fechap = fecha.strftime("%d/%m/%Y, %m:%M:%S")

    webhook = DiscordWebhook(url=webhook_url)
    embed = DiscordEmbed(title="Nuevo Raid", description=f"Hubo un nuevo raid en estos momentos: {fechap}", color=0xff0000)
    embed.set_footer(text="Created by Neversoft and Narchen")
    embed.add_embed_field(name="Servidor Atacado:", value=server_id)
    embed.add_embed_field(name="Usuario que lo ataco:", value=user_id)
    webhook.add_embed(embed)
    response = webhook.execute()


else:
    print("La sintaxis de este comando es la siguiente webhook.py [ID Usuario] [ID Servidor]")
