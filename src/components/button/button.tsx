/*
 * @Author: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @Date: 2023-11-30 16:59:02
 * @LastEditors: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @LastEditTime: 2023-11-30 17:43:45
 * @FilePath: \ScreenMediaMobiled:\project\yui\src\components\button\button.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'

import type { ButtonType } from './buttonHelpers'

export interface BaseButtonProps {
  type?: ButtonType;
  children?: React.ReactNode;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
} & BaseButtonProps

export type NativeButtonProps = {
  htmlType?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} & BaseButtonProps

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

const InternalButton: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
> = (props, ref) => {
  const {
    children
  } = props
  console.log(props, ref)

  const kids =
    children

  let buttonNode = (
    <button>
      {kids}
    </button>
  )
  return buttonNode
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  InternalButton
)

export default Button