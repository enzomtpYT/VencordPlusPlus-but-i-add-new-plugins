import { NavContextMenuPatchCallback, addContextMenuPatch, removeContextMenuPatch } from "@api/ContextMenu";
import { showNotification } from "@api/Notifications";
import { definePluginSettings } from "@api/Settings";
import { DataStore } from "@api/index";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { ChannelStore, Menu, PrivateChannelsStore, UserStore } from "@webpack/common";
import { Channel, Guild, Message, User } from "discord-types/general";
interface ContextProps {
    channel: Channel;
    user: User;
    guild: Guild;
}

interface IMessageCreate {
    type: "MESSAGE_CREATE";
    optimistic: boolean;
    isPushNotification: boolean;
    channelId: string;
    guildId: string;
    message: Message;
}

const GuildContext: NavContextMenuPatchCallback = (children, { guild }: ContextProps) => () => {
    if (!guild) return;
    children.splice(-1, 0, (
        <Menu.MenuGroup>
            <Menu.MenuItem
                id="dnd-guild-bypass"
                label={`${bypasses["guilds"].includes(guild.id) ? "Remove" : "Add"} DND Bypass`}
                action={async () => {
                    if (bypasses["guilds"].includes(guild.id)) bypasses["guilds"] = await bypasses["guilds"].filter(id => id !== guild.id);
                    else bypasses["guilds"].push(guild.id);
                    await DataStore.set("bypassdnd", bypasses);
                    settings.store.guilds = (bypasses["guilds"].join(', '));
                }}
            />
        </Menu.MenuGroup>
    ));
};

const ChannelContext: NavContextMenuPatchCallback = (children, { channel }: ContextProps) => () => {
    if (!channel) return;
    children.splice(-1, 0, (
        <Menu.MenuGroup>
            <Menu.MenuItem
                id="dnd-channel-bypass"
                label={`${bypasses["channels"].includes(channel.id) ? "Remove" : "Add"} DND Bypass`}
                action={async () => {
                    if (bypasses["channels"].includes(channel.id)) bypasses["channels"] = await bypasses["channels"].filter(id => id !== channel.id);
                    else bypasses["channels"].push(channel.id);
                    await DataStore.set("bypassdnd", bypasses);
                    settings.store.channels = (bypasses["channels"].join(', '));
                }}
            />
        </Menu.MenuGroup>
    ));
};

const UserContext: NavContextMenuPatchCallback = (children, { user }: ContextProps) => () => {
    if (!user) return;
    children.splice(-1, 0, (
        <Menu.MenuGroup>
            <Menu.MenuItem
                id="dnd-user-bypass"
                label={`${bypasses["users"].includes(user.id) ? "Remove" : "Add"} DND Bypass`}
                action={async () => {
                    if (bypasses["users"].includes(user.id)) bypasses["users"] = await bypasses["users"].filter(id => id !== user.id);
                    else bypasses["users"].push(user.id);
                    await DataStore.set("bypassdnd", bypasses);
                    settings.store.users = (bypasses["users"].join(', '));
                }}
            />
        </Menu.MenuGroup>
    ));
};

let bypasses;

const settings = definePluginSettings({
    guilds: {
        type: OptionType.STRING,
        description: "Guilds to let bypass (notified when pinged anywhere in guild)",
        default: "",
        placeholder: "Separate with commas",
        onChange: async function (value) {
            bypasses["guild"] = value.replace(/\s/g, '').split(',').filter(id => id.trim() !== '');
            await DataStore.set("bypassdnd", bypasses);
        },
    },
    channels: {
        type: OptionType.STRING,
        description: "Channels to let bypass (notified when pinged in that channel)",
        default: "",
        placeholder: "Separate with commas",
        onChange: async function (value) {
            bypasses["channels"] = value.replace(/\s/g, '').split(',').filter(id => id.trim() !== '');
            await DataStore.set("bypassdnd", bypasses);
        },
    },
    users: {
        type: OptionType.STRING,
        description: "Users to let bypass (notified for all messages)",
        default: "",
        placeholder: "Separate with commas",
        onChange: async function (value) {
            bypasses["users"] = value.replace(/\s/g, '').split(',').filter(id => id.trim() !== '');
            await DataStore.set("bypassdnd", bypasses);
        },
    }
});

export default definePlugin({
    name: "BypassDND",
    description: "Still get notifications from specific sources.",
    authors: [Devs.Inbestigator],
    flux: {
        async MESSAGE_CREATE({ optimistic, type, message, guildId, channelId }: IMessageCreate) {
            if (optimistic || type !== "MESSAGE_CREATE") return;
            if (message.state === "SENDING") return;
            if (message.author.id === UserStore.getCurrentUser().id) return;
            if (!message.content) return;

            const { guilds, channels, users } = bypasses;
            if ((guilds.includes(guildId) || channels.includes(channelId)) && (message.content.includes(`<@${UserStore.getCurrentUser().id}>`) || message.mentions.some(mention => mention.id === UserStore.getCurrentUser().id))) {
                await showNotification({
                    title: `${message.author.username} sent a message in ${ChannelStore.getChannel(channelId).name}`,
                    body: message.content,
                    onClick: () => window.location.href = `https://discord.com/channels/${guildId}/${channelId}/${message.id}`
                });
                return;
            }
            if (users.includes(message.author.id) && channelId === await PrivateChannelsStore.getOrEnsurePrivateChannel(message.author.id)) {
                await showNotification({
                    title: `${message.author.username} sent a message in a DM`,
                    body: message.content,
                    onClick: () => window.location.href = `https://discord.com/channels/@me/${channelId}/${message.id}`
                });
            }
        }
    },
    settings,
    async start() {
        addContextMenuPatch("guild-context", GuildContext);
        addContextMenuPatch("channel-context", ChannelContext);
        addContextMenuPatch("user-context", UserContext);
        bypasses = await DataStore.get("bypassdnd") ?? { guilds: [], channels: [], users: [] };
        await DataStore.set("bypassdnd", bypasses);
    },
    stop() {
        removeContextMenuPatch("guild-context", GuildContext);
        removeContextMenuPatch("channel-context", ChannelContext);
        removeContextMenuPatch("user-context", UserContext);
    }
});
