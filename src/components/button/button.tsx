/*
 * @Author: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @Date: 2023-12-04 12:16:18
 * @LastEditors: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @LastEditTime: 2023-12-05 11:05:35
 * @FilePath: \ScreenMediaMobiled:\project\yui\src\components\button\button.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @Date: 2023-12-04 12:16:18
 * @LastEditors: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @LastEditTime: 2023-12-05 10:20:27
 * @FilePath: \ScreenMediaMobiled:\project\yui\src\components\button\button.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @Date: 2023-12-04 12:16:18
 * @LastEditors: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @LastEditTime: 2023-12-04 15:49:45
 * @FilePath: \ScreenMediaMobiled:\project\yui\src\components\button\button.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @Date: 2023-12-04 12:16:18
 * @LastEditors: DESKTOP-LRKIFMR\UI1 209315540@qq.com
 * @LastEditTime: 2023-12-04 12:32:05
 * @FilePath: \ScreenMediaMobiled:\project\yui\src\components\button\button.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import classNames from 'classnames'
import omit from 'rc-util/lib/omit'
import { ConfigContext } from '../config-provider';
import DisabledContext from '../config-provider/DisabledContext'
import SizeContext from '../config-provider/SizeContext'
import useStyle from './style'
import LoadingIcon from './LoadingIcon'
import { isUnBorderedButtonType } from './buttonHelpers'
import type { ButtonHTMLType, ButtonType, ButtonShape } from './buttonHelpers';
import type { SizeType } from '../config-provider/SizeContext'

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  loading?: boolean | { delay?: number }
  prefixCls?: string;
  className?: string;
  disabled?: boolean;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
  size?: SizeType
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement | HTMLButtonElement>, 'type' | 'onClick'>

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'>

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

type CompoundedComponent = React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLElement>
> & {
  /** @internal */
  __ANT_BUTTON: boolean;
};

type Loading = number | boolean

const InternalButton: React.ForwardRefRenderFunction<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
> = (props) => {
  const {
    loading = false,
    ghost = false,
    prefixCls: customizePrefixCls,
    type = 'default',
    shape = 'default',
    danger,
    size: customizeSize,
    disabled: customDisabled,
    className,
    children,
    block = false,
    icon,
    ...rest
  } = props

  const { getPrefixCls } = React.useContext(ConfigContext)
  const prefixCls = getPrefixCls('btn', customizePrefixCls)
  const [wrapSSR, hashId] = useStyle(prefixCls)

  const size = React.useContext(SizeContext)
  const disabled = React.useContext(DisabledContext)
  const mergedDisabled = customDisabled ?? disabled

  const loadingOrDelay: Loading = typeof loading === 'boolean' ? loading : loading?.delay || true

  React.useEffect(() => {
    let delayTimer: number | null = null
    if (typeof loadingOrDelay === 'number') {
      delayTimer = window.setTimeout(() => {
        delayTimer = null
        setInnerLoading(loadingOrDelay)
      }, loadingOrDelay)
    } else {
      setInnerLoading(loadingOrDelay)
    }

    function cleanupTimer() {
      if (delayTimer) {
        window.clearTimeout(delayTimer)
        delayTimer = null
      }
    }

    return cleanupTimer
  }, [loadingOrDelay])

  const [innerLoading, setInnerLoading] = React.useState<Loading>(!!loading)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;

    if (innerLoading) {
      e.preventDefault()
      return
    }

    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e)
  }

  const sizeClassNameMap = { large: 'lg', small: 'sm', middle: undefined }
  const sizeFullname = customizeSize || size
  const sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || '' : ''
  
  const iconType = innerLoading ? 'loading' : icon

  const linkButtonRestProps = omit(rest as AnchorButtonProps & { navigate: any }, ['navigate'])
  const hrefAndDisabled = linkButtonRestProps.href !== undefined && mergedDisabled

  const classes = classNames(
    prefixCls,
    hashId,
    {
      [`${prefixCls}-${shape}`]: shape !== 'default' && shape,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
      [`${prefixCls}-background-ghost`]: ghost && !isUnBorderedButtonType(type),
      [`${prefixCls}-dangerous`]: !!danger,
      [`${prefixCls}-block`]: !!block,
      [`${prefixCls}-loading`]: innerLoading,
      [`${prefixCls}-disabled`]: hrefAndDisabled
    },
    className
  )
  console.log(classes)

  const iconNode = 
    icon && !innerLoading ? (
      icon
    ) : (
      <LoadingIcon existIcon={!!icon} prefixCls={prefixCls} loading={!!innerLoading} />
    )
  const kids = children

  if (linkButtonRestProps.href !== undefined) {
    return wrapSSR(
      <a
        {...linkButtonRestProps}
        className={classes}
        onClick={handleClick}
      >
        {iconNode}
        {kids}
      </a>
    )
  }

  const buttonNode = (
    <button
      className={classes}
      onClick={handleClick}
      disabled={mergedDisabled}
    >
      {iconNode}
      {kids}
    </button>
  )
  return wrapSSR(buttonNode)
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  InternalButton
) as CompoundedComponent

export default Button