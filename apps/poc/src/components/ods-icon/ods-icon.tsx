import { Component, Prop, h } from '@stencil/core';

import IconCaution from '@local/odyssey-icons/src/caution.svg';
import IconClose from '@local/odyssey-icons/src/close.svg';
import IconComplete from '@local/odyssey-icons/src/complete.svg';
import IconCopy from '@local/odyssey-icons/src/copy.svg';
import IconDelete from '@local/odyssey-icons/src/delete.svg';
import IconDownload from '@local/odyssey-icons/src/download.svg';
import IconEdit from '@local/odyssey-icons/src/edit.svg';
import IconError from '@local/odyssey-icons/src/error.svg';
import IconFilter from '@local/odyssey-icons/src/filter.svg';
import IconGetInfo from '@local/odyssey-icons/src/get-info.svg';
import IconGoBackward from '@local/odyssey-icons/src/go-backward.svg';
import IconGoForward from '@local/odyssey-icons/src/go-forward.svg';
import IconMinus from '@local/odyssey-icons/src/minus.svg';
import IconNotification from '@local/odyssey-icons/src/notification.svg';
import IconPlus from '@local/odyssey-icons/src/plus.svg';
import IconSearch from '@local/odyssey-icons/src/search.svg';
import IconSettings from '@local/odyssey-icons/src/settings.svg';
import IconUser from '@local/odyssey-icons/src/user.svg';

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
};

@Component({
  tag: 'ods-icon',
  styleUrl: 'ods-icon.scss',
  shadow: true,
})
export class Icon {
  /**
   * Describes the visual variant for the icon.
   */
  @Prop() type:
    | 'caution'
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

    return <span class="ods-icon-wrapper" innerHTML={svg}></span>;
  }
}
