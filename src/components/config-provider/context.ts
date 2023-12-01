import React from 'react'

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls

  return suffixCls ? `ant-${suffixCls}` : 'ant'
}

export const ConfigContext = React.createContext({
  getPrefixCls: defaultGetPrefixCls
})

export const { Consumer: ConfigConsumer } = ConfigContext