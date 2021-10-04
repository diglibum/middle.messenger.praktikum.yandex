import { Templator } from "../../../../modules/Templator";
import "./chatItem.scss";
import chatItemTmpl from "./chatItem.tmpl";
import { Block } from "../../../../modules/Block";
import { Props } from "../../../../types";
import { dataTimeFormat } from "../../../../utils";
import ChatController from "../../../../controllers/ChatController";

export class ChatItem extends Block {
  constructor (props: Props) {
    super("div", props);
  }

  render () {
    const { title, avatar, unread_count: unreadCount, last_message: lastMessage } = this.props.chat;
    const tmpl = new Templator(chatItemTmpl);
    const context: Props = {
      title,
      time: lastMessage ? dataTimeFormat(lastMessage.time) : "",
      message: lastMessage ? (lastMessage.content.slice(0, 50) + "...") : ""
    };
    if (avatar) {
      context.avatar = avatar;
    }
    if (unreadCount) {
      context.unreadCount = unreadCount;
    }

    const fragment = tmpl.compile(context);
    fragment.firstElementChild?.addEventListener("click", () => {
      ChatController.setCurrentChat(this.props.chat);
    });
    return fragment;
  }
}
