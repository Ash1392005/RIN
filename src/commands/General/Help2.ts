import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help2',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help2 (command_name)`,
            dm: true,
            aliases: ['h2']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-🅆🄴🄴🄱🅂 🄻🄸🅂🅃 ❤️
──────────────
🕷️ ${this.client.config.prefix}ᴀɴɪᴍᴇ
🕸️ ${this.client.config.prefix}ᴀɴɪᴍᴇQᴜᴏᴛᴇ
🕷️ ${this.client.config.prefix}ᴀɴɪᴍᴇᴄʜᴀʀ
🕸️ ${this.client.config.prefix}ɢᴇɴꜱʜɪɴᴄʜᴀʀᴀᴄᴛᴇʀ
🕷️ ${this.client.config.prefix}ʜᴜꜱʙᴀɴᴅᴏ
🕸️ ${this.client.config.prefix}ʟᴏʟɪ
🕷️ ${this.client.config.prefix}ᴍᴀɴɢᴀ
🕸️ ${this.client.config.prefix}ᴘᴏᴋᴇᴍᴏɴ
🕷️ ${this.client.config.prefix}ʀᴘᴀᴘᴇʀ
🕸️ ${this.client.config.prefix}ᴠᴛᴜʙᴇʀ
🕷️ ${this.client.config.prefix}ᴡᴀɪꜰᴜ
🕸️ ${this.client.config.prefix}ᴀᴍᴇᴍᴇ
🕷️ ${this.client.config.prefix}ᴄʜᴀʀᴀᴄᴛᴇʀ
🕸️ ${this.client.config.prefix}ᴄʀᴏꜱꜱᴘʟᴀʏ
🕷️ ${this.client.config.prefix}ʜᴀɪɢᴜꜱʜᴀ
🕸️ ${this.client.config.prefix}ʀᴇᴄᴏᴍᴍᴇɴᴅ
🕷️ ${this.client.config.prefix}ꜱᴀᴜᴄᴇ
🕸️ ${this.client.config.prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
──────────────` }
        )
    }
}
