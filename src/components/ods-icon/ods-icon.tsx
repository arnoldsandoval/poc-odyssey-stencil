import { Component, Prop, h } from '@stencil/core';

import IconCaution from "@okta/odyssey-icons/src/caution.svg";
import IconClose from "@okta/odyssey-icons/src/close.svg";
import IconComplete from "@okta/odyssey-icons/src/complete.svg";
import IconCopy from "@okta/odyssey-icons/src/copy.svg";
import IconDelete from "@okta/odyssey-icons/src/delete.svg";
import IconDownload from "@okta/odyssey-icons/src/download.svg";
import IconEdit from "@okta/odyssey-icons/src/edit.svg";
import IconError from "@okta/odyssey-icons/src/error.svg";
import IconFilter from "@okta/odyssey-icons/src/filter.svg";
import IconGetInfo from "@okta/odyssey-icons/src/get-info.svg";
import IconGoBackward from "@okta/odyssey-icons/src/go-backward.svg";
import IconGoForward from "@okta/odyssey-icons/src/go-forward.svg";
import IconMinus from "@okta/odyssey-icons/src/minus.svg";
import IconNotification from "@okta/odyssey-icons/src/notification.svg";
import IconPlus from "@okta/odyssey-icons/src/plus.svg";
import IconSearch from "@okta/odyssey-icons/src/search.svg";
import IconSettings from "@okta/odyssey-icons/src/settings.svg";
import IconUser from "@okta/odyssey-icons/src/user.svg";

const Icons = {
  'caution': IconCaution,
  'close': IconClose,
  'complete': IconComplete,
  'copy': IconCopy,
  'delete': IconDelete,
  'download': IconDownload,
  'edit': IconEdit,
  'error': IconError,
  'filter': IconFilter,
  'get-info': IconGetInfo,
  'go-backward': IconGoBackward,
  'go-forward': IconGoForward,
  'minus': IconMinus,
  'notification': IconNotification,
  'plus': IconPlus,
  'search': IconSearch,
  'settings': IconSettings,
  'user': IconUser,
}

@Component({
  tag: 'ods-icon',
  styleUrl: 'ods-icon.scss',
  shadow: true,
})

export class Icon {

  /**
   * Describes the visual variant for the icon.
   */
  @Prop() type: 'caution'
  | 'close'
  | 'complete'
  | 'copy'
  | 'delete'
  | 'download'
  | 'edit'
  | 'error'
  | 'filter'
  | 'get-info'
  | 'go-backward'
  | 'go-forward'
  | 'minus'
  | 'notification'
  | 'plus'
  | 'search'
  | 'settings'
  | 'user';

  render() {
    const svg = Icons[this.type];

    return (
      <span class="ods-icon-wrapper" innerHTML={svg}></span>
    );

  }
}
